import React from 'react'
import "../styles/variety.css"
import img from '../img/variety.png'
function Variety() {
  return (
    <section className='variety'>
      <div className="container">
        <div className="variety__wrapper">
        <div className="variety__left">
                <h5>Try this</h5>
                <h2>Variety Pack</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="/shop">Shop now</a>
            </div>
            <div className="variety__right">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Variety
