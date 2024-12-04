import React from 'react'
import children from '../../assets/children.png'

const Blogpost = () => {
  return (
    <section className='pt-[8rem] pb-[7rem] flex justify-center items-center flex-col gap-[2rem] bg-[#F5F2F0]'>
<div className='text-center flex flex-col gap-3 '>
        <p>Upcoming SERMONS</p>
        <p className='text-[40px] font-bold side-phone:text-[25px]'>MOST RECENT POST</p> </div>
        <div className='box flex  gap-[3rem]  p-7 side-phone:p-1  Ipad:flex-col'>
            <div className='side-phone:flex side-phone:justify-center'><img src={children} alt="" className='w-[30rem] side-phone:w-[18rem]'/></div>
<div className='card w-[30rem] side-phone:w-[18rem] flex flex-col gap-4 '>
    <div className=' flex  text-[#161722] gap-[7rem]'>
        <p>TUESDAY 13 MAY, 2022</p>
        <p>BY JOHN HUNAU DEO</p>
    </div>
    <div className='flex flex-col gap-3'>
        <p className='text-[1.8rem] font-[900] side-phone:text-[23px]'>CHURCH WAS DOING WHAT HE OFTEN DID WHEN DROPPED AN ORACLE</p>
        <p>Join us in exploring faith and community through our latest posts. Discover insights and stories that inspire and uplift your spirit.</p>
    </div>
    <div><button className='bg-[#FFD2A4] px-[3rem] py-3 rounded-md text-[1rem] text-black transform duration-300 ease-in-out hover:scale-105'>READ MORE</button></div>
</div>
        </div>
    </section>
  )
}

export default Blogpost