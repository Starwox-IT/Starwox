import React, { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import {gsap} from 'gsap';
import './Contact.css'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
            console.log(result.text)
            console.log("message sent")
            e.target.reset()
            toast.success('Your Form has been recieved', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
                
        }, (error) => {
            console.log(error.text);
            toast.error('An error occured', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        });
    }

    

  return (
    <div className="contact" id="form">
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
                        <input type="tel" id='phone' name='phone' placeholder="Phone Number" pattern="^([0|\+[0-9]{1,5})?([0-9]{10})$" minlength="11" maxlength="13" title="Please enter a correct phone number" required/>
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
        <ToastContainer />
    </div>
  )
}

export default Contact
