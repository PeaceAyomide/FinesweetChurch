import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Contact2 = () => {
  return (
    <section className='pt-[5rem] pb-[7rem] flex  justify-center items-center flex-row gap-[6rem] Ipad:gap-[3rem] Ipad:px-[10rem] bg-[#F5F2F0] side-phone:flex-col'>
<div className='flex flex-col '>
    <p className='flex pb-[1rem] font-bold text-[1.4rem]'>
        CONTACT FORM:
    </p>
    <div className='flex flex-col  gap-3'>
    <input className='w-[30rem] Ipad:w-[20rem] h-[3rem] pl-3 rounded-md ' type="text" placeholder='Your full Name'/>
    <input className='w-[30rem] Ipad:w-[20rem] h-[3rem] pl-3 rounded-md ' type="text" placeholder='Your Email'/>
    <input className='w-[30rem] Ipad:w-[20rem] h-[3rem] pl-3  rounded-md' type="text" placeholder='Your Query Related'/>
    <textarea className='w-[30rem] Ipad:w-[20rem] pl-3 resize-none  rounded-md' rows='6' placeholder='Message'></textarea>
    <button className='bg-[#FFD2A4] px-[3rem] py-3 rounded-md text-[1rem] text-black  transform duration-300 ease-in-out hover:scale-105'>SEND MESSAGE</button>
    </div>
   
</div>
<div className='text-[#1E1B1B] flex flex-col gap-[2.5rem]'>
    <div>
    <p className=''>Address</p>
    <p className='font-bold text-[1.4rem]'>NH 234 PUBLIC SQUARE SAN FRANCISCO 65368</p>
    </div>
    <div className='flex flex-col gap-2'>
    <p>Contact Details</p>
    <p className='font-bold text-[1.4rem]'>(480) 555-0103</p>
    <p className='font-bold text-[1.4rem]'>FINSWEET@EXAMPLE.COM</p>    
    </div>
    <div className='flex flex-col gap-2'>
    <p>Find us here</p>
    <div className="social flex gap-[1.7rem] ">
<FaFacebook className=' cursor-pointer text-[1.4rem]'/>
<IoLogoTwitter  className=' cursor-pointer text-[1.4rem]'/>
<FaLinkedin  className=' cursor-pointer text-[1.4rem]'/>
    </div>
    </div>
   
</div>

</section>
  )
}

export default Contact2