import React from 'react'
import { EDUexperience } from '../utils/data'
export default function WorkExperience() {
  return (
    <section className='max-w-screen-xl mx-auto pb-0 md:pb-20 px-6 md:px-20 relative ' id='experience'>
      <h5 className='text-primary text-2xl md:text-3xl font-semibold text-center pb-14 md:pb-4 '>Experience</h5>
      {EDUexperience.map((item, index)=>(
        <ExperienceCard key={item.Degree}
        index={index}
          Degree={item.Degree}
          specfication={item.specfication}
          duration={item.duration} 
          decription={item.decription}
          isLast={EDUexperience.length === index +1}
          />
      ))}
    </section>
  )
}

const ExperienceCard =({
  Degree,
  specfication,
  duration,
  decription,
  index,
  isLast
})=>{
  return(
    <div className='relative'>

      <div className={`hidden md:block h-[140px] border-b 
           ${index > 0 ? 'min-w-96 border-l' : 'ml-auto w-40'}
           ${isLast ? 'w-40 mr-auto' : 'border-blue-500 border-dashed'}`} />

      
      {!isLast&& (<div className='hidden md:block min-w-96 h-[140px] border-r border-b border-blue-500 border-dashed'/>) }


      <div className='bg-gradient-to-br from-blue-950 to-slate-900 rounded-lg border border-blue-800/40 p-4 mx-0 md:mx-10 md:absolute top-[70px] mb-6 d:mb-0'>
      <div className='flex items-center justify-between flex-1'>
        <div>
          <p className='text-white text--[13.5px] md:text-base font-medium leading-4 md:leading-5'>{Degree}</p>
          <span className='text-blue-400 text-xs'>{specfication}</span>
        </div>
        <div className='text-sky-200 text-[11px] md:text-xs font-medium bg-blue-950 rounded border border-blue-700/50 border-dashed justify-center items-center px-4 py-2'>{duration}</div>
      </div>
      <p className='text-blue-50 text-xs font-thin leading-5 mt-5'>{decription}</p>
      </div>
    </div>
  )
}