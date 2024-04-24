import React from 'react'
import "../styles/mybag.css"
import BagMenu from '../components/BagMenu'
import SendGift from '../components/SendGift'
import Recommand from '../components/Recommand'

function MyBag() {
  return (
    <main  >
      <h1 className='bagtext'>My Bag</h1>
      <BagMenu/>
      <SendGift/>
      <Recommand/>
    </main>
  )
}

export default MyBag
