import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skillss from './components/Skills';
import WorkExperience from './components/WorkExperience';
import About from './components/About';
import Contact from './components/Contact';

import BG_gradient from './assets/wave.png';
import bg from './assets/blue.png'
import Footer from './components/Footer';
import ActiveCard from './components/ActiveCard';

export default function App() {
  return (
    <div className='bg-background'>
     <div 
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: '-40% -70%',
        }}
      >
          <Navbar />
          <Hero />
      </div>
     
      <Skillss />
      <WorkExperience /> 
      <ActiveCard/>
      <About />
      <Contact />
      <Footer/>
    </div>
  );
}
