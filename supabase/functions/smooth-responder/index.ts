import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { Resend } from "https://esm.sh/resend@2.0.0"

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY') || ''

serve(async (req) => {
  try {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
      return new Response(null, {
        status: 204,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
        },
      })
    }

    const { to, subject, name, email, phone, course, message, formType } = await req.json()

    if (!RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured')
    }

    const resend = new Resend(RESEND_API_KEY)

    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb;">New ${formType === 'contact' ? 'Contact' : 'Enquiry'} Form Submission</h2>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Course/Service:</strong> ${course || 'Not specified'}</p>
          <p><strong>Message:</strong></p>
          <p style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">${message || 'No message provided'}</p>
        </div>
        <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
        <p style="color: #6b7280; font-size: 12px;">This email was sent from Tekseii Solutions contact form.</p>
      </div>
    `

    const { data, error } = await resend.emails.send({
      from: 'Tekseii Solutions <noreply@tekseiisolutions.com>',
      to: to || 'info@tekseiisolutions.com',
      replyTo: email,
      subject: subject || `New ${formType} Form Submission`,
      html: emailBody,
    })

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ success: true, data }),
      { 
        status: 200,
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } 
      }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { 
        status: 500, 
        headers: { 
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        } 
      }
    )
  }
})

