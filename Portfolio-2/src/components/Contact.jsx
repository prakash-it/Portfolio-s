import React, { useRef } from 'react'
import { PROFIL_data } from '../utils/data'
import { IoMdMail } from 'react-icons/io'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdOutlineWeb } from 'react-icons/md'
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8ybrezq', 'template_dpq1eby', form.current, {
        publicKey: 'vf_8MU56nAmUqf7y4',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <section className='max-w-screen-xl px-6 mx-auto pb-20' id='contact'>
     <h5 className='text-primary md:text-4xl text-2xl font-semibold text-center  pb-8 md:pb-14'>
      Contact
    </h5>

    <div className='grid grid-cols-1 md:grid-cols-2 md:gap-16'>

      <div>
      <a href="mailto:prakashkandasamy4@gmail.com?subject=Subject%20Here&body=Message%20Here" target='_blank'>
        <ContactInfo icon={<IoMdMail/>} text={PROFIL_data.email}/>
      </a>
      <a href="tel:+919865579294" target='_blank'>
        <ContactInfo icon={<IoPhonePortraitOutline/>} text={PROFIL_data.Phone}/>
      </a>
      <a href='https://prakash-joyboy.netlify.app/' target='_blank'>
        <ContactInfo icon={<MdOutlineWeb/>} text={PROFIL_data.website}/>
      </a>
      </div>

      <div>
        <h5 className='md:hidden  text-cyan-300 text-lg font-medium mt-4 pb-5'> Contact Form </h5>
        <form className='flex flex-col' ref={form} onSubmit={sendEmail}>
          <input type='text' placeholder='Full Name' id='' className='input-box' autoComplete='off' name='from_name'/>
          <input type='email' placeholder='Email' id='' className='input-box' autoComplete='off' name="from_email"/>
          <textarea name="message" placeholder='Message' rows='3' className='input-box' id=""></textarea>

          <button className='primary-btn' type="submit" value="Send">SUBMIT</button>
        </form>
        </div>
    </div>
    </section>
  )
}


const ContactInfo = ({icon, text})=>{
  return (

    <div className='flex items-center gap-5 bg-gradient-to-br from-blue-950  to-slate-900 rounded border cursor-pointer border-blue-800/40 px-4 py-3 mb-5  transition duration-300  hover:shadow-lg hover:shadow-blue-500/100'>
       <div className='w-10 h-10 text-xl text-cyan-300 flex items-center justify-center bg-sky-950 rounded border border-cyan-700 '>
        {icon}
       </div>
       <p className='text-cyan-100 text-xs md:text-sm'>{text}</p>
    </div>
  )
}