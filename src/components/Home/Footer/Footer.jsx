import React from 'react'
import './Footer.css'
import Logo from 'assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        
        <div className="reach">
          <h3>GET IN TOUCH</h3>
          <div className="reach-general">
            <div className="reach-left">
              <div className="reach-left-top">
                <p className="email">starwox1@gmail.com</p>
                <p className="phone-num1">+447840361050</p>
                <p className="phone-num2">+2348135651507</p>
              </div>

              <div className="reach-left-bottom">
                <h3>KNOW MORE</h3>

                <div className="footer-nav">
                  <ul className="footer-nav-left">
                    <li ><a href="#top" className='homes'>Portfolio</a></li>

                    <li><a className='abouts' href="#abouts">About</a></li>
    
                    <li><a className='resumes' href="#resumes">Contact</a></li>
                  </ul>

                  <ul className="footer-nav-right">
                    <li ><a href="#top" className='homes'>Services</a></li>
                    <li><a className='abouts' href="#abouts">Blog</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="location">
              <p>72 Glenkirk Drive, G15 6AH, Glasgow, United Kingdom</p>
              <p>244 New Lagos Road, Benin City, Edo State 300001</p>
            </div>
          </div>
          
        </div>

        

        <div className="icons">
          <a href="https://web.facebook.com/ikponmwoba.eloghosa" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faFacebook}/>
          </a>
          <a href="https://www.instagram.com/el0tech/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faInstagram}/>
          </a>
          <a href="https://twitter.com/eL0TECH" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter}/>
          </a>
          <a href="https://www.linkedin.com/in/eloghosa-ikponmwoba/" target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin}/>
          </a>
        </div>
      </div>

      <div className="copyright">
        <div className="copy-privacy">
          <p>C 2022 Starwox All Rights Reserved </p>
          <p>Privacy policy <span className="dot">.</span></p>
        </div>
        
        <div className="cookie-terms">
          <p> Cookie policy <span className="dot">.</span></p>
          <p>Terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
