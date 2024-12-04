import React, { useState, useEffect }  from 'react'
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/logo.png'
const Navbar = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState('#home');
  const [isOpen, setIsOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (link) => {
    handleLinkClick(link);
    setIsOpen(false); 
    
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };
  React.useEffect(() => {
    setActiveLink(location.pathname);
    
  }, [location]);

  return (
    <nav className={`flex justify-center items-center gap-[6rem] Ipad:gap-[2rem]   bg-[#0D0D0D] ${isSticky ? 'sticky top-0 z-50' : ''}`
  }  >
      <div className='logox h-[5rem] flex justify-center items-center pl-[7rem] pr-[3rem] Ipad:pl-[1rem] side-phone:pl-0  
       border-r-2 border-gray-500 side-phone:border-0' 
           >
<img src={logo} alt="logo" className='Ipad:w-[7rem]'/>
      </div>
      <div className=' flex gap-[13rem] Ipad:gap-[3rem] side-phone:hidden'>
      <ul className='flex justify-between items-center gap-10 text-gray-500 text-sm '>
      <li><Link to="/" className={activeLink === '/' ? 'text-white' : 'text-gray-500 Ipad:text-[0.8rem]'} onClick={() => handleLinkClick('/')}>HOME</Link></li>
          <li><Link to="/aboutus" className={activeLink === '/aboutus' ? 'text-white' : 'text-gray-500'} onClick={() => handleLinkClick('/aboutus')}>ABOUT US</Link></li>
          <li><Link to="/sermons" className={activeLink === '/sermons' ? 'text-white' : 'text-gray-500'} onClick={() => handleLinkClick('/sermons')}>SERMON</Link></li>
          <li><Link to="/blogpost" className={activeLink === '/blogpost' ? 'text-white' : 'text-gray-500'} onClick={() => handleLinkClick('/blogpost')}>BLOG POST</Link></li>
          
      </ul>
      <Link to="/contact">
      <button  className={`bg-[#FFD2A4] px-[1.7rem] py-3 rounded-md text-[0.8rem] transition duration-300 ease-in-out transform hover:scale-105 ${activeLink === '/contact' ? 'text-white' : 'text-black'}`}   onClick={() => handleLinkClick('/contact')}>CONTACT US</button>
      </Link>
      </div>
      <div className="hidden side-phone:flex items-center pr-3">
        <div className="w-8 h-8 flex flex-col justify-between cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
          <div className={`w-full h-1 bg-white transition duration-500 ${isOpen ? 'transform rotate-45 translate-y-4' : ''}`}></div>
          <div className={`w-full h-1 bg-white transition duration-500 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-full h-1 bg-white transition duration-500 ${isOpen ? 'transform -rotate-45 -translate-y-3' : ''}`}></div>
        </div>
        <div className={`hidden scroll side-phone:flex items-center flex-col  gap-[3rem]  pt-[3rem] bg-black bg-opacity-95 fixed top-[75px] left-0 w-full h-full pb-[6rem] overflow-y-auto z-[100]  transform -translate-x-full transition-all duration-500 ${isOpen ? 'transform translate-x-0' : '-translate-x-full'}`}>
        <ul className='flex flex-col justify-between items-center gap-10  text-gray-500 text-sm '>
      <li><Link to="/" className={activeLink === '/' ? 'text-white' : 'text-gray-500 Ipad:text-[0.8rem]'} onClick={() => handleNavClick('/')}>HOME</Link></li>
          <li><Link to="/aboutus" className={activeLink === '/aboutus' ? 'text-white' : 'text-gray-500'} onClick={() => handleNavClick('/aboutus')}>ABOUT US</Link></li>
          <li><Link to="/sermons" className={activeLink === '/sermons' ? 'text-white' : 'text-gray-500'} onClick={() => handleNavClick('/sermons')}>SERMON</Link></li>
          <li><Link to="/blogpost" className={activeLink === '/blogpost' ? 'text-white' : 'text-gray-500'} onClick={() => handleNavClick('/blogpost')}>BLOG POST</Link></li>
          
      </ul>
      <Link to="/contact">
      <button  className={`bg-[#FFD2A4] px-[1.7rem] py-3 rounded-md text-[0.8rem] transition duration-300 ease-in-out transform hover:scale-105 ${activeLink === '/contact' ? 'text-white' : 'text-black'}`}   onClick={() => handleNavClick('/contact')}>CONTACT US</button>
      </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
