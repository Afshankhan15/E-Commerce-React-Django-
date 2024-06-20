import React from 'react'
import Navbar from '../Components/Navbar'
// import Hero from '../Components/Hero'
import Hero2 from '../Components/Hero2'
import Cards from '../Components/Cards'
import Hero3 from '../Components/Hero3'
import Features from '../Components/Features'
import Team from '../Components/Team'
import Feedback from '../Components/Feedback'
import Footer from '../Components/Footer'
import Navbar2 from '../Components/Navbar2'
const Rough = () => {
  return (
    <div className='w-full max-w-full'>
     <Navbar buttonText='Login' buttonNavigation='/sign' />

        {/* <Navbar2 /> */}
        {/* <Hero2 /> */}
        <Hero3 />
        <Cards />
        <Features />
        <Team />
        <Feedback />
        <Footer />
    </div>
  )
}

export default Rough