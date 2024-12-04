import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa6";
import kimbowen from '../../assets/kimbowen.png'
import redtop from '../../assets/redtop.png'
import craig from '../../assets/craig.png'
import boywhite from '../../assets/boywhite.png'


const Aboutus4 = () => {
  return (
    <section className='pt-[4rem] pb-[9rem] flex justify-center items-center gap-[3rem] flex-col'>
         <div className='text-center flex flex-col gap-3 text-[#161722]'>
         <p>CHURCH MEMBERS</p>
         <p className='text-[40px] font-bold side-phone:text-[25px]'>MEET OUR INSPIRATIONAL TEAM</p>        
         </div>
         <div className='grid grid-cols-4 Ipad:grid-cols-2 side-phone:grid-cols-1 gap-3 '>
         <div className='flex flex-col justify-center items-center gap-2 bg-[#F5F2F0] px-[5rem] py-[3rem]    transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
        <img src={kimbowen} alt="" className='w-[8rem] side-phone:w-[6rem]' />
        <p className='font-bold text-[1.2rem]'>KIM BOWEN</p>
        <p>Pastor, Church</p>
        <div className="social flex gap-3 text-[#161722]">
<FaFacebook className=' cursor-pointer '/>
<IoLogoTwitter  className=' cursor-pointer '/>
<FaLinkedin  className=' cursor-pointer '/>
    </div>
     </div>
     <div className='flex flex-col justify-center items-center gap-2 bg-[#F5F2F0] px-[4rem] py-[3rem] transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
        <img src={redtop} alt="" className='w-[8rem]' />
        <p className='font-bold text-[1.2rem]'>DANIELLE WATKINS</p>
        <p>Pastor, Church</p>
        <div className="social flex gap-3 text-[#161722]">
<FaFacebook className=' cursor-pointer '/>
<IoLogoTwitter  className=' cursor-pointer '/>
<FaLinkedin  className=' cursor-pointer '/>
    </div>
     </div>
     <div className='flex flex-col justify-center items-center gap-2 bg-[#F5F2F0] px-[5rem] py-[3rem] transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
        <img src={craig} alt="" className='w-[8rem]' />
        <p className='font-bold text-[1.2rem]'>NAOMI CRAIG</p>
        <p>Pastor, Church</p>
        <div className="social flex gap-3 text-[#161722]">
<FaFacebook className=' cursor-pointer '/>
<IoLogoTwitter  className=' cursor-pointer '/>
<FaLinkedin  className=' cursor-pointer '/>
    </div>
     </div>
     <div className='flex flex-col justify-center items-center gap-2 bg-[#F5F2F0] px-[5rem] py-[3rem] transition-transform duration-300 transform hover:scale-105 cursor-pointer'>
        <img src={boywhite} alt="" className='w-[8rem]' />
        <p className='font-bold text-[1.2rem]'>SANTOS PAYNE</p>
        <p>Pastor, Church</p>
        <div className="social flex gap-3 text-[#161722]">
<FaFacebook className=' cursor-pointer '/>
<IoLogoTwitter  className=' cursor-pointer '/>
<FaLinkedin  className=' cursor-pointer '/>
    </div>
     </div>  
         </div>
    
     </section>
  )
}

export default Aboutus4