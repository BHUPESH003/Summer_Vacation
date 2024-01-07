import React from 'react'
import Slider from '../components/Home/Slider'
import HomeProducts from '../components/Home/HomeProducts'
import HomeHero from '../components/Home/HomeHero'
import TestimonialsSection from '../components/Home/Testimonial'
import HomeCommunity from '../components/Home/HomeCommunity'


const Home = () => {
  return (
    <>
      <Slider/>
      <HomeHero/>
      <HomeProducts/>
      <HomeCommunity/>
      <TestimonialsSection/>
    </>
  )
}

export default Home