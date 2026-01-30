import { Link } from 'react-router-dom'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Tekseii Solutions</h3>
            <p className="text-gray-400 mb-4">
              Leading IT training and services provider, empowering students and businesses with cutting-edge technology solutions.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
                <FaInstagram size={20} />
              </a>
              <a href="https://wa.me/917904352560" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
                <FaWhatsapp size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-400 hover:text-white transition">Courses</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white transition">Services</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition">Contact</Link></li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Courses</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Full Stack Development</li>
              <li>Python & Machine Learning</li>
              <li>Java Programming</li>
              <li>Cloud Computing</li>
              <li>Data Analytics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-blue-400" />
                <span className="text-gray-400">194.3 Patcha Road, Rajiv Nagar 2nd Ward, Kannankurichi, Salem-8</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-blue-400" />
                <a href="tel:+917904352560" className="text-gray-400 hover:text-white transition">+91 79043 52560</a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@tekseiisolutions.com" className="text-gray-400 hover:text-white transition">info@tekseiisolutions.com</a>
                  <a href="mailto:support@tekseiisolutions.com" className="text-gray-400 hover:text-white transition">support@tekseiisolutions.com</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Tekseii Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

