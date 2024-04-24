import React, { useState } from 'react'
import "../styles/bagmenu.css"
import coctail from '../img/coctail.png'
function BagMenu() {
const [number, setNumber] = useState(0)

  return (
    <section className='bagmenu'>
      <div className="bagcontainer">
        <div className="bagmenu__top">
            <h4>Product</h4>
            <h4>price</h4>
            <h4>QTY</h4>
            <h4>total</h4>
        </div>
        <div className="bagmenu__card">
          <img src={coctail} alt="" />
          <div className="info">
            <h4>Medium-bodied</h4>
            <p>{number} bottle</p>
            <p>Delivery every 1 month</p>
            <button>Remove</button>
          </div>
          <div className="info__window">

          <p className='price'>$28.00</p>
          <div  className="quantity">
            <button onClick={()=>setNumber(prev=> prev-1)}>-</button>
            <span>{number}</span>
            <button onClick={()=>setNumber(prev=> prev+1)}>+</button>
          </div>
          <p>$28.00</p>
          </div>
        </div>
        <div className="bagmenu__card">
          <img src={coctail} alt="" />
          <div className="info">
            <h4>Medium-bodied</h4>
            <p>{number} bottle</p>
            <p>Delivery every 1 month</p>
            <button>Remove</button>
          </div>
          <div className="info__window">

          <p className='price'>$28.00</p>
          <div className="quantity">
            <button onClick={()=>setNumber(prev=> prev-1)}>-</button>
            <span>{number}</span>
            <button onClick={()=>setNumber(prev=> prev+1)}>+</button>
          </div>
          <p>$28.00</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BagMenu
