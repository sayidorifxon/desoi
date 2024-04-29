import React, { useRef } from 'react'
import "../styles/pdphero.css"
import stars from '../img/stars.png'
import img from '../img/pdpimg.png'
import arrow from '../img/pdparrow.png'
import facebook from '../img/facebookmini.svg'
import pinterest from '../img/pinterestmini.svg'
import mail from '../img/mail.svg'
import Strawberry from '../img/ingredient1.svg'
import birch from '../img/ingredient2.png'
import pea from '../img/ingredient3.png'
import { NavLink } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination, Navigation } from 'swiper/modules';

function PdpHero() {
    let knopka = useRef()
    let knopka2 = useRef()
    function changebg(){
        knopka.current.classList.toggle("black")
    }
    function changebg2(){
        knopka2.current.classList.toggle("black")
    }
    let faq__acc = useRef()
    function openAccor(e){
        if(e.target.id === "open"){
            e.target.nextElementSibling.classList.toggle("show__acc")
        }
    }
  return (
    <section className='pdphero'>
      <div className="pdpcontainer">
        <div className="pdp__wrapper">
            <div className="pdp__left">
                <div className="left__first">
                    <h5>Non-Alcoholic drink</h5>
                    <h2>Medium - bodied</h2>
                    <p>Light and easy to sip</p>
                    <div className="review">
                        <img src={stars} alt="" />
                        <span>(reviews)</span>
                    </div>
                </div>
                <div className="left__second">
                    <p>Made with natural birch, Strawberry and Apricot, an earthy and fruity taste. </p>
                    <ul>
                        <li className='li'>100% Natural ingredients</li>
                        <li className='li'>Low Calories </li>
                        <li className='li'>Perfect for every occassion</li>
                    </ul>
                </div>
                <div className="pdp__links">
                    <span>Share on</span>
                    <img src={facebook} alt="" />
                    <img src={pinterest} alt="" />
                    <img src={mail} alt="" />
                </div>
                <NavLink className="shopthecan" to="/shop">Shop the can <img src={arrow} alt="" /></NavLink>
            </div>
            <div className="pdp__middle">
            <Swiper pagination={true} loop={true} navigation={true} modules={[Pagination,Navigation]} className="pdp__swiper">
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
        <SwiperSlide><img src={img} alt="" /></SwiperSlide>
      </Swiper>
            </div>
            <div className="pdp__right">
                <h2>$35.59</h2>
                <div className="adaptogenic">
                    <h5>adaptogenic Ingredients</h5>
                    <div className="ingredient">
                        <img src={Strawberry} alt="" />
                        <p>strawberry</p>
                        <img src={birch} alt="" />
                        <p>birch</p>
                        <img src={pea} alt="" />
                        <p>pea</p>

                    </div>
                </div>
                <div className="quantity2">
                    <h5>Quantity</h5>
                    <p>Complimentary domestic shipping on 2+ bottles.</p>

                </div>
                    <div className="numbers">
                        <h3>1</h3>
                        <h3>2</h3>
                        <h3>3</h3>
                        <h3>6</h3>
                        <h3>12</h3>
                    </div>
                <div className="purchases">
                    <h2> <div ref={knopka} onClick={changebg} className="knopka"></div> $35.59   One time purcahse     </h2>
                    <h2> <div ref={knopka2} onClick={changebg2} className="knopka"></div> $30.00   Subscription (15% off)</h2>
                </div>
                <div className="shipping">
                    <p>Free domestic shipping over $50</p>
                    <button>Add to bag</button>
                </div>
                <div className="pdp__accordion">
                <div onClick={openAccor} ref={faq__acc} className="pdp__accord">
                <button id='open'  className="pdp__accordion">Details</button>
                    <div  className="pdp__panel">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                <button id='open'  className="pdp__accordion">Full Ingredients</button>
                    <div  className="pdp__panel">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                <button id='open'  className="pdp__accordion">Product features</button>
                    <div  className="pdp__panel">
                        <p>Lorem ipsum dolor sit amet.</p>
                    </div>
              
                
            </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default PdpHero
