import React from 'react';
import Image from "../static/skills.jpg";
import { FaPooStorm } from 'react-icons/fa';

function Skills() {
  return (
    <div className='flex flex-col lg:flex-row'>
        
        <div className='flex flex-1'>
            <img className='bg-contain' src={Image} alt="skills" />
        </div>
        <div className='flex flex-col flex-1 justify-start items-start pt-[50px] lg:pl-0 pl-12'>
            <h1 className='text-[56px] font-mono'>Skills</h1>
            <div className='flex gap-2 mb-[10px]'>
                <h2 className='text-blue-600 text-[18px]'>Languages: </h2>
                <h3 className='text-gray-500'>C++ |</h3>
                <h3 className='text-gray-500'>Python |</h3>
                <h3 className='text-gray-500'>C |</h3>
                <h3 className='text-gray-500'>JavaScript |</h3>
                <h3 className='text-gray-500'>Dart</h3>
            </div>
            <div className='flex gap-2 mb-[10px]'>
                <h2 className='text-blue-500 text-[18px]'>Frontend: </h2>
                <h3 className='text-gray-500'>HTML |</h3>
                <h3 className='text-gray-500'>CSS |</h3>
                <h3 className='text-gray-500'>React JS |</h3>
                <h3 className='text-gray-500'>Tailwind CSS |</h3>
                <h3 className='text-gray-500'>MUI</h3>
            </div>
            <div className='flex gap-2 mb-[10px]'>
                <h2 className='text-blue-500 text-[18px]'>Backend: </h2>
                <h3 className='text-gray-500'>Django |</h3>
                <h3 className='text-gray-500'>Django REST |</h3>
                <h3 className='text-gray-500'>FastAPI |</h3>
                <h3 className='text-gray-500'>MYSQL</h3>
            </div>
            <div className='flex gap-2 mb-[10px] '>
                <h2 className='text-blue-500'>DevOps: </h2>
                <h3 className='text-gray-500'>Git |</h3>
                <h3 className='text-gray-500'>Github |</h3>
                <h3 className='text-gray-500'>Docker</h3>
            </div>
            <div className='flex gap-2 mb-[10px]'>
                <h2 className='text-blue-500 text-[18px]'>Fimiliar With: </h2>
                <h3 className='text-gray-500'> Redux |</h3>
                <h3 className='text-gray-500'> Celery |</h3>
                <h3 className='text-gray-500'>Celery Beat |</h3>
                <h3 className='text-gray-500'>React Query |</h3>
                <h3 className='text-gray-500'>Flutter |</h3>
                <h3 className='text-gray-500'>Web Scraping |</h3>
            </div>
            <h1 className='mt-[60px] text-[20px]'>Proficient in:</h1>
            <div className='flex flex-col'>
                <div className='flex items-center'>
                    <FaPooStorm/> <h3 className='text-gray-500 ml-4 text-[18px]'>C++</h3>
                </div>
                <div className='flex items-center'>
                    <FaPooStorm/> <h3 className='text-gray-500 ml-4 text-[18px]'>Python</h3>
                </div>
                <div className='flex items-center'>
                    <FaPooStorm/> <h3 className='text-gray-500 ml-4 text-[18px]'>JavaScript</h3>
                </div>
                <div className='flex items-center'>
                    <FaPooStorm/> <h3 className='text-gray-500 ml-4 text-[18px]'>Algorithomic Problem Solving</h3>
                </div>
                <div className='flex items-center'>
                    <FaPooStorm/> <h3 className='text-gray-500 ml-4 text-[18px]'>Backend</h3>
                </div>
                <div className='flex items-center'>
                    <FaPooStorm/> <h3 className='text-gray-500 ml-4 text-[18px]'>Frontend</h3>
                </div>
                <div className='flex items-center'>
                    <FaPooStorm/> <h3 className='text-gray-500 ml-4 text-[18px]'>Competitive Programming</h3>
                </div>
                <div className='flex items-center'>
                    <FaPooStorm/> <h3 className='text-gray-500 ml-4 text-[18px]'>Data Structure and Algorithms</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills;