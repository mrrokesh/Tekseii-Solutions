import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const slides = [
  {
    id: 1,
    title: 'Transform Your Career with Expert IT Training',
    description: 'Master in-demand skills with our comprehensive courses in Programming, Full Stack Development, and more.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&q=80',
    buttonText: 'Enroll Now',
    link: '/courses'
  },
  {
    id: 2,
    title: 'Full Stack Development Mastery',
    description: 'Learn HTML, CSS, JavaScript, React, Node.js, and build real-world projects from scratch.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1920&q=80',
    buttonText: 'Learn More',
    link: '/courses'
  },
  {
    id: 3,
    title: 'Python & Machine Learning Excellence',
    description: 'Dive deep into Python programming, Machine Learning, and AI with hands-on projects.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4ed18ef?w=1920&q=80',
    buttonText: 'Explore Courses',
    link: '/courses'
  },
  {
    id: 4,
    title: 'Professional Services for Your Business',
    description: 'Web Development, App Development, SEO, Digital Marketing, and Cloud Solutions.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80',
    buttonText: 'Our Services',
    link: '/services'
  },
  {
    id: 5,
    title: 'Workshops & Corporate Training',
    description: 'Join our workshops and seminars on Digital Marketing, Cloud Computing, Data Analytics, and AutoCAD 3D.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920&q=80',
    buttonText: 'Join Workshop',
    link: '/contact'
  }
]

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Auto-play
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [currentIndex])

  return (
    <div className="relative h-[600px] md:h-[700px] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -300 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/70"></div>
          </div>
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="max-w-3xl text-white"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  {slides[currentIndex].title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                  {slides[currentIndex].description}
                </p>
                <Link
                  to={slides[currentIndex].link}
                  className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition transform hover:scale-105"
                >
                  {slides[currentIndex].buttonText}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
      >
        <FaChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition"
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition ${
              index === currentIndex ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel

