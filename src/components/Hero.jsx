import React from 'react'
import "../styles/hero.css"
import heroimg from '../img/heroimg2.svg'

function Hero() {
  return (
    <section className='hero'>
      <div className="container">
        <div className="hero__wrapper">
          <div className="hero__left">

          </div>
          <div className="hero__right">
            <img className='heroimg' src={heroimg} alt="" />
            <p>New arrival</p>
            <h1> Lorem ipsum dolor sit amet </h1>
            <a href="#!">Shop new</a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
