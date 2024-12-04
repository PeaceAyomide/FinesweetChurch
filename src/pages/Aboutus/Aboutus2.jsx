import React from 'react'
import beardedman from '../../assets/a-bearded-man-praying-5206040.png'
import manandwoman from '../../assets/man-and-woman-reading-book-while-sitting-on-pews-8468470.png'
import peoplesitting from '../../assets/people-sitting-on-brown-pews-8674151.png'

const Aboutus2 = () => {
  return (
    <section className='pt-[4rem] pb-[9rem] flex justify-center items-center'>
         <div className='text-center text-[#161722] flex flex-col gap-3'>
         <p>sub-headline</p>
         <p className='text-[40px] font-bold side-phone:text-[25px]'>LOVE AND COMPASSION</p>
         <p className=' flex px-[9rem] side-phone:px-[4rem] text-[0.9rem] '>
         We are dedicated to building a community of love and compassion, where everyone is welcome to grow in faith and support each other. Join us in our mission to make a positive impact in the world around us.
         </p>
        
     <div className=" flex Ipad:grid Ipad:grid-cols-2 side-phone:grid-cols-1 Ipad:px-[4rem] side-phone:flex  side-phone:px-0  Ipad:gap-[1rem] Ipad:flex-col  justify-center Ipad:items-center   gap-[3rem] pt-[2rem] ">
         <img src={beardedman} alt="" className='h-[21rem]  Ipad:h-[23rem] Ipad:w-[23rem] mt-[3rem] Ipad:mt-0 side-phone:h-[15rem] side-phone:w-[15rem]'/>
         <img src={manandwoman} alt="" className='Ipad:h-[23rem] Ipad:w-[23rem] side-phone:h-[15rem] side-phone:w-[15rem]'/>
         <img src={peoplesitting} alt="" className='h-[21rem] Ipad:h-[23rem] Ipad:w-[23rem] mt-[3rem] Ipad:mt-0 side-phone:h-[15rem] side-phone:w-[15rem]'/>
     </div>
        <div className='flex side-phone:flex-col pt-[4rem] px-[12rem] side-phone:px-[3rem] gap-[3rem]'>
            <div className='one flex flex-col gap-3'>
                <p>OUR MISSIOn & Vision</p>
                <p className='font-bold text-[1.8rem] Ipad:text-[1.2rem]'>STRIVING FOR A BETTER TOMORROW
                </p>
                <p className=' text-left '>Our mission is to nurture a community of faith and love, where everyone can grow and support one another. Join us in making a difference in the world through compassion and service.</p>
            </div>
            <div className="two flex flex-col gap-3">
                <p>WHAT WE DO</p>
                <p className='font-bold text-[1.8rem] Ipad:text-[1.16rem]'>BRINGING PEACE AND JOY TO THE WORLD</p>
                <p className='text-left'>We are committed to spreading peace and joy, creating a welcoming environment for all. Together, we strive to make a positive impact in our community and beyond.</p>
            </div>
        </div>
         </div>
        
       
     </section>
  )
}

export default Aboutus2