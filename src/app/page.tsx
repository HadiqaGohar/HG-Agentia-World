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
      <Hero />
      <div id="technology"><TechnologySection /></div>
      <div id="features"><Features /></div>
      <div id="agents"><AIAgents /></div>
      <div id="pricing"><Pricing /></div>
      <div id="contact"><ContactSection /></div>
      {/* <Footer /> */}
    </div>
  )
}

export default Home
