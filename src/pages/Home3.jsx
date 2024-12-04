import React from 'react'
import beardedman from '../assets/a-bearded-man-praying-5206040.png'
import manandwoman from '../assets/man-and-woman-reading-book-while-sitting-on-pews-8468470.png'
import peoplesitting from '../assets/people-sitting-on-brown-pews-8674151.png'


const Home3 = () => {
  return (
    <section className='pt-[4rem] pb-[9rem] flex justify-center items-center'>
   <div className='flex flex-col gap-[3rem] text-[#161722]'>
        <div className='text-center flex flex-col gap-3'>
        <p>sub-headline</p>
        <p className='text-[40px] side-phone:text-[25px] font-bold'>LOVE AND COMPASSION</p>
        <p className=' flex px-[9rem] side-phone:px-[4rem] text-[0.9rem]'>
        Our mission is to foster a community of love and compassion, where everyone is welcome to grow in faith and support one another. Join us in our journey to make a positive impact in the world.
        </p>
        <div className='pt-[3rem]'>
        <button className='bg-[#FFD2A4]  px-[3rem] py-3 rounded-md text-[1rem] 
    text-black '>Read more</button></div>
    <div className="3images flex side-phone:flex  justify-center items-center Ipad:grid Ipad:grid-cols-2 side-phone:grid-cols-1 Ipad:px-[3rem] side-phone:px-0  pt-8   Ipad:flex-col  gap-[3rem] Ipad:gap-3">
        <img src={beardedman} alt="" className='h-[21rem] Ipad:h-[23rem] Ipad:w-[23rem] side-phone:h-[15rem] side-phone:w-[15rem]  '/>
        <img src={manandwoman} alt="" className='mt-[3rem] Ipad:mt-0 Ipad:h-[23rem] Ipad:w-[23rem] side-phone:h-[15rem] side-phone:w-[15rem]'/>
        <img src={peoplesitting} alt="" className='h-[21rem] Ipad:h-[23rem] Ipad:w-[23rem] side-phone:h-[15rem] side-phone:w-[15rem]'/>
    </div>
        <div className="mission pt-[3rem] gap-3 flex flex-col text-[#161722] side-phone:px-[1.3rem]">
          <p className=''>OUR MISSION & VISION</p>
          <p className='font-bold text-[2.4rem] side-phone:text-[25px]'>CELEBRATE WITH US</p>
          <p>We celebrate our mission and vision to create a nurturing environment for spiritual growth and community engagement.</p>
          <p className='font-bold transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>Read More →</p>
        </div>
        </div>
       
      </div>
    </section>
  )
}

export default Home3