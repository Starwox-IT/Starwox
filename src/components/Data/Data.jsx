import Contact from 'components/Home/Contact/Contact'
import Footer from 'components/Home/Footer/Footer'
// import Navbar from 'components/Home/Navbar/Navbar'
import React from 'react'
import './Data.css'
import DataHero from './DataHero/DataHero'

const Data = () => {
  return (
    <div className="Data margin-top">
        {/* <Navbar/> */}
        <DataHero/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Data
