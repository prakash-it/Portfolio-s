import React, { useState } from 'react';
import { Link } from 'react-scroll';

import { RiCloseFill } from 'react-icons/ri';
import { CgMenuMotion } from 'react-icons/cg';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>

       {isMenuOpen && <MobileNavbar isOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}

      <div className='w-screen fixed top-0 z-10'>
        <div className='hidden md:flex items-center justify-center py-4'>
          <nav className='max-w-screen-xl bg-navbg rounded-xl shadow-lg shadow-sky-600/10 mx-auto py-3 px-6'>
            <ul className='flex items-center gap-14'>
              <li>
                <Link to='hero' smooth spy offset={-80} className='menu-item'> Home </Link>
              </li>
              <li>
                <Link to='skills' smooth spy offset={-80} className='menu-item'> Skills </Link>
              </li>
              <li>
                <Link to='experience' smooth spy offset={-80} className='menu-item'> Experience </Link>
              </li>
              <li>
                <Link to='about' smooth spy offset={-80} className='menu-item'> About </Link>
              </li>
              <li>
                <Link to='contact' smooth spy offset={-80} className='menu-item'> Contact </Link>
              </li>
            </ul>
          </nav>
        </div>


      </div>

      <div className='p-3 fixed top-0 right-0 z-50 '>
        <button onClick={toggle} className='w-11 h-11 text-2xl text-sky-300 bg-blue-800/40 boder border-sky-900/80 backdrop-blur-lg flex items-center justify-center rounded md:hidden z-50 ml-auto'>
          {isMenuOpen ? <RiCloseFill /> : <CgMenuMotion />}
        </button>
      </div>

      {/* {isMenuOpen && (
        <div className='md:hidden fixed top-0 left-0 w-full h-screen bg-navbg flex flex-col items-center justify-center z-40'>
          <ul className='flex flex-col items-center gap-14'>
            <li>
              <Link to='hero' smooth spy offset={-80} className='menu-item' onClick={toggle}> Home </Link>
            </li>
            <li>
              <Link to='skills' smooth spy offset={-80} className='menu-item' onClick={toggle}> Skills </Link>
            </li>
            <li>
              <Link to='edu-experience' smooth spy offset={-80} className='menu-item' onClick={toggle}> Experience </Link>
            </li>
            <li>
              <Link to='about' smooth spy offset={-80} className='menu-item' onClick={toggle}> About </Link>
            </li>
            <li>
              <Link to='contact' smooth spy offset={-80} className='menu-item' onClick={toggle}> Contact </Link>
            </li>
          </ul>
        </div>
      )} */}
    </>
  );
}
