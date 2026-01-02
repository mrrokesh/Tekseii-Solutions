import { useState, useEffect } from 'react'
import TopNav from './TopNav'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      <TopNav />
      <Navbar isScrolled={isScrolled} />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

