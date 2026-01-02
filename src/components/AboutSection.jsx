import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheckCircle } from 'react-icons/fa'

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="About Us"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Tekseii Solutions</h2>
            <p className="text-gray-600 mb-6 text-lg">
              Tekseii Solutions is a leading IT training and services company dedicated to empowering individuals and businesses with cutting-edge technology skills and solutions. We offer comprehensive courses in programming, full-stack development, machine learning, and more.
            </p>
            <p className="text-gray-600 mb-6 text-lg">
              Our mission is to bridge the gap between industry requirements and academic knowledge, providing practical, hands-on training that prepares students for real-world challenges.
            </p>
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700">Expert Instructors</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700">Industry-Relevant Curriculum</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700">Hands-On Projects</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-green-500 text-xl" />
                <span className="text-gray-700">Placement Assistance</span>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition transform hover:scale-105"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection

