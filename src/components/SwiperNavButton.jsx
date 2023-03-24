import { React } from 'react';
import { useSwiper } from 'swiper/react';
import testimonialRight from 'assets/testimonial-right-arrow.png';
import testimonialLeft from 'assets/testimonial-left-arrow.png';

const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns">
        <img src={testimonialLeft} onClick={() => swiper.slidePrev()} alt="" className="testimonialLeft" />
        <img src={testimonialRight} onClick={() => swiper.slideNext()} alt="" className="testimonialRight" />
    </div>
  );
}

export default SwiperNavButton
