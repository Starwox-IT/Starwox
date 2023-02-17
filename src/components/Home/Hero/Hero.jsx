import React, { useEffect } from "react";
import {gsap, Power4 } from 'gsap';
import './Hero.css'
import illu1 from 'assets/illu 1.png';
import rightarrow from 'assets/right-arrow.png';
import { doingsData } from 'Data/Doings';
import Doings from '../Doings/Doings';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    useEffect(()=> {
        // This is the timeline for hero section
        let tl = gsap.timeline({defaults: {ease: Power4.easeInOut, duration:2}})

        // This is the timeline for what we do section
        let tltwo = gsap.timeline({
            scrollTrigger: {
                trigger: '.hero-bottom-text',
            }
        });

        

        //This is the annimation for hero section
        tl.to('.hero-img', {opacity:1, 'transform': 'scale(1)'})
            .to('.main-hero-text', {'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)', opacity:1, y:0,  duration:2.2}, '-=2'
            )

        //This is the annimation for what we do section    
        tltwo.to('.hero-bottom-text', {'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)',opacity: 1,y: '0', delay: .5})
            .to('.portfolio-btn-home1', {opacity: 1, y: 0})



        let mm = gsap.matchMedia();
        //This is the service page for screen size of 999px and below
        mm.add("(max-width: 1017px)", () => {
            const doings = gsap.utils.toArray(".doings-main");
            doings.forEach(doing => {
                gsap.to(doing, {
                    y:0,
                    opacity: 1,
                    scrollTrigger:{
                        trigger:doing,
                    }
                })
            })
        })

        //This is the service page for screen size of 1000px and above
        mm.add("(min-width: 1018px)", () => {
            let tlthree = gsap.timeline({
                scrollTrigger: {
                    trigger: '.doings-main',
                    start:"top 80%"
                }
            })
            tlthree.to('.home-card1', {y:0, stagger:.2, ease:"back", opacity: 1, delay: 1})

            gsap.to('.home-card2', {y:0, stagger:.2,ease:"back", opacity: 1, delay: .5,
                scrollTrigger:{
                    trigger:".home-card2",
                    start:"top 80%"
                }
            })
        })
    }, [])
    

    const doings = doingsData.map(doing => {
        return (
            <Doings
                image={doing.image}
                title={doing.title}
                description={doing.description}
                see={doing.see}
                link={doing.link}
                class={doing.class}
            />
        )
    })

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
                <div className="hero-text hero-bottom-text">
                    <h1>What <span className="we">we</span> do</h1>
                    <p>We give your business unique value and the authority to stand out among competitors with:</p>
                </div>

                <div className="portfolio-btn portfolio-btn-home1">
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
