import React, { useRef } from 'react'
import "../styles/header.css"
import left from '../img/left.png'
import right from '../img/right.svg'
import logo from '../img/logo.png'
import usa from '../img/usa.svg'
import bag from '../img/bag.svg'
import { NavLink } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

function Header() {
  let modal = useRef()
  function openModal(){
    modal.current.classList.add("show__modal")
  }
  function closeModal(){
    modal.current.classList.remove("show__modal")
  }
  return (
    <div>
      <header>
        <div ref={modal} className="modal">
          <ul>
            <NavLink className="navlink" to="/shop">Shop</NavLink>
            <li>About</li>
            <li>Fun stuff</li>
            <li>Find us</li>
            <li>USA</li>
            <li>Contact</li>
            <li>log in</li>
            <NavLink to="/bag">bag</NavLink>
          </ul>
          <IoClose onClick={closeModal} className='close'/>
        </div>
        <div className="container">
            <div className="header__wrapper">
                <div className="header__top">
                    <img src={left} alt="" />
                <p>Free domestic shipping on orders over $50 <a href="#!">Learn  more</a></p>
                <img src={right} alt="" />
                </div>
                <div className="header__bottom">
                    <nav>
                        <ul>
                            <NavLink className="navlink" to="/shop">Shop</NavLink>
                            <li>About</li>
                            <li>Fun stuff</li>
                            <li>Find us</li>
                        </ul>
                        <NavLink to="/"><img className='logo' src={logo} alt="" /></NavLink>
                        <ul>
                            <li><img src={usa} alt="" />USA</li>
                            <li>Contact</li>
                            <li>log in</li>
                            <NavLink to="/bag"><img className='bagimg' src={bag} alt="" /></NavLink>
                        </ul>
                    </nav>
                    <div className="mobile__nav">
                    <div onClick={openModal} className='burger' ><FaBars  /></div>
                      <img src={logo} alt="" />
                      <img src={bag} alt="" />
                    </div>

                </div>
            </div>
        </div>
      </header>
    </div>
  )
}

export default Header
