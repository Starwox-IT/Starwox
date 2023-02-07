import {gsap, Power4 } from 'gsap';
import React, { useEffect } from "react";
import './Hero.css'
import illu1 from 'assets/illu 1.png';
import rightarrow from 'assets/right-arrow.png';
import { doingsData } from 'Data/Doings';
import Doings from '../Doings/Doings';

const Hero = () => {
    useEffect(()=> {
        let tl = gsap.timeline({defaults: {ease: Power4.easeInOut, duration:2}})
        tl.to('.hero-img', {opacity:1, 'transform': 'scale(1)'})
            .to('.main-hero-text', {'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)', opacity:1, y:0, duration:2.2}, '-=2')
    }, [])
    

    const doings = doingsData.map(doing => {
        return (
            <Doings
                image={doing.image}
                title={doing.title}
                description={doing.description}
                see={doing.see}
                link={doing.link}
            />
        )
    })
    
    // let tl = new TimelineLite({ delay: 0.3})
    // useEffect(() => {
    //     tl.from('.hero-text', {y:15, opacity: 0, ease:Power3.easeOut, delay:0.2}, 'start')
    // }, [])

  return (
    <div className="hero">
        <div className="hero-wrapper">
            <div className="hero-top">
                <div className="hero-text main-hero-text">
                    <h1>Your <span className="effi">efficient</span> team <br/> beyond walls</h1>
                    <p>We make business run smoothly by handling your digital processes smoothly with team work and strategic planning. </p>
                </div>

                <img src={illu1} alt="" className='hero-img'/>
            </div>

            <div className="hero-bottom" id='services'>
                <div className="hero-text">
                    <h1>What <span className="we">we</span> do</h1>
                    <p>We give your business unique value and the authority to stand out among competitors with:</p>
                </div>

                <div className="portfolio-btn">
                    <p>see our portfolio</p>
                    <img src={rightarrow} alt="" />
                </div>
            </div>
        </div>

        <div className="doings-display">
            {doings}
        </div>
    </div>
  )
}

export default Hero
