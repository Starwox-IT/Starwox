import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'
import footerLogo from 'assets/footer-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { HashLink } from "react-router-hash-link"


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="social">
          <img src={footerLogo} alt="" />
          <p className="email">starwox1@gmail.com</p>
          <div className="icons">
            <a href="https://web.facebook.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faFacebook}/>
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faInstagram}/>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faTwitter}/>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <FontAwesomeIcon icon={faLinkedin}/>
            </a>
          </div>
        </div>

        <div className="numbers">
          <h4>Phone Number</h4>
          <p className="number1">+447840361050</p>
          <p className="number2">+2348135651507</p>
        </div>

        <div className="office">
          <div className="head-office">
            <h4>Head Office</h4>
            <p>72 Glenkirk Drive, G15 6AH, Glasgow, United Kingdom</p>
          </div>
          <div className="branch-office">
            <h4>Branch Office</h4>
            <p>244 New Lagos Road, Benin City, Edo State 300001</p>
          </div>
        </div>

        <div className="footer-links">
          <div className="main-footer-links">
            <h4>Company</h4>
            <ul className="navbar-nav">
              <NavLink to='/'>Home</NavLink>

              <NavLink to='/h'>Portfolio</NavLink>
              
              <NavLink to='/about'>About</NavLink>

              <HashLink to="/#services">Services</HashLink>
            </ul>
          </div>

          <div className="resource">
            <h4>Resources</h4>
            <div className="resource-main">
              <p>Privacy policy</p>
              <p className="dot1">.</p>
              <p>Cookie policy</p>
              <p className="dot2">.</p>
              <p>Terms and conditions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>&#169; 2022 Starwox All Rights Reserved </p>
      </div>
    </div>
  )
}

export default Footer
