import { FaPhone, FaEnvelope, FaWhatsapp, FaFacebook, FaInstagram } from 'react-icons/fa'

const TopNav = () => {
  return (
    <div className="bg-blue-900 text-white py-2 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+917904352560" className="flex items-center gap-2 hover:text-blue-300 transition">
              <FaPhone /> <span>+91 79043 52560</span>
            </a>
            <a href="mailto:info@tekseii.com" className="flex items-center gap-2 hover:text-blue-300 transition">
              <FaEnvelope /> <span>info@tekseii.com</span>
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://wa.me/917904352560" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition">
              <FaWhatsapp size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <FaFacebook size={20} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopNav

