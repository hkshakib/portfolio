import React from 'react';
import { FaHandsClapping } from 'react-icons/fa6';
import Avatar from '../static/avatar.png';
import BgHome from '../static/947.jpg';

function Home() {
  return (
    <div className='flex h-[700px] w-[100%]'>
        <div className='flex flex-col flex-1 justify-center items-center '>
            <div className='flex basis-[5%] flex-shrink-0 w-[100%] justify-center items-center gap-1 pt-[20px] pr-[320px]'>
                <p className='w-auto text-[#4A6CF7] font-semibold'>Hey There</p>
                <FaHandsClapping/>
                <p className='w-auto text-[#4A6CF7] font-semibold'> I am </p>
            </div>
            <div className='flex basis-[5%] flex-shrink-0  w-[100%] justify-center items-center pb-[0px]'>
                <h6 className='font-bold text-[#090E34] text-[40px]'>Humayun Kibria Shakib</h6>
            </div>
            <div className='flex basis-[2%] flex-shrink-0  w-[100%] justify-center items-center pb-[0px] pr-[240px] gap-2'>
                <h3 className='opacity-1 text-gray-400'>Professional </h3>
                <h6 className='font-semi-bold'>Web Developer</h6>
            </div>
            <div className='flex basis-[30%] flex-wrap w-[100%] justify-center items-center pl-[250px] pr-12 pb-4 pt-2'>
            <h3 className='opacity-1 text-gray-400'>
                Eager and motivated software engineer ready to turn ideas into reality. 
                With a solid foundation in C/C++, JavaScript, Python, Django, FastAPI, and many more. 
                I bring a fresh perspective and a passion for problem-solving to every project. 
                Driven by a love for technology and a desire to make a positive impact, I'm constantly seeking new challenges and opportunities to grow. 
                In my free time, I enjoy tinkering with new tech, practicing, and exploring new cultures. 
                Let's build the future together!
            </h3>
            </div>
            <div className='flex basis-[10%] flex-shrink-0  w-[100%] justify-center items-center gap-24'>
                <button className=' h-[50px] w-[180px] rounded-[50px] bg-blue-500 text-white font-bold hover:shadow-lg text-[1rem]'>Contact Me</button>
                <button className=' h-[50px] w-[180px] rounded-[50px] bg-[#090E34] text-white font-bold hover:shadow-lg text-[1rem]'>Learn More</button>
            </div>
        </div>
        
        <div className="flex flex-1 justify-end relative">
            <img className="flex absolute top-[123px] left-0 right-[10px] z-1 bg-opacity-100" src={Avatar} alt="Avatar" />
            <img className="" src={BgHome} alt="bg" />
        </div>

    </div>
  )
}

export default Home;