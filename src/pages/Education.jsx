import React from 'react';
import UniversityLogo from "../static/unilogo.png";
import SchoolLogo from "../static/scholl.gif";

const Education = () => {
  return (
    <div className='flex flex-col '>
      <h1 className='text-[56px] ml-[90px] font-mono border-b-[1px]'>Education</h1>

      <div className='flex '>
        <div className='flex'>
          <img src={UniversityLogo} alt="UniversityLogo" />
        </div>
        <div className='flex flex-col justify-center mb-[60px] border-b-[1px]'>
          <h1 className='font-bold text-[20px] lg:text-[30px] font-mono'>Leading University</h1>
          <h2 className='lg:text-[25px]'>Bachelor of Science in Computer Science and Engineering</h2>
          <h2 className='lg:text-[23px]'>February 2018 - February 2023</h2>
          <h2 className='lg:text-[23px]'>Sylhet, Bangladesh</h2>
        </div>
      </div>
      <div className='flex'>
        <div className='flex ml-[70px]'>
          <img className='h-[200px] w-[200px]' src={SchoolLogo} alt="SchoolLogo" />
        </div>
        <div className='flex flex-col justify-center mb-[60px] ml-[70px]'>
          <h1 className='font-bold texzt-[20px] lg:text-[30px] font-mono'>Scholarshome</h1>
          <h2 className='lg:text-[25px]'>Higher Secondary</h2>
          <h2 className='lg:text-[23px]'>July 2014 - July 2016</h2>
          <h2 className='lg:text-[23px]'>Sylhet, Bangladesh</h2>
        </div>
      </div>
    </div>
  )
}

export default Education;