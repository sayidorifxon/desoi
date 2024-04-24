import React from 'react'
import BeveragesCard from './BeveragesCard'
import BeveragesCard2 from './BeveragesCard2'
import shop1 from '../img/shop1.png'
import shop2 from '../img/shop2.png'
import shop3 from '../img/shop3.png'

function Beverages() {
  return (
    <div>
      <BeveragesCard/>
      <BeveragesCard2 title="Light - bodied" bg_title="Happy hour 24/7" bgimage={shop1} reverse={false}/>
      <BeveragesCard2 title="Medium - bodied" bg_title="New lifestyle" bgimage={shop2} reverse={true}/>
      <BeveragesCard2 title="Full - bodied" bg_title="Rich in flavor" bgimage={shop3} reverse={false}/>

    </div>
  )
}

export default Beverages
