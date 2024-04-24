import React from 'react'
import "../styles/enjoy.css"
import img from '../img/enjoy.png'
function Enjoy() {
  return (
    <section className='enjoy'>
      <div className="container">
        <div className="enjoy__wrapper">
          <div className="enjoy__left">
            <h2>How to enjoy</h2>
            <h5>On the Rocks</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Enjoy

