import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaGraduationCap, FaUser, FaEnvelope, FaPhone } from 'react-icons/fa'

const jobPostings = [
  {
    id: 1,
    title: 'Senior Full Stack Developer',
    department: 'Development',
    location: 'Salem, Tamil Nadu',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'We are looking for an experienced Full Stack Developer to join our team. You will be responsible for developing and maintaining web applications using modern technologies.',
    requirements: [
      'Strong experience in React.js and Node.js',
      'Proficiency in JavaScript, HTML, CSS',
      'Experience with databases (MySQL, MongoDB)',
      'Knowledge of RESTful APIs',
      'Good problem-solving skills'
    ],
    postedDate: '2024-01-15'
  },
  {
    id: 2,
    title: 'Python & Machine Learning Instructor',
    department: 'Training',
    location: 'Salem, Tamil Nadu',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Join our training team as a Python and Machine Learning instructor. You will teach students and help them build real-world projects.',
    requirements: [
      'Strong knowledge of Python programming',
      'Experience with Machine Learning libraries (scikit-learn, TensorFlow)',
      'Good communication and teaching skills',
      'Experience in training/teaching is a plus',
      'Passion for education'
    ],
    postedDate: '2024-01-10'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    department: 'Design',
    location: 'Salem, Tamil Nadu / Remote',
    type: 'Full-time',
    experience: '2-3 years',
    description: 'We are seeking a creative UI/UX Designer to create engaging and user-friendly designs for our web and mobile applications.',
    requirements: [
      'Proficiency in Figma, Adobe XD, or Sketch',
      'Strong portfolio showcasing UI/UX work',
      'Understanding of user-centered design principles',
      'Experience with responsive design',
      'Good communication skills'
    ],
    postedDate: '2024-01-08'
  },
  {
    id: 4,
    title: 'Digital Marketing Specialist',
    department: 'Marketing',
    location: 'Salem, Tamil Nadu',
    type: 'Full-time',
    experience: '1-3 years',
    description: 'Looking for a Digital Marketing Specialist to manage our online presence, SEO, social media, and advertising campaigns.',
    requirements: [
      'Experience with SEO and SEM',
      'Knowledge of Google Ads and Facebook Ads',
      'Social media management experience',
      'Content creation skills',
      'Analytics and reporting experience'
    ],
    postedDate: '2024-01-05'
  },
  {
    id: 5,
    title: 'Java Developer',
    department: 'Development',
    location: 'Salem, Tamil Nadu',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'We need a skilled Java Developer to work on enterprise applications using Spring Boot and related technologies.',
    requirements: [
      'Strong Java programming skills',
      'Experience with Spring Boot framework',
      'Knowledge of RESTful APIs',
      'Database experience (MySQL, PostgreSQL)',
      'Understanding of microservices architecture'
    ],
    postedDate: '2024-01-03'
  },
  {
    id: 6,
    title: 'Business Development Executive',
    department: 'Sales',
    location: 'Salem, Tamil Nadu',
    type: 'Full-time',
    experience: '1-2 years',
    description: 'Join our sales team to help grow our business by acquiring new clients and maintaining relationships with existing ones.',
    requirements: [
      'Excellent communication skills',
      'Sales experience preferred',
      'Ability to build relationships',
      'Goal-oriented mindset',
      'Knowledge of IT services is a plus'
    ],
    postedDate: '2024-01-01'
  }
]

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null)
  const [applicationForm, setApplicationForm] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: ''
  })

  const handleApply = (job) => {
    setSelectedJob(job)
    setApplicationForm({
      name: '',
      email: '',
      phone: '',
      resume: '',
      coverLetter: ''
    })
  }

  const handleSubmitApplication = (e) => {
    e.preventDefault()
    // Here you would typically send the application to your backend
    console.log('Application submitted:', { job: selectedJob, ...applicationForm })
    alert('Thank you for your application! We will contact you soon.')
    setSelectedJob(null)
    setApplicationForm({ name: '', email: '', phone: '', resume: '', coverLetter: '' })
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
            Careers at Tekseii Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Join our team and help shape the future of IT education and services
          </motion.p>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 text-center">Open Positions</h2>
            <p className="text-xl text-gray-600 text-center">Explore opportunities to grow with us</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {jobPostings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-2">
                      {job.department}
                    </span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaMapMarkerAlt className="text-blue-600" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaClock className="text-blue-600" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaBriefcase className="text-blue-600" />
                    <span>{job.experience} experience</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{job.description}</p>
                <button
                  onClick={() => handleApply(job)}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl p-8 max-w-2xl w-full my-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedJob.title}</h2>
            <p className="text-gray-600 mb-6">{selectedJob.description}</p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Requirements:</h3>
              <ul className="space-y-2">
                {selectedJob.requirements.map((req, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-600 mt-1">•</span> {req}
                  </li>
                ))}
              </ul>
            </div>

            <form onSubmit={handleSubmitApplication} className="space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <FaUser className="inline mr-2 text-blue-600" />
                  Full Name *
                </label>
                <input
                  type="text"
                  value={applicationForm.name}
                  onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <FaEnvelope className="inline mr-2 text-blue-600" />
                  Email *
                </label>
                <input
                  type="email"
                  value={applicationForm.email}
                  onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  <FaPhone className="inline mr-2 text-blue-600" />
                  Phone *
                </label>
                <input
                  type="tel"
                  value={applicationForm.phone}
                  onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Resume/CV Link *
                </label>
                <input
                  type="url"
                  value={applicationForm.resume}
                  onChange={(e) => setApplicationForm({ ...applicationForm, resume: e.target.value })}
                  required
                  placeholder="Link to your resume (Google Drive, Dropbox, etc.)"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Cover Letter</label>
                <textarea
                  value={applicationForm.coverLetter}
                  onChange={(e) => setApplicationForm({ ...applicationForm, coverLetter: e.target.value })}
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600"
                  placeholder="Tell us why you're a great fit for this position..."
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Submit Application
                </button>
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="flex-1 bg-gray-200 text-gray-900 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  )
}

export default Careers

