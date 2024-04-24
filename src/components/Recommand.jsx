import React from 'react'
import img1 from '../img/pdpimg.png'
import "../styles/recommand.css"
function Recommand() {
  return (
    <div className='recommand'>
        <div className="bagcontainer">
            <h5>You might also like</h5>
            <div className="recommand__wrapper">
                <img src={img1} alt="" />
                <div className="recommand__info">
                    <div className="recommand__info__top">
                        <h4>Full-bodied</h4>
                        <p>$35.59</p>
                    </div>
                    <span>1 bottle</span>
                    <input type="text" name="" id="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Recommand
