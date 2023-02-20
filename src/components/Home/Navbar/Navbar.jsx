import React, { useState } from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import Logo from 'assets/logo.png';
import { HashLink } from "react-router-hash-link"
// import $ from 'jquery'

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  function Open(){
    setTimeout(() => {
      setIsOpen(!isOpen)
    }, 200);
  }



  document.onclick = function(clickEvent){
    if(clickEvent.target.className !== "nav-items" && clickEvent.target.id !== "hamburger"){
        setIsOpen(false)
   
    }
  }

  // function Open(){
  //   setIsOpen(!isOpen)

  //   // This was supposed to be for stopping the scroll when hamburger menu is clicked but i dont know why its misbehaving yet
  //   // if ($('.nav-items').is(':visible')) {
  //   //   $('body').addClass("fixed-position");
  //   // }if($('.open').is(':visible')) {
  //   //   $('body').removeClass("fixed-position");
  //   // }
  // }

  return (
    <div className="navbar">
        <div className="navbar-wrapper">
          <img src={Logo} alt="" />

          <div className={`nav-items ${isOpen && "open"}`}>
            <div className="overlay"></div>
            
            <ul className="navbar-nav">
              <NavLink to='/' className={({ isActive }) => (isActive ? 'active': '')}>Home</NavLink>

              <HashLink to="/#services">Services</HashLink>
                
              <NavLink to='/about'>About us</NavLink>
                
              <NavLink to='/h'>Portfolio</NavLink>
            </ul>
          </div>

          <a href={() => false} id='hamburger'>
              <div className={`nav-toggle ${isOpen && "open"}`} onClick={Open}>
                  <div className="bar"></div>
              </div>
          </a>
        </div>
    </div>
  )
}

export default Navbar
