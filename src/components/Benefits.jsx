import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/benefits.css"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import strawberry from '../img/strawberry.png'
import birch from '../img/birch-tree.png'
import apricot from '../img/apricot.png'

function Benefits() {
  return (
    <section className='benefits'>
      <div className="container">
        <div className="benefits__wrapper">
            <h2>Benefits and Ingredients</h2>
            <p><span>Benefits:</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <Swiper breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }} slidesPerView={1} spaceBetween={80} pagination={true} loop={true} modules={[Pagination]} className="benefitswiper">
                <SwiperSlide className='benefitscard'>
                    <img src={strawberry} alt="" />
                    <h3>Strawberry</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </SwiperSlide>
                <SwiperSlide className='benefitscard'>
                    <img src={birch} alt="" />
                    <h3>birch</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </SwiperSlide>
                <SwiperSlide className='benefitscard'>
                    <img src={apricot} alt="" />
                    <h3>apricot</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </SwiperSlide>
            </Swiper>
            <a href="#!">Ingredient Glossary</a>
        </div>
      </div>
    </section>
  )
}

export default Benefits
