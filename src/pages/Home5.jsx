import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import angel from '../assets/preach.jpg'

const Home5 = () => {
  return (
    <section className='pt-[4rem] pb-[9rem] flex justify-center items-center flex-col gap-7'>
 <div className='text-center flex flex-col gap-3 '>
        <p>Upcoming SERMONS</p>
        <p className='text-[40px] side-phone:text-[25px] font-bold'>JOIN US AND BECOME PART OF SOMETHING GREAT</p> </div>
        <div className=' flex Ipad:flex-col-reverse Ipad:justify-center  Ipad:items-center'>
<div className="event pt-[4rem] bg-[#FFF5EB] w-[30rem] side-phone:w-[20rem] phone:w-[18rem] px-[3rem] py-6 flex flex-col gap-4 ">
 <div className='flex justify-between  flex-row  items-end  '>
    <p className='text-[#A54E2B] font-bold'>UPCOMING EVENT</p>    <div className="date flex flex-col items-end ">
        <p className='font-bold text-[24px]
        
        '>20</p>
        <p className='text-[16px]'>JULY</p>
    </div>
    </div>   
   
        <p className='text-[#161722] font-bold text-[24px]'>WATCH AND LISTEN TO OUR SERMONS</p>
        <p className='text-[#161722]'>Join us for our upcoming sermons and be part of a community that inspires and uplifts.</p>
    <div className='flex gap-3'>
    <CiClock2 className='text-[1.2rem]'/>
    <p className='text-[#161722]'>Friday 23:39 IST <br/> Saturday 11:20 ISD</p>
    </div>
    <div className='flex gap-3'>
    <CiLocationOn className='text-[1.2rem]'/>
    <p className='text-[#161722]'>No 233 Main St. New York,  <br/> United States</p>
    </div>
    <div className='pt-[rem] '>
        <button className='  px-[3rem] py-4 rounded-md text-[1rem] 
    bg-black text-[#FFD2A4]'>REGISTER</button></div>
</div>

    <img src={angel} alt="" className='w-[40rem] Ipad:w-[30rem] side-phone:w-[20rem] phone:w-[18rem]'/>

        </div>
    </section>
  )
}

export default Home5