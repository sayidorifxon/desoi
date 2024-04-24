import React from 'react'
import "../styles/joinus.css"
import img1 from '../img/join1.png'
import img2 from '../img/join2.png'
import img3 from '../img/join3.png'
import img4 from '../img/join4.png'

function JoinUs() {
  return (
    <section className='joinus'>
        <div className="joinus__wrapper">
            <h2>Join us @сocktail</h2>
            <div className="joinus__images">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
            </div>
        </div>
    </section>
  )
}

export default JoinUs
