import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Carousel from '../components/Carousel'
import AboutSection from '../components/AboutSection'
import WhatWeOffer from '../components/WhatWeOffer'
import EnquiryForm from '../components/EnquiryForm'
import ClientReviews from '../components/ClientReviews'
import GoogleMap from '../components/GoogleMap'

const Home = () => {
  return (
    <div>
      <Carousel />
      <AboutSection />
      <WhatWeOffer />
      <EnquiryForm />
      <ClientReviews />
      <GoogleMap />
    </div>
  )
}

export default Home

