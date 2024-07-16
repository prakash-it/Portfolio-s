import React from 'react'

export default function MobileNavbar({isopen, setIsMenuOpen }) {

     const handleScroll =(sectionId) =>{
        if(isopen) setIsMenuOpen(false)
        {
            document.getElementById(sectionId).scrollIntoView({behavior:"smooth"})
        }
     }
  return (
    <div className='w-screen fixed top-0 z-20'>
        <div className='w-1/2 h-screen flex flex-col p-8 bg-background'>
          <div className='ui-circle -ml-20 -mt-10'/>

          <ul>
            <li className='mb-5'>
                <a className='menu-item' onClick={()=>{handleScroll("hero")}}>Home</a>
            </li>
            <li  className='mb-5'>
                <a className='menu-item' onClick={()=>{handleScroll("skills")}}>Skills</a>
            </li>
            <li  className='mb-5'>
                <a className='menu-item' onClick={()=>{handleScroll("experience")}}>Experience</a>
            </li>
            <li  className='mb-5'>
                <a className='menu-item' onClick={()=>{handleScroll("about")}}>About</a>
            </li>
            </ul> 

            <button className='  h-10 bg-primary text-white text-xs md:text-sm px-6 rounded hover:bg-blue-200 hover:text-primary md:block' onClick={()=>{handleScroll("contact")}}>Contact</button>
        </div>
    </div>
  )
}
