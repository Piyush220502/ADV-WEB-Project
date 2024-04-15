import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Team from '../components/Team'
import Menu from '../components/Menu'
import WhoAreWe from '../components/WhoAreWe'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Team/>
      <Menu/>
      <WhoAreWe/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home
