import React, { useEffect } from "react";
import {gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ItHero.css'
import it_illu from 'assets/IT-illustration.png'
import rightarrow from 'assets/right-arrow.png';
import { itDoingsData } from 'Data/ITDoings';
import ITDoings from '../ITDoings/ITDoings';

gsap.registerPlugin(ScrollTrigger);

const ItHero = () => {
    useEffect(() => {
        let tl = gsap.timeline({defaults: {ease: Power4.easeInOut, duration:2}})

        tl.to('.it-hero-img', {opacity:1, 'transform': 'scale(1)'})
            .to('.it-hero-text', {'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)', opacity:1, y:0,  duration:2.2}, '-=2'
            )

        let tltwo = gsap.timeline({
            scrollTrigger: {
                trigger: '.it-portfolio-text',
            }
        });

        tltwo.to('.it-portfolio-text', {'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)',opacity: 1,y: '0'})
            .to('.it-portfolio-btn', {opacity: 1, y: 0})


        const itDoingsImgs = gsap.utils.toArray(".it-doings-img");
        itDoingsImgs.forEach(itDoingImg => {
            gsap.to(itDoingImg,{
                y: 0,
                opacity: 1,
                scrollTrigger: {
                    trigger: itDoingImg,
                    start: "top 90%"
                }
            });
        })

        const itDoingsTxts = gsap.utils.toArray(".it-doings-text");
        itDoingsTxts.forEach(itDoingTxt => {
            gsap.to(itDoingTxt,{
            y: 0,
            opacity:1,
            delay: .3,
            'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)',
            scrollTrigger: {
                trigger: itDoingTxt,
                start: "top 90%"
            }
            });
        })
    })




    const itDoings = itDoingsData.map(itDoing => {
        return(
            <ITDoings
                image = {itDoing.image}
                title={itDoing.title}
                text={itDoing.text}
            />
        )
    })

  return (
    <div className="it-hero">
        <div className="it-hero-wrapper">
            <div className="hero-top">
                <div className="hero-text it-hero-text">
                    <h1><span className="main-red">IT </span>support & cyber security</h1>
                    <p className='web-p-bold'>when you need someone to work in the background, we’ re here</p>
                    <p>We assist and support businesses by deploying cutting-edge IT solutions that add value and improve operational efficiencies.</p>
                </div>

                <img src={it_illu} alt="" className='it-hero-img'/>
            </div>

            <div className="hero-bottom" id='services'>
                <div className="hero-text it-portfolio-text">
                    <h1><span className="main-red">Analysis </span> service include:</h1>
                    <p>Our highly qualified, experienced, and well-equipped IT professionals are proficient in Windows, macOS, Ubuntu, and Linux, among other operating systems. We are well-known for our quality, finesse, and promptness. Among our IT services are:</p>
                </div>

                <div className="portfolio-btn it-portfolio-btn">
                    <p>see our portfolio</p>
                    <img src={rightarrow} alt="" />
                </div>
            </div>

            <div className="it-doing-display">
                {itDoings}
            </div>
        </div>
    </div>
  )
}

export default ItHero
