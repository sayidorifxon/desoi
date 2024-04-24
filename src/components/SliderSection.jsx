import React from 'react'
import "../styles/slider.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import coctail from '../img/coctail.png'
import { NavLink } from 'react-router-dom';

function SliderSection() {
  return (
    <section className='slidersection'>
      <h2>our best sellers</h2>
      <Swiper  breakpoints={{
          
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          
        }} slidesPerView={2} spaceBetween={0} loop={true} navigation={true}  modules={[Navigation]} className="mySwiper">
        <SwiperSlide  className='swipercard'><NavLink to="/pdp"><img src={coctail} alt="" /></NavLink> <h3>Ipsum dolor </h3><p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p> <a href="/shop">Shop now</a></SwiperSlide>
        <SwiperSlide  className='swipercard'><NavLink to="/pdp"><img src={coctail} alt="" /></NavLink> <h3>Ipsum dolor </h3><p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p> <a href="/shop">Shop now</a></SwiperSlide>
        <SwiperSlide  className='swipercard'><NavLink to="/pdp"><img src={coctail} alt="" /></NavLink> <h3>Ipsum dolor </h3><p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p> <a href="/shop">Shop now</a></SwiperSlide>
        <SwiperSlide  className='swipercard'><NavLink to="/pdp"><img src={coctail} alt="" /></NavLink> <h3>Ipsum dolor </h3><p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p> <a href="/shop">Shop now</a></SwiperSlide>
        <SwiperSlide  className='swipercard'><NavLink to="/pdp"><img src={coctail} alt="" /></NavLink> <h3>Ipsum dolor </h3><p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p> <a href="/shop">Shop now</a></SwiperSlide>
        <SwiperSlide  className='swipercard'><NavLink to="/pdp"><img src={coctail} alt="" /></NavLink> <h3>Ipsum dolor </h3><p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p> <a href="/shop">Shop now</a></SwiperSlide>
        <SwiperSlide  className='swipercard'><NavLink to="/pdp"><img src={coctail} alt="" /></NavLink> <h3>Ipsum dolor </h3><p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p> <a href="/shop">Shop now</a></SwiperSlide>
        <SwiperSlide  className='swipercard'><NavLink to="/pdp"><img src={coctail} alt="" /></NavLink> <h3>Ipsum dolor </h3><p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p> <a href="/shop">Shop now</a></SwiperSlide>
      </Swiper>
    </section>
  )
}

export default SliderSection
