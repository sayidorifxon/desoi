import React from 'react'
import img from '../img/coctail2.png'
import stars from '../img/stars.png'
import emptystars from '../img/emptystars.png'
import "../styles/beveragescard.css"
import { NavLink } from 'react-router-dom'
function BeveragesCard() {
  return (
    <div className='beveragescard'>
        <div className="hidden">
        <NavLink to="/pdp"><img className='coctail2' src={img} alt="" /></NavLink>
            <h5>Variety Pack</h5>
            <div className="reviews">
                <img src={stars} alt="" />
                <div className="prices">
                    <p>$91.99 <span>$101.00 </span></p>
                    
                </div>
            </div>
            <p>A three-bottle kit with De Soi’s Light, Medium and Full bodied flavors.</p>
            <a href="/shop">Shop now</a>
        </div>
        <div className="card__left">
            <h2>Variety Pack</h2>
            <h5>-  Delicate and lean to sip -</h5>
            <div className="left__middle">
                <p><span>Adaptogenic ingredients:</span>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="left__bottom">
                <p><span>Adaptogenic ingredients:</span>  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
        </div>
        <div className="card__middle">
            <NavLink to="/pdp"><img className='coctail2' src={img} alt="" /></NavLink>
            <h5>bottle</h5>
            <div className="reviews">
                <img src={stars} alt="" />
                <h6>(reviws)</h6>
            </div>
            <p>$35.59</p>
            <a href="/shop">Shop now</a>
        </div>
        <div className="card__right">
            <NavLink to="/pdp"><img className='coctail2' src={img} alt="" /></NavLink>
            <h5>can</h5>
            <div className="reviews">
                <img src={emptystars} alt="" />
                
            </div>
            <p>$15.59</p>
            <a href="/shop">Shop now</a>
        </div>
    </div>
  )
}

export default BeveragesCard
