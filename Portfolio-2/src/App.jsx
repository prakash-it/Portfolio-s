import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import About from './components/About'
import Contact from './components/Contact'

import BG_grandient from './assets/wave.png'

export default function App() {
  return (
    <div className='bg-background'>
      <div 
      style={{backgroundImage: `url(${BG_grandient})`,
      backgroundPosition:`70% 60%`}}>
      <Navbar/>
      <Hero/>
      </div>
      <About/>
      <Skills/>
      <WorkExperience/>
      <Contact/> 
    </div>
  )
}
