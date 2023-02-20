import Contact from 'components/Home/Contact/Contact'
import Footer from 'components/Home/Footer/Footer'
// import Navbar from 'components/Home/Navbar/Navbar'
import React from 'react'
import './IT.css'
import ItHero from './ItHero/ItHero'

const IT = () => {
  return (
    <div className="IT margin-top">
        {/* <Navbar/> */}
        <ItHero/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default IT
