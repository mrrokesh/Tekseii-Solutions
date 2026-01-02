import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaCheckCircle, FaUsers, FaAward, FaGraduationCap, FaRocket } from 'react-icons/fa'

const About = () => {
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
            About Tekseii Solutions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto"
          >
            Empowering the next generation of IT professionals with world-class training and services
          </motion.p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                alt="Who We Are"
                className="rounded-lg shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Who We Are</h2>
              <p className="text-gray-600 mb-4 text-lg">
                Tekseii Solutions is a premier IT training and services company based in Salem, Tamil Nadu. We specialize in providing comprehensive training programs in programming, full-stack development, machine learning, database management, and design.
              </p>
              <p className="text-gray-600 mb-4 text-lg">
                With years of experience in the industry, we have trained thousands of students and professionals, helping them achieve their career goals and land their dream jobs in top companies.
              </p>
              <p className="text-gray-600 text-lg">
                Our team of expert instructors brings real-world experience to the classroom, ensuring that our students learn not just theory, but practical skills that are in high demand in today's job market.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We stand out from the crowd with our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <FaUsers />, title: 'Expert Instructors', desc: 'Industry professionals with years of experience' },
              { icon: <FaAward />, title: 'Industry Recognition', desc: 'Certified courses recognized by top companies' },
              { icon: <FaGraduationCap />, title: 'Placement Support', desc: '100% placement assistance and career guidance' },
              { icon: <FaRocket />, title: 'Latest Technologies', desc: 'Learn cutting-edge tools and frameworks' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition"
              >
                <div className="text-blue-600 text-5xl mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-blue-50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To bridge the gap between academic knowledge and industry requirements by providing practical, hands-on training that empowers individuals to excel in their careers. We are committed to delivering high-quality education and services that transform lives and drive innovation in the IT sector.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 p-8 rounded-xl"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                To become the leading IT training and services provider in India, recognized for excellence in education and innovation. We envision a future where every student who passes through our doors is equipped with the skills, knowledge, and confidence to succeed in the rapidly evolving technology landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Get Started CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of successful students who have transformed their careers with Tekseii Solutions
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About

