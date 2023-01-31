import React from 'react'
import './AboutHero.css'
import personality from 'assets/personality.png'
import rightarrow from 'assets/right-arrow.png';
import goal from 'assets/goal.png'

const AboutHero = () => {
  return (
    <div className="about-hero">
        <div className="about-hero-wrapper">
            <div className="about-hero-top">
                <div className="about-hero-text">
                    <h1>Who <span className="main-red">we</span> are</h1>
                    <p>We are a team of tech professionals who provide reliable tech skills to companies and businesses in order to help them build and manage their businesses effectively. At Starwox, we provide you with the It skills and services that your business needs to run smoothly and grow. We have worked with clients across over 15 industries including E-commerce, Health, and Energy, the majority of our clients have kept their relation-ship with us for the past 3 years. We have at least 4-5 years of experience.</p>
                </div>
                <div className="about-hero-img">
                    <img src={personality} alt="" />
                </div>
            </div>

            <div className="hero-bottom" id='services'>
                <div className="hero-text">
                    <h1>Our <span className="main-red">services</span></h1>
                    <p>We provide the following services:</p>
                    <ul className="services-list">
                        <li>Full stack development and maintenance</li>
                        <li>Virtual assistant and IT support</li>
                        <li>Data Analysis</li>
                        <li>Virtual private network setup and configuration</li>
                    </ul>
                </div>

                <div className="portfolio-btn">
                    <p>see our portfolio</p>
                    <img src={rightarrow} alt="" />
                </div>
            </div>

            <div className="mission">
                <div className="mission-heading">
                    <h1 className="mission-h1">Our <span className="main-red">mission</span></h1>
                    <p className="mission-p">It is our mission to increase the quality of businesses using our services in the best capacity possible. </p>
                </div>
                <div className="mission-img">
                    <img src={goal} alt="" />
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default AboutHero
