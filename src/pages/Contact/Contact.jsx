import React from 'react'
import bg from '../../assets/contact.png'

const Contact = () => {
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
  <p className='font-bold text-[16px] text-[#FFD2A4]'>CONTACT</p>
  <p className='text-[3rem] font-bold text-white side-phone:text-[2.4rem] phone:text-[1.8rem]'>GET IN TOUCH WITH OUR CHURCH</p>
  
</div>
  </section>
  )
}

export default Contact