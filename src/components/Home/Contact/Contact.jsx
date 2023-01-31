import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className="contact">
        <div className="contact-wrapper">
            <div className="contact-heading">
                <h1><span className="lets">Let’s </span>Chat</h1>
                <p>Let’s create something great together!</p>
            </div>

            <div className="contact-main">
                <form action="" id='form'>
                    <div className="name contact-same">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id='name' name='name'/>
                    </div>
                    <div className="name contact-same">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="text" id='phone' name='phone'/>
                    </div>
                    <div className="name contact-same">
                        <label htmlFor="address">Email Address</label>
                        <input type="text" id='address' name='address'/>
                    </div>
                    <div className="name contact-same">
                        <label htmlFor="about">Tell us about your project</label>
                        <input type="text" id='about' name='about'/>
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
