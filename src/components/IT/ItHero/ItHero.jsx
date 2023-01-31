import React from 'react'
import './ItHero.css'
import it_illu from 'assets/IT-illustration.png'
import rightarrow from 'assets/right-arrow.png';
import { itDoingsData } from 'Data/ITDoings';
import ITDoings from '../ITDoings/ITDoings';


const ItHero = () => {
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
                <div className="hero-text">
                    <h1><span className="main-red">IT </span>support & cyber security</h1>
                    <p className='web-p-bold'>when you need someone to work in the background, we’ re here</p>
                    <p>We assist and support businesses by deploying cutting-edge IT solutions that add value and improve operational efficiencies.</p>
                </div>

                <img src={it_illu} alt="" />
            </div>

            <div className="hero-bottom" id='services'>
                <div className="hero-text">
                    <h1><span className="main-red">Analysis </span> service include:</h1>
                    <p>Our highly qualified, experienced, and well-equipped IT professionals are proficient in Windows, macOS, Ubuntu, and Linux, among other operating systems. We are well-known for our quality, finesse, and promptness. Among our IT services are:</p>
                </div>

                <div className="portfolio-btn">
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
