import React from 'react';
import { AiOutlineFire } from 'react-icons/ai';
import Achivment from "../static/Achivment.jpg";


function Achivements() {
  return (
    <div className='flex flex-col lg:flex-row'>
        
        <div className='flex lg:flex-1 m-[15px] lg:ml-[40px]'>
            <img className='bg-contain rounded-lg' src={Achivment} alt="skills" />
        </div>

        <div className='flex flex-col lg:flex-1 lg:justify-start lg:items-start lg:pt-[50px] pl-4 lg:pl-12'>
            <h1 className='text-[56px] font-mono'>Achivements</h1>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
                <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'><AiOutlineFire className='text-red-700 text-[25px]'/> Participated in ICPC Dhaka Regional 2021(BUBT). </h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
              <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> 8th Among Private University in ICPC Preliminary 2021.</h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
              <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> Top 10 in NSU ICE Fest Inter University Programming Contest 2020</h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
              <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/>Champions, Mathophobic Skyvers, LU Intra University Programming Competition 2020.</h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px] '>
              <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> Champions, LUZeroIQ, LU Intra University Programming Competition 2021.</h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
             <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> Top 6 in Bangladesh, LUZeroIQ, IEEE Extreme 14.</h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
             <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> Top 10 In Country Wise Ranking, Codeforces Round 643 (Div. 2) </h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
             <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> National ICT Quiz Champions 2018</h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
              <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> LU Intra University ICT Quiz Champions 2018</h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
              <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> LU Intra University ICT Quiz Champions 2019</h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
              <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> LU Intra University ICT Quiz Champions 2020</h2>
            </div>
            <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
              <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono'> <AiOutlineFire className='text-red-700 text-[25px]'/> LU Intra University ICT Quiz Champions 2021</h2>
            </div>
        </div>
    </div>
  )
}

export default Achivements;