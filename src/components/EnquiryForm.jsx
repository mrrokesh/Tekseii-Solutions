import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaExclamationCircle, FaSpinner, FaCheckCircle } from 'react-icons/fa'
import { submitForm } from '../services/formService'

const EnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' })

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return 'Name is required'
    }
    if (name.trim().length < 2) {
      return 'Name must be at least 2 characters'
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      return 'Name should only contain letters and spaces'
    }
    return ''
  }

  const validateEmail = (email) => {
    if (!email.trim()) {
      return 'Email is required'
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return 'Please enter a valid email address'
    }
    return ''
  }

  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return 'Phone number is required'
    }
    const cleanPhone = phone.replace(/[\s\-+]/g, '')
    if (!/^[0-9]{10,13}$/.test(cleanPhone)) {
      return 'Please enter a valid phone number (10-13 digits)'
    }
    return ''
  }

  const validateCourse = (course) => {
    if (!course) {
      return 'Please select a course'
    }
    return ''
  }

  const validateMessage = (message) => {
    if (!message.trim()) {
      return 'Message is required'
    }
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters'
    }
    if (message.trim().length > 500) {
      return 'Message must not exceed 500 characters'
    }
    return ''
  }

  const validateField = (name, value) => {
    let error = ''
    switch (name) {
      case 'name':
        error = validateName(value)
        break
      case 'email':
        error = validateEmail(value)
        break
      case 'phone':
        error = validatePhone(value)
        break
      case 'course':
        error = validateCourse(value)
        break
      case 'message':
        error = validateMessage(value)
        break
      default:
        break
    }
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
    setSubmitStatus({ type: '', message: '' })

    if (touched[name]) {
      const error = validateField(name, value)
      setErrors({ ...errors, [name]: error })
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched({ ...touched, [name]: true })
    const error = validateField(name, value)
    setErrors({ ...errors, [name]: error })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const allTouched = {
      name: true,
      email: true,
      phone: true,
      course: true,
      message: true
    }
    setTouched(allTouched)

    const newErrors = {}
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key])
      if (error) {
        newErrors[key] = error
      }
    })

    setErrors(newErrors)

    if (Object.keys(newErrors).length > 0) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus({ type: '', message: '' })

    try {
      const result = await submitForm(formData, 'enquiry')

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your enquiry! We will contact you soon.'
        })
        setFormData({ name: '', email: '', phone: '', course: '', message: '' })
        setErrors({})
        setTouched({})
      } else {
        let errorMessage = result.error || 'Failed to submit form. Please try again.'
        
        // Add helpful message for RLS errors
        if (result.error && result.error.includes('row-level security')) {
          errorMessage = 'Database setup required. Please contact the administrator or check CORRECT_RLS_POLICY.sql file for setup instructions.'
        }
        
        setSubmitStatus({
          type: 'error',
          message: errorMessage
        })
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again or contact us directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          <div className="text-center mb-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
            <p className="text-xl text-blue-100">
              Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl p-8" noValidate>
            {/* Status Message */}
            {submitStatus.message && (
              <div
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  submitStatus.type === 'success'
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}
              >
                {submitStatus.type === 'success' ? (
                  <FaCheckCircle className="text-green-600 text-xl" />
                ) : (
                  <FaExclamationCircle className="text-red-600 text-xl" />
                )}
                <p className="font-medium">{submitStatus.message}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <FaUser className="inline mr-2 text-blue-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition ${
                    errors.name && touched.name
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && touched.name && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <FaExclamationCircle className="text-xs" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <FaEnvelope className="inline mr-2 text-blue-600" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition ${
                    errors.email && touched.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && touched.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <FaExclamationCircle className="text-xs" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <FaPhone className="inline mr-2 text-blue-600" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition ${
                    errors.phone && touched.phone
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  placeholder="+91 79043 52560"
                />
                {errors.phone && touched.phone && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <FaExclamationCircle className="text-xs" />
                    {errors.phone}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <FaGraduationCap className="inline mr-2 text-blue-600" />
                  Interested Course *
                </label>
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  disabled={isSubmitting}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition ${
                    errors.course && touched.course
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300'
                  } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  <option value="">Select a course</option>
                  <option value="c++">C++ Programming</option>
                  <option value="java">Java Programming</option>
                  <option value="python">Python</option>
                  <option value="fullstack">Full Stack Development</option>
                  <option value="ml">Machine Learning</option>
                  <option value="ai">Artificial Intelligence</option>
                  <option value="database">Database Management</option>
                  <option value="design">Design Courses</option>
                </select>
                {errors.course && touched.course && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <FaExclamationCircle className="text-xs" />
                    {errors.course}
                  </p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-semibold mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={isSubmitting}
                rows="4"
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition ${
                  errors.message && touched.message
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300'
                } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                placeholder="Tell us about your requirements..."
              />
              {errors.message && touched.message && (
                <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                  <FaExclamationCircle className="text-xs" />
                  {errors.message}
                </p>
              )}
              {formData.message && !errors.message && (
                <p className="mt-1 text-sm text-gray-500">
                  {formData.message.length}/500 characters
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting || Object.values(errors).some(error => error !== '')}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Enquiry'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default EnquiryForm
