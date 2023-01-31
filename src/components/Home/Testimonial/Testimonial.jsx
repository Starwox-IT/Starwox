import React from 'react'
import './Testimonial.css'
import rightarrow from 'assets/right-arrow.png';
import { reviewData } from './../../../Data/Review';

const Testimonial = () => {
  return (
    <div className="testimonial">
      <div className="testimonial-wrapper">
        <div className="hero-bottom">
          <div className="hero-text review-heading-text">
              <h1>Client <span className="review-red">reviews</span> and testimonials</h1>
              <p>Here are some reviews and testimonials from our trusted clients concerning our services at starwox </p>
          </div>

          <div className="portfolio-btn">
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
