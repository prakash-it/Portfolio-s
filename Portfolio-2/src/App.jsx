import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import WorkExperience from './components/WorkExperience'
import About from './components/About'
import Contact from './components/Contact'


export default function App() {
  return (
    <div className='bg-background'>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <WorkExperience/>
      <Contact/> 
    </div>
  )
}
