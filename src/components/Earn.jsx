import React from 'react'
import img from '../img/earn.png'
import "../styles/earn.css"
function Earn() {
  return (
    <section className='earn'>
      <div className="container">
        <div className="earn__wrapper">
            <div className="earn__left">
                <h5>Learn</h5>
                <h2>Ut enim</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <a href="/shop">Shop now</a>
            </div>
            <div className="earn__right">
                <img src={img} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Earn
