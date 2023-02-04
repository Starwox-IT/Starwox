import React from 'react'
import './Hero.css'
import illu1 from 'assets/illu 1.png';
import rightarrow from 'assets/right-arrow.png';
import { doingsData } from 'Data/Doings';
import Doings from '../Doings/Doings';

const Hero = () => {
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
    

  return (
    <div className="hero">
        <div className="hero-wrapper">
            <div className="hero-top">
                <div className="hero-text">
                    <h1>Your <span className="effi">efficient</span> team <br/> beyond walls</h1>
                    <p>We make business run smoothly by handling your digital processes smoothly with team work and strategic planning. </p>
                </div>

                <img src={illu1} alt="" />
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
