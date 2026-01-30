import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const GoogleMap = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600">Visit our training center</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-blue-600 text-xl mt-1" />
                <div>
                  <p className="font-semibold text-gray-900">Address</p>
                  <p className="text-gray-600">
                    194.3 Patcha Road, Rajiv Nagar 2nd Ward,<br />
                    Kannankurichi, Salem-8
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaPhone className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold text-gray-900">Phone</p>
                  <a href="tel:+917904352560" className="text-blue-600 hover:underline">
                    +91 79043 52560
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-blue-600 text-xl" />
                <div>
                  <p className="font-semibold text-gray-900">Email</p>
                  <a href="mailto:info@tekseiisolutions.com" className="text-blue-600 hover:underline">
                    info@tekseiisolutions.com
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 flex gap-4">
              <a
                href="https://maps.google.com/?q=194.3+Patcha+Road,+Rajiv+Nagar+2nd+Ward,+Kannankurichi,+Salem-8"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition inline-flex items-center gap-2"
              >
                Get Directions
              </a>
              <a
                href="tel:+917904352560"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-flex items-center gap-2"
              >
                <FaPhone /> Call Now
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5!2d78.1!3d11.65!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDM5JzAwLjAiTiA3OMKwMDYnMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ minHeight: '400px', border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Tekseii Solutions Location"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default GoogleMap

