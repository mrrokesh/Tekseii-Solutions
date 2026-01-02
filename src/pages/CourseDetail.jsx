import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { courses } from '../data/courses'
import { FaClock, FaUser, FaCheckCircle } from 'react-icons/fa'

const CourseDetail = () => {
  const { courseId } = useParams()
  const course = courses.find(c => c.id === courseId)

  if (!course) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Not Found</h2>
          <Link to="/courses" className="text-blue-600 hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="max-w-4xl">
              <span className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4 text-sm font-semibold">
                {course.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{course.title}</h1>
              <p className="text-xl text-blue-100 mb-8">{course.description}</p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <FaClock className="text-2xl" />
                  <span className="text-lg">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaUser className="text-2xl" />
                  <span className="text-lg">{course.level}</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105"
              >
                Enroll Now
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Image */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-96 object-cover rounded-xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Course Modules</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
              {course.modules.map((module, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition flex items-start gap-3"
                >
                  <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{module}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Learning?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of students who have transformed their careers with this course
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105"
              >
                Enroll Now
              </Link>
              <Link
                to="/courses"
                className="inline-block bg-transparent border-2 border-white text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition"
              >
                Browse More Courses
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CourseDetail

