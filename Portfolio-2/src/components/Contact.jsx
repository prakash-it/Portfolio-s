import React, { useRef, useState } from 'react'
import { PROFIL_data } from '../utils/data'
import { IoMdMail } from 'react-icons/io'
import { IoPhonePortraitOutline } from 'react-icons/io5'
import { MdOutlineWeb } from 'react-icons/md'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [popup, setPopup] = useState({
  show: false,
  message: '',
  type: 'success', // success | error
});


  const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm('service_8ybrezq', 'template_dpq1eby', form.current, {
      publicKey: 'vf_8MU56nAmUqf7y4',
    })
    .then(
      () => {
        form.current.reset();
        setPopup({
          show: true,
          message: 'Message sent successfully!',
          type: 'success',
        });

        setTimeout(() => {
          setPopup(prev => ({ ...prev, show: false }));
        }, 3000);
      },
      () => {
        setPopup({
          show: true,
          message: 'Failed to send message. Try again!',
          type: 'error',
        });

        setTimeout(() => {
          setPopup(prev => ({ ...prev, show: false }));
        }, 3000);
      }
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
{popup.show && (
  <div
    className={`
      fixed top-6 right-6 z-50 w-[300px]
      rounded-xl border backdrop-blur-xl
      shadow-2xl transition-all duration-500
      animate-toast
      ${
        popup.type === 'success'
          ? 'bg-emerald-500/15 border-emerald-400/40'
          : 'bg-red-500/15 border-red-400/40'
      }
    `}
  >
    <div className="flex items-start gap-3 p-4">
      {/* ICON */}
      <div
        className={`
          w-10 h-10 rounded-full flex items-center justify-center text-lg
          ${
            popup.type === 'success'
              ? ' from-blue-950 to-slate-900 text-white'
              : 'bg-red-500 text-white'
          }
        `}
      >
        {popup.type === 'success' ? '✓' : '✕'}
      </div>

      {/* TEXT */}
      <div className="flex-1">
        <h6 className="text-white font-semibold">
          {popup.type === 'success' ? 'Success' : 'Error'}
        </h6>
        <p className="text-sm text-white/80">
          {popup.message}
        </p>
      </div>
    </div>

    {/* PROGRESS BAR */}
    <div
      className={`
        h-1 rounded-b-xl
        ${
          popup.type === 'success'
            ? ' from-blue-950 to-slate-900 animate-progress'
            : 'bg-red-400 animate-progress'
        }
      `}
    />
  </div>
)}

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