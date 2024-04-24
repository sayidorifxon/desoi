import React from 'react'
import "../styles/richfruity.css"
import img from '../img/fruity.png'

function RichAndFruity() {
  return (
    <section className='richfruity'>
      <div className="container">
        <div className="richfruity__wrapper">
            <div className="richfruity__left">
                <h5>New in</h5>
                <h2>Rich and fruity</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="/shop">Shop now</a>
            </div>
            <div className="richfruity__right">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default RichAndFruity

