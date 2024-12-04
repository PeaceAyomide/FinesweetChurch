import React from 'react'
import { Fade } from "react-awesome-reveal";
import bg from '../wbg.jpg'

const Home = () => {
  return (
    <section 
      className="pt-[8rem] flex justify-center items-center  pb-[9rem] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundColor: 'black',
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${bg})`,
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundAttachment: 'scroll',
      }}
    >
    

<div className=' contentz text-white side-phone:pl-2 phone:pl-0  flex flex-col gap-4 '>
  
    <p className='font-bold text-[14px] '>WELCOME TO OUR CHURCH</p>
    <Fade duration={4000} triggerOnce>
    <p className='text-[3rem] side-phone:text-[2.5rem] side-phone:w-full font-bold w-[60%] phone:text-[1.8rem]'>BECOME A PART OF OUR COMMUNITY</p>
    </Fade>
    <div>
    <button className='bg-[#FFD2A4]  px-[3rem] py-3 rounded-md text-[1rem] 
    text-black transition duration-300 ease-in-out transform hover:scale-105'>Learn more</button>
    </div>
    <p className='w-[20rem] '> <span className='text-[#FFD2A4] font-bold'>━</span> Join us in our mission to spread love and kindness throughout the community.</p>
</div>
    </section>
  )
}

export default Home