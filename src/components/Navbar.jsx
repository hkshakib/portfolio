import React, { useState, useEffect } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import CV from '../static/Resume.pdf';

function Navbar() {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 500;
      setIsNavbarSticky(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  

  const toggleMenu = () => {
    setMenuOpen(!menuOpen && isNavbarSticky);
  };

  return (
    <header
      className={`flex justify-start lg:justify-center items-center h-16 z-10  lg:w-[100%] font-inter pt-4 pr-2 pb-2 ${
        isNavbarSticky ? 'sticky top-0 bg-white border-b' : ''
      }`}
    >
      <div className='flex uppercase font-bold text-xl lg:pl-8 ml-4 font-mono'>
        HKSHAKIB
      </div>

      <div className='hidden lg:flex lg:flex-1 justify-center items-center lg:gap-12'>
        <ul className='flex lg:gap-12 gap-4 text-[15px]'>
          <li className='hover:text-blue-600 cursor-pointer'>
            <a href='#home'>Home</a>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <a href='#skills'>Skills</a>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <a href='#problem-solving'>Problem Solving</a>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <a href='#experience'>Experience</a>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <a href='#projects'>Projects</a>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <a href='#education'>Education</a>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'>
            <a href='#achivements'>Achivements</a>
          </li>
        </ul>
      </div>

      <div className='hidden lg:flex lg:pr-8'>
        <a href={CV} target="_blank" rel="noopener noreferrer">
          <button className='border h-10 px-4 rounded-lg bg-blue-500 text-white font-bold hover:bg-blue-400 hover:shadow-lg text-sm'>
            Download CV
          </button>
        </a>
      </div>

      <div className='lg:hidden flex basis-[70%] justify-end gap-8'>
        <button
          className='flex text-black cursor-pointer hover:text-gray-600 '
          onClick={toggleMenu}
        >
          { menuOpen ? <AiOutlineMenu /> : <AiOutlineMenu />}
        </button>
      </div>

      

      {menuOpen && (
        <div className='lg:hidden absolute top-16 left-0 right-0 bg-white z-1000000 w-[100%] transition-all duration-500 ease-in z-1000'>
          <ul className='flex flex-col gap-4 text-[10px] text-black transition-all duration-500 ease-in p-4'>
            <li className='hover:text-blue-600 cursor-pointer'>
              <a href='#home'>Home</a>
            </li>
            <li className='hover:text-blue-600 cursor-pointer'>
              <a href='#skills'>Skills</a>
            </li>
            <li className='hover:text-blue-600 cursor-pointer'>
              <a href='#problem-solving'>Problem Solving</a>
            </li>
            <li className='hover:text-blue-600 cursor-pointer'>
              <a href='#education'>Education</a>
            </li>
            <li className='hover:text-blue-600 cursor-pointer'>
              <a href='#projects'>Projects</a>
            </li>
            <li className='hover:text-blue-600 cursor-pointer'>
              <a href='#experience'>Experience</a>
            </li>
            <li className='hover:text-blue-600 cursor-pointer'>
              <a href='#achivements'>Achivements</a>
            </li>
          </ul>
          <a href={CV} target="_blank" rel="noopener noreferrer" className='mx-[20px]'>
            <button className='border h-[30px] w-[100px]  my-2 rounded-lg bg-blue-500 text-black font-semibold hover:bg-blue-400 hover:shadow-lg text-[12px]'>
              Download CV
            </button>
          </a>
        </div>
      )}

    </header>
  );
}

export default Navbar;
