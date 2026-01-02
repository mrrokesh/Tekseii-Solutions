import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { courses } from '../data/courses'
import { FaClock, FaUser, FaCheckCircle, FaArrowLeft, FaAward, FaLaptopCode } from 'react-icons/fa'

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
    <div className="pt-20 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {/* Back to Courses Link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="mb-6"
        >
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition"
          >
            <FaArrowLeft /> <span>Back to Courses</span>
          </Link>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Course Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-3">
                    {course.category}
                  </span>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {course.title}
                  </h1>
                  <p className="text-xl text-gray-600 mb-6">{course.description}</p>
                </div>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <FaClock className="text-blue-600" />
                  <span className="font-medium">{course.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <FaAward className="text-xl" />
                  <span className="font-semibold">Certificate Included</span>
                </div>
              </div>
            </motion.div>

            {/* Course Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Objectives</h2>
              <div className="space-y-4">
                {(course.objectives || [
                  'Master core concepts',
                  'Develop practical skills',
                  'Build real-world projects',
                  'Prepare for industry'
                ]).map((objective, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                    <span className="text-gray-700 text-lg">{objective}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Course Modules */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Course Modules</h2>
              <ol className="space-y-3">
                {course.modules.map((module, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </span>
                    <span className="text-gray-700 text-lg pt-1">{module}</span>
                  </li>
                ))}
              </ol>
            </motion.div>

            {/* Career Opportunities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8 mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Career Opportunities</h2>
              <div className="flex flex-wrap gap-3">
                {(course.careerOpportunities || [
                  'Software Developer',
                  'IT Professional',
                  'Technical Specialist'
                ]).map((career, index) => (
                  <span
                    key={index}
                    className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-medium"
                  >
                    {career}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="sticky top-24"
            >
              {/* Course Information Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaClock className="text-blue-600" />
                      <span className="font-semibold">Duration</span>
                    </div>
                    <p className="text-gray-900 font-medium">{course.duration}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaUser className="text-blue-600" />
                      <span className="font-semibold">Prerequisites</span>
                    </div>
                    <p className="text-gray-900 font-medium">
                      {course.prerequisites || course.level}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaAward className="text-blue-600" />
                      <span className="font-semibold">Certification</span>
                    </div>
                    <p className="text-gray-900 font-medium">
                      {course.certification || 'Tekseii Solutions Certificate'}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 text-gray-600 mb-2">
                      <FaLaptopCode className="text-blue-600" />
                      <span className="font-semibold">Software & Tools</span>
                    </div>
                    <p className="text-gray-900 font-medium">
                      {course.software || 'Industry Standard Tools'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Enroll CTA */}
              <Link
                to="/contact"
                className="block w-full bg-blue-600 text-white text-center py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition transform hover:scale-105"
              >
                Enroll Now
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Ready to Start Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-xl p-12 mt-12 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Start?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105"
          >
            Enroll Now
          </Link>
        </motion.section>
      </div>
    </div>
  )
}

export default CourseDetail
