import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaUser, FaEnvelope, FaPhone, FaGraduationCap, FaMapMarkerAlt, FaPaperPlane, FaExclamationCircle, FaSpinner, FaCheckCircle } from 'react-icons/fa'
import { submitForm } from '../services/formService'

const Contact = () => {
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

  const validateMessage = (message) => {
    if (!message.trim()) {
      return 'Message is required'
    }
    if (message.trim().length < 10) {
      return 'Message must be at least 10 characters'
    }
    if (message.trim().length > 1000) {
      return 'Message must not exceed 1000 characters'
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
      message: true
    }
    setTouched(allTouched)

    const newErrors = {}
    const requiredFields = ['name', 'email', 'phone', 'message']
    
    requiredFields.forEach((key) => {
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
      const result = await submitForm(formData, 'contact')

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: result.message || 'Thank you for your message! We will get back to you soon.'
        })
        setFormData({ name: '', email: '', phone: '', course: '', message: '' })
        setErrors({})
        setTouched({})
      } else {
        let errorMessage = result.error || 'Failed to send message. Please try again.'
        
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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Get in touch with us. We're here to help you achieve your goals.
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8" noValidate>
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

                <div className="mb-6">
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

                <div className="mb-6">
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

                <div className="mb-6">
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

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">
                    <FaGraduationCap className="inline mr-2 text-blue-600" />
                    Interested Course/Service
                  </label>
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent ${
                      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    <option value="">Select a course/service</option>
                    <optgroup label="Programming">
                      <option value="c++">C++ Programming</option>
                      <option value="java">Java Programming</option>
                      <option value="python">Python</option>
                    </optgroup>
                    <optgroup label="Full Stack">
                      <option value="fullstack">Full Stack Development</option>
                      <option value="react">React.js</option>
                      <option value="nodejs">Node.js</option>
                    </optgroup>
                    <optgroup label="Services">
                      <option value="webdev">Web Development</option>
                      <option value="appdev">App Development</option>
                      <option value="digital-marketing">Digital Marketing</option>
                    </optgroup>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-semibold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    disabled={isSubmitting}
                    rows="5"
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
                      {formData.message.length}/1000 characters
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || Object.values(errors).some(error => error !== '')}
                  className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <FaMapMarkerAlt className="text-blue-600 text-2xl mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                      <p className="text-gray-600">
                        194.3 Patcha Road, Rajiv Nagar 2nd Ward,<br />
                        Kannankurichi, Salem-8
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaPhone className="text-blue-600 text-2xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                      <a href="tel:+917904352560" className="text-blue-600 hover:underline">
                        +91 79043 52560
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaEnvelope className="text-blue-600 text-2xl" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                      <a href="mailto:info@tekseiisolutions.com" className="text-blue-600 hover:underline">
                        info@tekseiisolutions.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d78.1!3d11.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzAwLjAiTiA3OMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Tekseii Solutions Location"
                  className="w-full"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
