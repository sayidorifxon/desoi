import React from 'react'
import "../styles/beveragescard2.css"
import fruit1 from '../img/shop4.png'
import fruit2 from '../img/shop5.png'
import fruit3 from '../img/shop6.png'
import img from '../img/coctail2.png'
import stars from '../img/stars.png'
import { NavLink } from 'react-router-dom'

function BeveragesCard2({bgimage,bg_title, title, reverse}) {
  return (
    <div className='beveragescard2'>
      <div className="left">
        <h2>{title}</h2>
        <h5>-  Delicate and lean to sip -</h5>
        <div className="middle__left">
            <p><span>Adaptogenic ingredients:</span>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <div className="imgs__left">
                <img src={fruit1} alt="" />
                <img src={fruit2} alt="" />
                <img src={fruit3} alt="" />
            </div>
        </div>
        <div className="bottom__left">
            <p><span>Adaptogenic ingredients:</span>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
      </div>
      <div className={reverse ? "reversed" : "right"}>
        <div className="bg" style={{backgroundImage:`url(${bgimage})`}}>
            <h2>{bg_title}</h2>
        </div>
        <div className="onlycard">
          <NavLink to="/pdp"><img className='coctail2' src={img} alt="" /></NavLink>
            <h5>bottle</h5>
            <div className="reviews">
                <img src={stars} alt="" />
                <h6>(reviws)</h6>
            </div>
            <p>$35.59</p>
            <a href="/shop">Shop now</a>
        </div>
      </div>
    </div>
  )
}

export default BeveragesCard2
