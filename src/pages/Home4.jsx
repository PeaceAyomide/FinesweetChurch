import React from 'react'
import one from '../assets/one.png'
import two from '../assets/two.png'
import three from '../assets/three.png'
import four from '../assets/four.png'

const Home4 = () => {
  return (
   <section className='pt-[4rem] pb-[9rem] flex justify-center items-center bg-[#F5F2F0]'>
     <div className='text-center flex flex-col gap-3'>
        <p>Watch and listen</p>
        <p className='text-[40px] side-phone:text-[25px] font-bold '>THE BENEFITS OF JOINING OUR CHURCH</p>
        <div className="3images flex Ipad:flex-col Ipad:items-center justify-center gap-[1rem] pt-5">
    <img src={one} alt="" className=" Ipad:w-[23rem] side-phone:w-[17rem] transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90 cursor-pointer"/>
    <img src={two} alt="" className=" Ipad:w-[23rem] side-phone:w-[17rem]  transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90 cursor-pointer"/>
    <img src={three} alt="" className=" Ipad:w-[23rem] side-phone:w-[17rem]  transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90 cursor-pointer"/>
    <img src={four} alt="" className=" Ipad:w-[23rem] side-phone:w-[17rem]  transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-90 cursor-pointer"/>
</div>


        </div>
   </section>
  )
}

export default Home4