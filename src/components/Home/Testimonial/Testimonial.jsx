import React, { useEffect } from "react";
import {gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Testimonial.css'
import rightarrow from 'assets/right-arrow.png';
import { reviewData } from './../../../Data/Review';

gsap.registerPlugin(ScrollTrigger);

const Testimonial = () => {
  useEffect(() => {
    let tlthree = gsap.timeline({
      scrollTrigger: {
          trigger: '.review-heading-text',
      }
    });
    tlthree.to('.review-heading-text', {'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)',opacity: 1,y: '0',})
          .to('.review-portfolio-btn', {opacity: 1, y: 0})

    
    let mm = gsap.matchMedia();
    mm.add("(min-width: 1067px)", () => {
      gsap.to('.review-img', {y:0, stagger:.2,ease:"back",
        scrollTrigger:{
          trigger:".review-img",
        }
      })
    })

    mm.add("(max-width: 1066px)", () => {
      const reviewImgs = gsap.utils.toArray(".review-img");
      reviewImgs.forEach(reviewImg => {
        gsap.to(reviewImg, {
          y:0,
          scrollTrigger:{
            trigger:reviewImg,
          }
        })
      })
    })

    const reviewTexts = gsap.utils.toArray(".review-text-main");
      reviewTexts.forEach(reviewText => {
        gsap.to(reviewText, {
          ease: Power4.easeInOut,
          y:0,
          'clip-path': 'polygon(0% 100%, 99% 100%, 100% 0%, 0% 0%)',
          duration: 1,
          
          scrollTrigger:{
            trigger:reviewText,
            start: "top 100%",
          }
        })
    })
    
  })

  return (
    <div className="testimonial">
      <div className="testimonial-wrapper">
        <div className="hero-bottom">
          <div className="hero-text review-heading-text">
              <h1>Client <span className="review-red">reviews</span> and testimonials</h1>
              <p>Here are some reviews and testimonials from our trusted clients concerning our services at starwox </p>
          </div>

          <div className="portfolio-btn review-portfolio-btn">
              <p>see our portfolio</p>
              <img src={rightarrow} alt="" />
          </div>
        </div>

        <div className="reviews">
          {reviewData.map((review, i)=>{
            return(
              <div className="review-main">
                <div className="review-img">
                  <img src={review.image} alt="" />
                  <div className="review-text">
                    <p className="name">{review.name}</p>
                    <p className="role">{review.role}</p>
                    <p className="company">{review.company}</p>
                  </div>
                </div>

                <div className="review-text-main">
                  <p>{review.review}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Testimonial
