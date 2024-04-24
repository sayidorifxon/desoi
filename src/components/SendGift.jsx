import React from 'react'
import "../styles/sendgift.css"
import img from '../img/surprize.svg'
import img2 from '../img/prize1.svg'
function SendGift() {
  return (
    <section className='sendgift'>
      <div className="bagcontainer">
        <div className="sendgift__wrapper">
            <div className="gift__left">
                <div className="gift__left__top">
                <p><img src={img} alt="" />Sending a gift?</p>
                <a href="#!">remove</a>
                </div>
                <input className='gift__input' type="text" />
                <button>save message</button>
                <a href="#!">cancel</a>
            </div>
            <div className="gift__right">
                <div className="gift__right__top">
                    <h3>Subtotal</h3>
                    <h3>$99.18</h3>
                </div>
                    <p>Shipping & tax calculated at checkout</p>
                    <div className="progress">
                        <div className="progress__left"></div>
                        <div className="progress__right"></div>
                    </div>
                    <p><span>$5.00</span> away from free shipping</p>
                    <div className="gift__right__middle">
                        <h3><img src={img2} alt="" />Package protection</h3>
                        <p>For damage, lost & theft for <span>$0.99</span></p>
                    </div>
                    <button>checkout</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default SendGift
