import React from 'react'
import bg from '../../assets/sermon.png'

const Sermons = () => {
  return (
    <section 
    className="pt-[8rem] flex justify-center items-center px-[3%] pb-[9rem] bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll',
    }}
  >
  

<div className=' contentz  flex flex-col gap-4'>
  <p className='font-bold text-[16px] text-black;'>SERMON</p>
  <p className='text-[3rem] font-bold side-phone:text-[2.5rem] phone:text-[1.8rem]'>TAKE PART IN OUR SERMON</p>
  
</div>
  </section>
  )
}

export default Sermons