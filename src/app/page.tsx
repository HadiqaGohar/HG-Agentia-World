import React from 'react'
import Hero from './components/Hero'
import TechnologySection from './components/Technology'
import Features from './components/Features'
import AIAgents from './components/AiAgents'
import Pricing from './components/Pricing'
import ContactSection from './components/Contact'
import Footer from './components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <TechnologySection/>
      <Features/>
      <AIAgents/>
      <Pricing/>
      <ContactSection/>
      <Footer/>
    </div>
  )
}

export default Home