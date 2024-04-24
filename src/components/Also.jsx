import React from 'react'
import "../styles/also.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import img from '../img/also1.png'
import stars from '../img/stars.png'
import { NavLink } from 'react-router-dom';
function Also() {
  return (
    <section className='also'>
        <h2>You might also like...</h2>
      <Swiper breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        }}  slidesPerView={2} spaceBetween={0} navigation={true} loop={true} modules={[Navigation]} className="alsoswiper">
        <SwiperSlide>
            <div className="alsocard">
                <img className='alsocardimg' src={img} alt="" />
                <h3>Full - bodied</h3>
                <h5>Bottle</h5>
                <div className="reviews">
                    <img src={stars} alt="" />
                    <span>(32 reviews)</span>
                </div>
                <p>$35.59</p>
                <NavLink to="/shop">Shop now</NavLink>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="alsocard">
                <img src={img} alt="" />
                <h3>Full - bodied</h3>
                <h5>Bottle</h5>
                <div className="reviews">
                    <img src={stars} alt="" />
                    <span>(32 reviews)</span>
                </div>
                <p>$35.59</p>
                <NavLink to="/shop">Shop now</NavLink>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="alsocard">
                <img src={img} alt="" />
                <h3>Full - bodied</h3>
                <h5>Bottle</h5>
                <div className="reviews">
                    <img src={stars} alt="" />
                    <span>(32 reviews)</span>
                </div>
                <p>$35.59</p>
                <NavLink to="/shop">Shop now</NavLink>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="alsocard">
                <img src={img} alt="" />
                <h3>Full - bodied</h3>
                <h5>Bottle</h5>
                <div className="reviews">
                    <img src={stars} alt="" />
                    <span>(32 reviews)</span>
                </div>
                <p>$35.59</p>
                <NavLink to="/shop">Shop now</NavLink>
            </div>
        </SwiperSlide>


      </Swiper>
    </section>
  )
}

export default Also
