import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skillss from './components/Skills';
import WorkExperience from './components/WorkExperience';
import About from './components/About';
import Contact from './components/Contact';

import BG_gradient from './assets/wave.png';

export default function App() {
  return (
    <div className='bg-background'>
     <div 
        style={{
          backgroundImage: `url(${BG_gradient})`,
          backgroundPosition: '-90% -80%',
        }}
      >
          <Navbar />
          <Hero />
      </div>
     
      <Skillss />
      <WorkExperience />
      <About />
      <Contact />
    </div>
  );
}
