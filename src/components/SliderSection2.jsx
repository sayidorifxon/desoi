import React from 'react'
import "../styles/slidersection2.css"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';
import top from '../img/qoshtirnoq_top.svg'
import bottom from '../img/qoshtirnoq_bottom.svg'
import forbes from '../img/forbes.svg'
import saveur from '../img/saveur.svg'
import woodwine from '../img/woodwine.svg'


function SliderSection2() {
  return (
    <section className='slidersection2'>
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
            spaceBetween: 0,
          },
        }}  slidesPerView={1} spaceBetween={0} loop={true} pagination={true} modules={[Pagination]} className="mySwiper2">
        <SwiperSlide className='swipercard2'>
        <img src={top} alt="" />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <img src={bottom} alt="" />
        <img src={forbes} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swipercard2' >
        <img src={top} alt="" />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <img src={bottom} alt="" />
        <img src={saveur} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swipercard2'>
        <img src={top} alt="" />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <img src={bottom} alt="" />
        <img src={woodwine} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swipercard2'>
        <img src={top} alt="" />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <img src={bottom} alt="" />
        <img src={forbes} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swipercard2' >
        <img src={top} alt="" />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <img src={bottom} alt="" />
        <img src={saveur} alt="" />
        </SwiperSlide>
        <SwiperSlide className='swipercard2'>
        <img src={top} alt="" />
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <img src={bottom} alt="" />
        <img src={woodwine} alt="" />
        </SwiperSlide>
        
        
      </Swiper>
    </section>
  )
}

export default SliderSection2

