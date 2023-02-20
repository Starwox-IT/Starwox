
import Contact from 'components/Home/Contact/Contact'
import Footer from 'components/Home/Footer/Footer'
// import Navbar from 'components/Home/Navbar/Navbar'
import React from 'react'
import './Web.css'
import WebHero from './WebHero/WebHero'

const Web = () => {
  return (
    <div className="web margin-top">
        {/* <Navbar/> */}
        <WebHero/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Web