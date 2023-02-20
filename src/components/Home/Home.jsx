import React from 'react'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Hero from './Hero/Hero'
import './Home.css'

import Project from './Projects/Project'
import Testimonial from './Testimonial/Testimonial'


const Home = () => {
  return (
    <div className='Home margin-top'>
      
      <Hero/>
      <Project/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home