import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCode, FaGraduationCap, FaLaptopCode, FaDatabase, FaPalette, FaMicrochip } from 'react-icons/fa'

const offerings = [
  {
    icon: <FaCode className="text-4xl" />,
    title: 'Programming Courses',
    description: 'C++, Java, Python with comprehensive training',
    link: '/courses'
  },
  {
    icon: <FaLaptopCode className="text-4xl" />,
    title: 'Full Stack Development',
    description: 'Master modern web technologies and frameworks',
    link: '/courses'
  },
  {
    icon: <FaDatabase className="text-4xl" />,
    title: 'Database Management',
    description: 'MySQL, PostgreSQL, MongoDB, AWS Database',
    link: '/courses'
  },
  {
    icon: <FaPalette className="text-4xl" />,
    title: 'Design Courses',
    description: 'UI/UX, Graphic Design, Animation, Figma',
    link: '/courses'
  },
  {
    icon: <FaMicrochip className="text-4xl" />,
    title: 'IoT & EEE',
    description: 'Internet of Things and Electronics courses',
    link: '/courses'
  },
  {
    icon: <FaGraduationCap className="text-4xl" />,
    title: 'Career Services',
    description: 'Resume building, Interview training, LinkedIn optimization',
    link: '/services'
  }
]

const WhatWeOffer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What We Offer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT training and services to help you succeed in the digital world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-500 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform">
                {offering.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{offering.title}</h3>
              <p className="text-gray-600 mb-6">{offering.description}</p>
              <Link
                to={offering.link}
                className="text-blue-600 font-semibold hover:text-blue-700 transition"
              >
                Learn More →
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhatWeOffer

