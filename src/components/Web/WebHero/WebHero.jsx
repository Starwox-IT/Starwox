import React from 'react'
import './WebHero.css'
import rightarrow from 'assets/right-arrow.png';
import web_illu from 'assets/web-illustration.png';
import pattern1 from 'assets/PATTERN1.png';
import team from 'assets/web-team.png';
import { webDoingsData } from 'Data/WebDoings';
import WebDoings from '../WebDoings/WebDoings';
import { expertData } from 'Data/WebExpertise';
import Doings from 'components/Home/Doings/Doings';
import strategy from 'assets/strategy-icon.png';
import quality from 'assets/web-quality.png';


const WebHero = () => {
  const webDoings = webDoingsData.map(webDoing => {
    return(
      <WebDoings
        image = {webDoing.image}
        title={webDoing.title}
        text={webDoing.text}
      />
    )
  })

  const expertDoings = expertData.map(expert => {
    return (
        <Doings
          image={expert.image}
          title={expert.title}
          description={expert.description}
          arrow={expert.arrow}
        />
    )
  })


  return (
    <div className="web-hero">
      <img src={pattern1} alt="" className='pattern2'/>
        <div className="web-hero-wrapper">
          <div className="hero-top">
            <div className="hero-text">
                <h1><span className="main-red">Web </span>Development</h1>
                <p className='web-p-bold'>Together we will build the website you need...</p>
                <p>We take care to build the websites your brand needs, taking your needs, brand message and target market into full account.</p>
            </div>

            <img src={web_illu} alt="" />
          </div>

          <div className="hero-bottom " id='services'>
            <div className="hero-text">
              <h1>Web <span className="main-red">Services</span></h1>
              <p>Our technical solutions include but all limited to social networks, e-commerce e-learning platforms, ecommerce projects, and much more- we are eager to tackle tech’s most bold innovative ideas. </p>
            </div>

            <div className="portfolio-btn">
              <p>see our portfolio</p>
              <img src={rightarrow} alt="" />
            </div>
          </div>

          <div className="web-doing-display">
            {webDoings}
          </div>

          <div className="Expertise">
            <h1 className='expertise-h1'>We have <span className="main-red">expertise</span> building websites across multiple industries </h1>
            <div className="Expertise-main">
              {expertDoings}
            </div>
          </div>

          <div className="hero-bottom">
            <div className="hero-text">
              <h1>Ready-made or custom?</h1>
              <h1 className="main-red">We develop both</h1>
              <p>If you want to implement a ready-made web template, or you want your website built from scratch, tailored to your specific needs, we are capable of giving you what you want, and how you want it. </p>
            </div>

            <div className="portfolio-btn">
              <p>see our portfolio</p>
              <img src={rightarrow} alt="" />
            </div>
          </div>

          <div className="getting">
            <div className="getting-text-h1">
              <h1>What you are <span className="main-red">getting</span></h1>
              <p>Everyday we work hard to make the lives of our clients more progressive and productive</p>
            </div>

            <div className="getting-main">
              <div className="getting-same">
                <div className="getting-text">
                  <img src={team} alt="" />
                  <h3>Experienced Team</h3>
                  <p>Our talents are trained developers, designers and managers with 5+ years of active experience who have seasoned understanding of trends and product delivery across various sectors</p>
                </div>
              </div>

              <div className="getting-same">
                <div className="getting-text">
                  <img src={strategy} alt="" />
                  <h3>Full-service web development company  </h3>
                  <p>From ideation to delivery, maintenance and upgrades, we give you the right team to handle the entire software development process</p>
                </div>
              </div>

              <div className="getting-same">
                <div className="getting-text">
                  <img src={quality} alt="" />
                  <h3>High quality</h3>
                  <p>You get high quality of service for experienced hands and minds with proper work ethic and delivery</p>
                </div>
              </div>
            </div>
          </div>

        </div>
    </div>
  )
}

export default WebHero
