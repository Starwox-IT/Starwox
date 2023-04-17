import React, { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
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

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
            'service_x76zck9',
            'template_l5ga0na',
            form.current, 
            'VEUpwO1PVay1bFFWh'
        )
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
            e.target.reset()
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className="contact">
        <div className="contact-wrapper">
            <div className="contact-heading">
                <h1 className="form-heading">Let’s Chat</h1>
                <p>Let’s create something great together!</p>
            </div>

            <div className="contact-main">
                <form ref={form} id='form' onSubmit={sendEmail}>
                    <div className="name contact-same">
                        <input type="text" id='name' name='name' placeholder="Your Name" required/>
                    </div>
                    <div className="name contact-same">
                        <input type="text" id='phone' name='phone' placeholder="Phone Number" required/>
                    </div>
                    <div className="name contact-same">
                        <input type="email" id='email' name='email' placeholder="Email Address" required/>
                    </div>
                    <div className="name contact-same">
                        <textarea type="text" id='message' name='message' placeholder="Type your message..." required/>
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
