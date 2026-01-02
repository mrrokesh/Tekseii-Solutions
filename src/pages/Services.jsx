import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaCode, FaMobileAlt, FaShoppingCart, FaCogs, FaUsers, 
  FaChartLine, FaBriefcase, FaChalkboardTeacher, FaUsersCog 
} from 'react-icons/fa'
import ClientReviews from '../components/ClientReviews'

const services = [
  {
    icon: <FaCode />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies. We create responsive, scalable, and high-performance websites tailored to your business needs.',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization']
  },
  {
    icon: <FaMobileAlt />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android. We build apps that deliver exceptional user experiences.',
    features: ['iOS Development', 'Android Development', 'React Native', 'Flutter Apps']
  },
  {
    icon: <FaShoppingCart />,
    title: 'E-Commerce',
    description: 'Complete e-commerce solutions to help you sell online. From product catalogs to payment integration, we handle it all.',
    features: ['Online Store Setup', 'Payment Gateway', 'Inventory Management', 'Order Tracking']
  },
  {
    icon: <FaCogs />,
    title: 'ERP Software Development',
    description: 'Enterprise Resource Planning solutions to streamline your business operations. Custom ERP systems designed for your specific needs.',
    features: ['Custom ERP Solutions', 'Business Process Automation', 'Data Analytics', 'Cloud Integration']
  },
  {
    icon: <FaUsers />,
    title: 'CRM Service',
    description: 'Customer Relationship Management systems to help you manage customer interactions, improve sales, and enhance customer satisfaction.',
    features: ['Customer Management', 'Sales Pipeline', 'Marketing Automation', 'Analytics & Reports']
  },
  {
    icon: <FaChartLine />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing services including SEO, social media marketing, Google Ads, and content marketing to grow your online presence.',
    features: ['SEO Services', 'Social Media Marketing', 'Google Ads', 'Content Marketing']
  },
  {
    icon: <FaBriefcase />,
    title: 'Internship',
    description: 'Hands-on internship programs for students and fresh graduates. Gain real-world experience working on live projects.',
    features: ['Live Projects', 'Mentorship', 'Industry Exposure', 'Certificate']
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Workshop',
    description: 'Intensive workshops on trending technologies. Learn from industry experts in focused, hands-on sessions.',
    features: ['Expert Instructors', 'Hands-on Practice', 'Latest Technologies', 'Networking']
  },
  {
    icon: <FaUsersCog />,
    title: 'Seminar',
    description: 'Educational seminars on various IT topics. Stay updated with the latest trends and technologies in the industry.',
    features: ['Industry Experts', 'Latest Trends', 'Q&A Sessions', 'Networking']
  },
  {
    icon: <FaChalkboardTeacher />,
    title: 'Corporate Trainings',
    description: 'Customized training programs for organizations. Upskill your team with industry-relevant skills and technologies.',
    features: ['Customized Curriculum', 'On-site/Online Training', 'Certification', 'Post-training Support']
  }
]

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)

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
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Comprehensive IT solutions to help your business grow and succeed
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-500 group"
              >
                <div className="text-blue-600 text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-blue-600">✓</span> {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                  >
                    Learn More
                  </button>
                  <Link
                    to="/contact"
                    className="flex-1 bg-gray-100 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition text-center"
                  >
                    Enquire
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="text-blue-600 text-5xl mb-4">{selectedService.icon}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedService.title}</h2>
            <p className="text-gray-600 mb-6 text-lg">{selectedService.description}</p>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Features:</h3>
            <ul className="space-y-2 mb-6">
              {selectedService.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-2 text-gray-700">
                  <span className="text-blue-600">✓</span> {feature}
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <Link
                to="/contact"
                onClick={() => setSelectedService(null)}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition text-center"
              >
                Contact Us
              </Link>
              <button
                onClick={() => setSelectedService(null)}
                className="flex-1 bg-gray-200 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Client Reviews */}
      <ClientReviews />
    </div>
  )
}

export default Services

