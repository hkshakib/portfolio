import React from 'react';

function Navbar() {
  return (
    <>
      <div className='flex basis-[20%] justify-center pr-8 uppercase font-bold text-[30px] pt-2'>WelCome</div>
      <div className='flex basis-[50%] justify-start items-center'>
        <ul className='flex gap-16 pt-2'>
          <li className='hover:text-blue-600 cursor-pointer'>
            <a href="#home">Home</a>
          </li>
          <li className='hover:text-blue-600 cursor-pointer'><a href="#problem-solving">Problem Solving</a></li>
          <li className='hover:text-blue-600 cursor-pointer'><a href="#projects">Projects</a></li>
          <li className='hover:text-blue-600 cursor-pointer'><a href="#contest">Contests</a></li>
          <li className='hover:text-blue-600 cursor-pointer'><a href="#education">Education</a></li>
          <li className='hover:text-blue-600 cursor-pointer'><a href="#certification">Certification</a></li>
          <li className='hover:text-blue-600 cursor-pointer'><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className='flex justify-start items-center pr-8 mr-8'>
        <button className='border h-[50px] w-[180px] rounded-[50px] bg-blue-500 text-white font-bold hover:bg-blue-400 hover:shadow-lg text-[1rem]'>Download CV</button>
      </div>
    </>
  )
}

export default Navbar;