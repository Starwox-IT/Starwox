import Contact from 'components/Home/Contact/Contact'
import Footer from 'components/Home/Footer/Footer'
import Navbar from 'components/Home/Navbar/Navbar'
import React from 'react'
import './About.css'
import AboutHero from './AboutHero/AboutHero'

const About = () => {
  return (
    <div className="About margin-top">
        <Navbar/>
        <AboutHero/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default About
