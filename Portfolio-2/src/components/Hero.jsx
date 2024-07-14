import React from 'react'
import { PROFIL_data } from '../utils/data'
import profil_img from '../assets/Prakash.K.png'

import {HiOutlineLocationMarker} from "react-icons/hi"
import {FiMail} from "react-icons/fi"
import {MdOutlineBadge} from 'react-icons/md'
import { FaGithub, FaLinkedin} from 'react-icons/fa'

export default function Hero() {
  const{
    name, tagline, jobtitle,location, email,skills
  }= PROFIL_data
  return (
      <section className='max-w-screen-xl flex flex-col gap-14 md:flex-row md:items-center pt-16 md:pt-28 pb-20 px-6 mx-auto' id='hero'>

          <div className='flex-1 text-center md:text-left z-[1]'>
            <span className='text-xs md:text-sm text-blue-200 font-thin'>A MERN STACK DEVELOPER</span>

            <h2 className='text-3xl mt-3 md:text-5xl md:mt-5 '>{name}👋</h2>
            <p className='w-full text-xs font-light text-neutral-50 leading-5  my-6 lg:w-[38vw] md:text-sm md:leading-6 md:my-8'>{tagline}</p>

            <button className='primary-btn'>Contact Me</button>
          </div>
          <div className=''>
            <div className='w-[403px] bg-gradient-to-br from-blue-950 to-slate-900 rounded  border-blue-950 p-6 '>
             <div className='flex items-center justify-center'>
              <img className='pic1' src={profil_img} alt="Image of prakash" />
             </div>
             <div className='bg-cardbg rounded-md text-center mt-3 p-4'>
              <h5 className='text-sm md:text-base text-white'>{name}</h5>
              <p className='text-slate-500 text-xs md:font-medium mt-1'>{jobtitle}</p>

                <div className='flex items-center justify-center gap-2 text-slate-500 text-xs mt-1'>
                  <HiOutlineLocationMarker/>
                  <p className='font-medium'>{location}</p>
                </div>
             </div>

             <InfoTile/>
            </div>
          </div>
      </section>
  )
}
