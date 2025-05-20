import React from 'react'
import Hero from './Hero'
import FeaturedGroup from './FeaturedGroup'
import HowItWorks from './HowItWorks'
import Reviews from './Reviews'
import Footer from '../common/Footer'

function Home() {
  return (
    <section>
        <Hero/>
        <FeaturedGroup/>
        <HowItWorks/>
        <Reviews/>
        <Footer/>
    </section>
  )
}

export default Home