import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Logo from 'assets/logo.png';
// import $ from 'jquery'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  document.onclick = function(clickEvent){
    if(clickEvent.target.className !== "nav-items" && clickEvent.target.id !== "hamburger"){
        setIsOpen(false)
   
    }
  }

  function Open(){
    setIsOpen(!isOpen)

    // This was supposed to be for stopping the scroll when hamburger menu is clicked but i dont know why its misbehaving yet
    // if ($('.nav-items').is(':visible')) {
    //   $('body').addClass("fixed-position");
    // }if($('.open').is(':visible')) {
    //   $('body').removeClass("fixed-position");
    // }
  }

  return (
    <div className="navbar">
        <div className="navbar-wrapper">
          <img src={Logo} alt="" />

          <div className={`nav-items ${isOpen && "open"}`}>
            <div className="overlay"></div>
            
            <ul className="navbar-nav">
              <Link to='/'>Home</Link>

              <li><a href="/#services">Services</a></li>
                
              <Link to='/about'>About us</Link>
                
              <li><a className='portfolios' href="#portfolios">Portfolio</a></li>
            </ul>
          </div>

          <a href={() => false} id='hamburger'  onClick={Open}>
            <div>
                <div className={`bar nav-toggle  ${isOpen && "open"}`}></div>
            </div>
          </a>
        </div>
    </div>
  )
}

export default Navbar
