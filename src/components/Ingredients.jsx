import React from 'react'
import "../styles/ingredients.css"
import fruits1 from '../img/fruits1.png'
import fruits2 from '../img/fruits2.png'
import fruits3 from '../img/fruits3.png'
import fruits4 from '../img/fruits4.png'
import fruits5 from '../img/fruits5.png'
import fruits6 from '../img/fruits6.png'
function Ingredients() {
  return (
    <section className='ingredients'>
      <div className="container">
        <div className="ingredients__wrapper">
            <h2>Ingredients</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <a href="/pdp">Ingredient glossAry</a>
            <div className="fruits">
                <img src={fruits1} alt="" />
                <img src={fruits2} alt="" />
                <img src={fruits3} alt="" />
                <img src={fruits4} alt="" />
                <img src={fruits5} alt="" />
                <img src={fruits6} alt="" />
            </div>
        </div>
      </div>
    </section>
  )
}

export default Ingredients
