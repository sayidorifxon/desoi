import React from 'react'
import "../styles/footer.css"
import instagram from '../img/intagram.svg'
import facebook from '../img/facebook.svg'
import pinterest from '../img/pinterest.svg'
import twitter from '../img/twitter.svg'
import youtube from '../img/youtube.svg'

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="wrapper">
            <div className="footer__top">
                <div className="footer__left">
                    <h2>Newsletter</h2>
                    <p>Sign up to save 10% on your next order</p>
                    <input type="text" placeholder='Email Address' />
                    <div className="links">
                        <img src={instagram} alt="" />
                        <img src={facebook} alt="" />
                        <img src={pinterest} alt="" />
                        <img src={twitter} alt="" />
                        <img src={youtube} alt="" />
                    </div>
                </div>
                <div className="footer__right">
                    <ul>
                        <li>explore</li>
                        <li>Account</li>
                        <li>Gift Card</li>
                        <li>Refer a Friend</li>
                        <li>Affiliates</li>
                        <li>Corporate</li>
                    </ul>
                    <ul>
                        <li>get help</li>
                        <li>Shop</li>
                        <li>FAQ</li>
                        <li>Shipping & Returns</li>
                        <li>Store Locator</li>
                    </ul>
                    <ul>
                        <li>Company</li>
                        <li>About</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Press</li>
                    </ul>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="footer__bottom__1">
                <h5>/de · swa/</h5>
                <h5>®2021 Сocktail</h5>
                </div>
                
                <ul>
                    <li>Privacy policy</li>
                    <li>Terms of use</li>
                    <li>AMASS</li>
                </ul>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
