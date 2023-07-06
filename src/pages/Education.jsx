import React from 'react';
import UniversityLogo from "../static/unilogo.png";
import SchoolLogo from "../static/school.gif";

const Education = () => {
  return (
    <div className='flex flex-col '>
      <h1 className='text-[35px] lg:text-[56px] lg:ml-[90px] font-mono border-b-[1px]'>Education</h1>

      <div className='flex'>
        <div className='flex'>
          <img src={UniversityLogo} alt="UniversityLogo" />
        </div>
        <div className='flex flex-col justify-center mb-[60px] border-b-[1px]'>
          <h1 className='font-bold text-[20px] lg:text-[30px] font-mono'>Leading University</h1>
          <h2 className='lg:text-[20px]'>Bachelor of Science in Computer Science and Engineering</h2>
          <h2 className='lg:text-[20px] font-semibold'>February 2018 - February 2023</h2>
          <h2 className='lg:text-[18px]'>Sylhet, Bangladesh.</h2>
        </div>
      </div>
      <div className='flex'>
        <div className='flex ml-[25px] lg:ml-[70px]'>
          <img className='h-[100px] w-[100px] lg:h-[200px] lg:w-[200px]' src={SchoolLogo} alt="SchoolLogo" />
        </div>
        <div className='flex flex-col lg:justify-center mb-[60px] ml-[30px] lg:ml-[70px]'>
          <h1 className='font-bold text-[20px] lg:text-[30px] font-mono'>Scholarshome</h1>
          <h2 className='lg:text-[20px]'>Higher Secondary</h2>
          <h2 className='lg:text-[20px] font-semibold'>July 2014 - July 2016</h2>
          <h2 className='lg:text-[18px]'>Sylhet, Bangladesh.</h2>
        </div>
      </div>
    </div>
  )
}

export default Education;
