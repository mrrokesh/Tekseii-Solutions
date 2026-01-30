import { supabase } from '../config/supabase'

/**
 * Save form submission to Supabase database
 */
export const saveFormSubmission = async (formData, formType = 'contact') => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([
        {
          form_type: formType,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          course: formData.course || null,
          message: formData.message || null,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      
      // Provide helpful error message for RLS errors
      if (error.code === '42501') {
        const helpfulError = new Error(
          'Database security policy error. Please run the SQL from SETUP_DATABASE.sql in your Supabase Dashboard SQL Editor to fix this.'
        )
        helpfulError.originalError = error
        throw helpfulError
      }
      
      throw error
    }

    return { success: true, data }
  } catch (error) {
    console.error('Error saving form submission:', error)
    return { success: false, error: error.message }
  }
}

/**
 * Send email notification using Supabase Edge Function
 * This calls a Supabase Edge Function that uses Resend
 * Note: Edge Function must be deployed for this to work
 */
export const sendEmailNotification = async (formData, formType = 'contact') => {
  try {
    // Check if Edge Function is available (optional feature)
    // If not set up, gracefully skip email sending
    const { data, error } = await supabase.functions.invoke('smooth-responder', {
      body: {
        to: ['info@tekseiisolutions.com', 'support@tekseiisolutions.com'],
        subject: `New ${formType === 'contact' ? 'Contact' : 'Enquiry'} Form Submission from ${formData.name}`,
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course || 'Not specified',
        message: formData.message || 'No message provided',
        formType: formType
      }
    })

    if (error) {
      // Edge Function not deployed or CORS issue - this is expected if not set up
      console.warn('Email notification not available (Edge Function not deployed):', error.message)
      return { success: false, error: 'Email service not configured', skipEmail: true }
    }

    return { success: true, data }
  } catch (error) {
    // Edge Function doesn't exist or CORS issue - this is fine, forms still work
    console.warn('Email notification not available:', error.message)
    return { success: false, error: 'Email service not configured', skipEmail: true }
  }
}

/**
 * Submit form - saves to database and sends email
 */
export const submitForm = async (formData, formType = 'contact') => {
  try {
    // Save to database first
    const dbResult = await saveFormSubmission(formData, formType)
    
    if (!dbResult.success) {
      return { 
        success: false, 
        error: 'Failed to save submission. Please try again or contact us directly.' 
      }
    }

    // Try to send email notification (non-blocking, optional)
    const emailResult = await sendEmailNotification(formData, formType)
    
    // Email is optional - form submission is successful even if email fails
    const emailSent = emailResult.success === true
    
    if (!emailSent && !emailResult.skipEmail) {
      // Only log if it's an unexpected error (not just "not configured")
      console.warn('Form saved but email notification failed:', emailResult.error)
    }

    return { 
      success: true, 
      message: 'Thank you for your submission! We have received your message and will contact you soon.',
      dbSaved: true,
      emailSent: emailSent
    }
  } catch (error) {
    console.error('Error submitting form:', error)
    return { 
      success: false, 
      error: error.message || 'An error occurred. Please try again or contact us directly.' 
    }
  }
}
