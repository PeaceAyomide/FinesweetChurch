import React from 'react'
import ABOUTUS from '../assets/aboutuslogo.png'
import GETINVOLVED from '../assets/getinvolved.png'
import GIVINGBACK from '../assets/givingback.png'

const Home2 = () => {
  return (
    <section className='pt-[8rem] pb-[9rem] flex justify-center items-center'>
      <div className='flex flex-col gap-[3rem]'>
        <div className='text-center flex flex-col gap-3'>
        <p>sub-headline</p>
        <p className='text-[40px] side-phone:text-[25px] font-bold'>A CHURCH THAT'S RELEVANT</p>
        </div>
        <div className='3boxs flex Ipad:flex-col justify-center items-center gap-6 px-[4rem] side-phone:px-1 '>
<div className='box1 flex flex-col p-[5rem] side-phone:p-[3rem] Ipad:w-[40rem] side-phone:w-[18rem] bg-[#FFF5EB] gap-3 border-b-[15px] border-[#FFD2A4]' >
<img src={ABOUTUS} alt="" className='h-[3rem] w-[3rem]'/>
<p className='font-bold text-[30px] side-phone:text-[22px]'>About us</p>
<p>We are a welcoming community dedicated to spreading love and hope through faith and service.</p>
</div>
<div className='box2 side-phone:w-[18rem] side-phone:p-[3rem] flex flex-col bg-[#FFF5EB] p-[5rem] gap-3 border-b-[15px] border-[#FFD2A4] Ipad:w-[40rem]' >
<img src={GETINVOLVED} alt="" className='h-[3rem] w-[3rem]'/>
<p className='font-bold text-[30px] side-phone:text-[22px]'>Get involved</p>
<p>Join us in making a difference by getting involved in our community outreach programs.</p>

</div>
<div className='box3 flex side-phone:w-[18rem] side-phone:p-[3rem] flex-col bg-[#FFF5EB] p-[5rem]  gap-3 border-b-[15px] border-[#FFD2A4] Ipad:w-[40rem]' >
<img src={GIVINGBACK} alt="" className='h-[3rem] w-[3rem]'/>
<p className='font-bold text-[30px] side-phone:text-[22px]'>Giving back</p>
<p>Experience the joy of giving back and see the impact of your generosity in our community.</p>

</div>
        </div>
      </div>
    </section>
  )
}

export default Home2