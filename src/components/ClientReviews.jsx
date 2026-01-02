import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

const reviews = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    course: 'Full Stack Development',
    rating: 5,
    comment: 'Excellent training! The instructors are very knowledgeable and the curriculum is industry-relevant. Got placed in a top MNC.',
    image: 'https://i.pravatar.cc/150?img=12'
  },
  {
    id: 2,
    name: 'Priya Sharma',
    course: 'Python & Machine Learning',
    rating: 5,
    comment: 'Best decision I made! The hands-on projects helped me understand concepts deeply. Highly recommended!',
    image: 'https://i.pravatar.cc/150?img=47'
  },
  {
    id: 3,
    name: 'Amit Patel',
    course: 'Java Programming',
    rating: 5,
    comment: 'Great learning experience. The placement assistance team helped me land my dream job. Thank you Tekseii!',
    image: 'https://i.pravatar.cc/150?img=33'
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    course: 'UI/UX Design',
    rating: 5,
    comment: 'Amazing course content and practical assignments. The design portfolio I built here got me multiple job offers.',
    image: 'https://i.pravatar.cc/150?img=20'
  }
]

const ClientReviews = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Students Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our successful students
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-600">{review.course}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-3">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700">{review.comment}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ClientReviews

