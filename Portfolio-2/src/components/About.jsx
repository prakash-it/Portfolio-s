import React from 'react'
import pic from '../assets/Prakash.K.jpg'
import { ABOUT } from '../utils/data'

export default function About() {
  return (
    <section className='max-w-screen-xl px-6 mx-auto py-10 md:py-24' id='about'>
      <h5 className='text-primary text-2xl md:text-4xl font-semibold text-center md:text-left pb-10 md:pb-14'>About Me</h5>

      <div className='grid grid-cols-1 md:grid-cols-3 md:gap-4'>
        <img src={pic} alt="photo" className='w-full h-80 object-cover rounded-lg mb-4 md:mb-0' />

        <div className='col-span-2 bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-6 transition duration-300  hover:shadow-lg hover:shadow-blue-500/100'>
          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>
            {ABOUT.introduction} {ABOUT.background}{""} {ABOUT.Career_Goals}
          </p>
          <br />
          <p className='text-blue-50 text-xs md:text-[13px] font-normal text-justify leading-6'>
            {ABOUT.Skils}
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
        <InfoCard count={ABOUT.stats.certifications} label="Certifications" />
        <InfoCard count={ABOUT.stats.project} label="Projects Completed Successfully" />
      </div>
    </section>
  )
}

const InfoCard = ({ label, count }) => {
  return (
    <div className='bg-gradient-to-br from-blue-950  to-slate-900 rounded border border-blue-800/40 px-4 md:px-6 py-3 transition duration-300  hover:shadow-lg hover:shadow-blue-500/100'>
      <div className="text-primary text-xl md:text-2xl font-semibold">{count}</div>
      <span className='text-blue-300 text-xs md:text-sm font-normal'>{label}</span>
    </div>
  )
}
