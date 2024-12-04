import React from 'react'
import joy from '../../assets/joy.png'
import values from '../../assets/values.png'
import events from '../../assets/events.png'
import welcome from '../../assets/welcome.png'

const Aboutus3 = () => {
  return (
    <section className='pt-[4rem] pb-[9rem] flex justify-center items-center '>
         
         <div className='flex-col flex gap-[4rem] justify-center items-center  '>
         <div className='text-center flex flex-col gap-3 text-[#161722] '>
         <p>BENEFITS </p>
         <p className='text-[40px] font-bold side-phone:text-[25px] side-phone:px-[2rem] '>THE BENEFITS OF JOINING OUR CHURCH</p>        
         </div>
         <div className='flex items-center  px-[12rem]  side-phone:px-1
          Ipad:flex-col-reverse Ipad:gap-2 '>
         <div className='w-[90%] Ipad:w-[29rem] side-phone:w-[20rem] phone:w-[15rem]'>
  <p className='text-[30px] font-bold side-phone:text-[25px]'>FIND FULFILLMENT AND JOY</p>
  <p className=' w-[90%] '>Join us to find joy and purpose in a community that values love and service. Together, we make a difference in the world through faith and action.</p>
</div>
<div className='w-[45rem]   Ipad:w-[29rem] side-phone:w-[20rem] phone:w-[15rem]'>
  <img src={joy} alt="" className='w-full object-cover  '/>
</div>
         </div>
         <div className='flex  items-center flex-row-reverse gap-[6rem]  px-[12rem] side-phone:px-1  Ipad:flex-col Ipad:gap-2 '>
         <div className='w-[90%] Ipad:w-[29rem] side-phone:w-[20rem] phone:w-[15rem]'>
  <p className='text-[30px] font-bold side-phone:text-[25px]'>SHARED VALUES</p>
  <p className='w-[90%]'>Our shared values unite us in a mission to spread kindness and hope. Be part of a community that supports and uplifts each other in faith.</p>
</div>
<div className=' w-[45rem] Ipad:w-[29rem] side-phone:w-[20rem] phone:w-[15rem]'>
  <img src={values} alt=""className='w-full object-cover'/>
</div>
         </div>
         <div className='flex items-center  px-[12rem] side-phone:px-1  Ipad:flex-col-reverse Ipad:gap-2 '>
         <div className='w-[90%] Ipad:w-[29rem] side-phone:w-[20rem] phone:w-[15rem]'>
  <p className='text-[30px] font-bold side-phone:text-[25px]'>CHARITY EVENTS</p>
  <p className='w-[90%]'>Engage in charity events that bring joy and support to those in need. Together, we can make a meaningful impact in our community.</p>
</div>
<div className='w-[45rem] Ipad:w-[29rem] side-phone:w-[20rem] phone:w-[15rem]'>
  <img src={events} alt="" className='w-full object-cover '/>
</div>
         </div>
         <div className='flex  items-center flex-row-reverse gap-[6rem]  px-[12rem] side-phone:px-1 Ipad:px-[11rem]  Ipad:flex-col Ipad:gap-2     '>
         <div className='w-[90%] Ipad:w-[29rem] side-phone:w-[20rem] phone:w-[15rem]'>
  <p className='text-[30px] font-bold side-phone:text-[25px]'>ALL ARE WELCOME</p>
  <p className='w-[90%]'>All are welcome to join us in a journey of faith and fellowship. Experience the warmth and acceptance of our community.</p>
</div>
<div className=' w-[45rem] Ipad:w-[29rem] side-phone:w-[20rem] phone:w-[15rem]'>
  <img src={welcome} alt=""className='w-full object-cover'/>
</div>
         </div>
         </div>
         
  </section>
  )
}

export default Aboutus3