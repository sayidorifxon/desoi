import React from 'react'
import img from '../img/righticon.png'
import Beverages from '../components/Beverages'

function Shop() {
  return (
    <main>
      <div className="shop__hero">
        <div className="shop__hero__top">
          <h4>Home</h4>
          <img src={img} alt="" />
          <h3>Beverages</h3>
        </div>
        <h2>Shop beverages</h2>
      </div>
      <Beverages />
      
    </main>
  )
}

export default Shop
