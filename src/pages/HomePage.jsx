import React from 'react'
import Hero from '../components/Hero'
import SliderSection from '../components/SliderSection'
import Deswa from '../components/Deswa'
import SliderSection2 from '../components/SliderSection2'
import RichAndFruity from '../components/RichAndFruity'
import Ingredients from '../components/Ingredients'
import Earn from '../components/Earn'
import Refer from '../components/Refer'
import JoinUs from '../components/JoinUs'

function HomePage() {
  return (
    <main>
      <Hero/>
      <SliderSection/>
      <Deswa/>
      <SliderSection2/>
      <RichAndFruity/>
      <Ingredients/>
      <Earn/>
      <Refer/>
      <JoinUs/>
    </main>
  )
}

export default HomePage
