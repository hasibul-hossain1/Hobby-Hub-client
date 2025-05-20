import React from 'react'
import Hero from './Hero'
import FeaturedGroup from './FeaturedGroup'
import HowItWorks from './HowItWorks'
import Reviews from './Reviews'

function Home() {
  return (
    <section>
        <Hero/>
        <FeaturedGroup/>
        <HowItWorks/>
        <Reviews/>
    </section>
  )
}

export default Home