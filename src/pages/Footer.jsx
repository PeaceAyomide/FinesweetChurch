import React from 'react'
import footerlogo from '../assets/footerlogo.png'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <section className='pt-[4rem] side-phone:pt-[2.5rem] pb-[4rem] flex justify-center items-center  bg-[#161722] '>
        <div className='flex side-phone:flex-col  side-phone:text-center gap-[5rem] Ipad:gap-[2rem]'>
<div className='text-white side-phone:items-center flex flex-col gap-3 Ipad:px-[1rem] '>
    <img src={footerlogo} alt="" className='w-[6rem]'/>
    <p>© Copyright Finsweet 2022</p>
    <p>(480) 555-0103</p>
    <p>4517 Washington Ave. </p>
    <p>finsweet@example.com</p>

</div>
<div className='text-white flex flex-col gap-3'>
    <p className=' cursor-pointer '>Quicklinks</p>
    <p className=' cursor-pointer '>ABOUT US</p>
    <p className=' cursor-pointer '>SERMONS</p>
    <p className=' cursor-pointer '>EVENTS</p>
    <p className=' cursor-pointer '>BLOG</p>
</div>
<div className='text-white flex flex-col gap-3'>
    <p>Connect </p>
    <div className="social flex gap-3 text-[#FFD2A4] side-phone:justify-center">
<FaFacebook className=' cursor-pointer '/>
<IoLogoTwitter  className=' cursor-pointer '/>
<FaLinkedin  className=' cursor-pointer '/>
    </div>
</div>

<div className='text-white flex flex-col gap-4 '>
    <p className='font-bold text-[1.7rem] Ipad:text-[1.2rem]  side-phone:text-[1rem]'>SUBSCRIBE TO GET LATEST UPDATES AND NEWS</p>
    <div className='flex side-phone:justify-center '>
        <input type="text" placeholder='Yourmail@gmail.com' className='bg-[#161722] border-2 border-solid border-gray-500 px-[5rem] Ipad:px-[2rem] side-phone:px-[0.8rem] rounded-[0.5rem]'  />
        <button className='bg-[#FFD2A4]  px-[3rem] Ipad:px-[1rem] py-3 rounded-md text-[1rem] 
    text-[#1C1D28] transition duration-300 ease-in-out transform hover:scale-105 -ml-2 relative z-20'>SUBSCRIBE</button>
    </div>
</div>

</div>
    </section>
  )
}

export default Footer