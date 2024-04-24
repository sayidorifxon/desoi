import React from 'react'
import "../styles/collins.css"

import img1 from '../img/collins1.png'
import img2 from '../img/collins2.png'
import img3 from '../img/collins3.png'

function Collins() {
  return (
    <section className='collins'>
      <div className="container">
        <p>De soi unique recipes</p>
        <div className="collins__wrapper">
            <div className="collins__info">
                <img className='collins__pos' src={img2} alt="" />
            <img className='barmen' src={img1} alt="" />
               <div className="info_right">
               <h2>Tom Collins Jr.</h2>
                <h5>Ingredients</h5>
                <ul>
                    <li>3 oz Riverine</li>
                    <li>3/4 oz Lemon Juice</li>
                    <li>3/4 oz Simple Syrup</li>
                    <li>Club Soda</li>
                </ul>
                <a href="#!">View Full recipe</a>
               </div>
            </div>
            <img className='glass' src={img3} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Collins
