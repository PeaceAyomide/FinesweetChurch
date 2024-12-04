import React from 'react'
import { Bounce } from "react-awesome-reveal";

import cbg from '../assets/churchbg.png'

const Home6 = () => {
  return (
    <section 
    className="pt-[8rem] flex justify-center items-center px-[3%] pb-[9rem] bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${cbg})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
    }}
  >
    
<div className='bg-white flex justify-center items-center  flex-col w-[40rem] side-phone:w-[30rem] h-[22rem] px-[5rem]  ' style={{
        borderBottom: "15px solid #FFD2A4", 
      }}>
    <div className='flex flex-col gap-4 ' >
    <p className='text-[2rem] side-phone:text-[1.5rem] font-bold text-[#161722]'>WE WANT TO SERVE THE WORLD AROUND US</p>
    <p className='text-[#161722]'>We serve with love, bringing hope and joy to all.</p>
    <div>
    <button className='bg-[#FFD2A4]  px-[3rem] py-3 rounded-md text-[1rem] 
    text-black transition duration-300 ease-in-out transform hover:scale-105'>VISIT</button>
  
    </div>
   
    </div>

   
</div>

</section>
  )
}

export default Home6