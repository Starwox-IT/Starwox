import React, { useEffect } from "react";
import {gsap} from 'gsap';
import './Contact.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {

    useEffect(() => {
        gsap.to('.contact-main', {y:0, opacity: 1 ,ease:"back", duration:1,
            scrollTrigger:{
                trigger:".contact-main",
                start: "top 80%"
            }
        })
    })

  return (
    <div className="contact">
        <div className="contact-wrapper">
            <div className="contact-heading">
                <h1 className="form-heading">Let’s Chat</h1>
                <p>Let’s create something great together!</p>
            </div>

            <div className="contact-main">
                <form action="" id='form'>
                    <div className="name contact-same">
                        {/* <label htmlFor="name">Your Name</label> */}
                        <input type="text" id='name' name='name'placeholder="Your Name"/>
                    </div>
                    <div className="name contact-same">
                        {/* <label htmlFor="phone">Phone Number</label> */}
                        <input type="text" id='phone' name='phone' placeholder="Phone Number"/>
                    </div>
                    <div className="name contact-same">
                        {/* <label htmlFor="address">Email Address</label> */}
                        <input type="text" id='address' name='address' placeholder="Email Address"/>
                    </div>
                    <div className="name contact-same">
                        {/* <label htmlFor="about">Tell us about your project</label> */}
                        <input type="text" id='about' name='about' placeholder="Type your message..."/>
                    </div>

                    <div className="submit">
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
