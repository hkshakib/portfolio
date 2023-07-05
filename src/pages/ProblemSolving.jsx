import React from 'react';
import CF from "../static/CF.png";
import CC from "../static/codechef.png";
import LC from "../static/leetcode.png";

const ProblemSolving = () => {
  return (
    <div className='flex flex-col'>
        
        <h1 className='flex justify-center text-[40px] lg:text-[56px] font-mono mb-[20px]'>Problem Solving</h1>

        <div className='flex gap-12 lg:gap-20 flex-wrap justify-around items-center lg:p-10'>

            <div className='flex lg:flex-1 bg-[#FCF4FF] h-[400px] lg:w-[400px] shadow-lg border'>
                <div className='flex flex-col'>

                    <div className='flex justify-center items-center'>
                        <img className='h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]' src={CF} alt="" />
                        <h1 className='lg:ml-[10px] lg:pt-[30px] text-[20px] lg:text-[30px] font-mono'>
                            Codeforces
                        </h1>
                    </div>

                    <div className='flex justify-between items-center mt-[30px]'>
                        <div className='flex flex-col items-center bg-white h-[100px] w-[150px] ml-1 lg:ml-[40px] rounded-lg'>
                            <h1 className='uppercse font-mono lg:text-[16px] text-[12px] mb-[10px] lg:p-2 p-2'>SPECIALIST</h1>
                            <h2 className='text-[10px] lg:text-[12px] font-mono text-gray-500 p-2'>Highest Ratings: 1543</h2>
                        </div>

                        <div className='flex flex-col items-center bg-white h-[100px] w-[150px] ml-[40px] rounded-lg'>
                            <h1 className='uppercse font-mono lg:text-[16px] text-[12px] mb-[10px] lg:p-2 p-2'>Total Solved</h1>
                            <h2 className='text-[10px] lg:text-[12px] font-mono text-gray-500 p-2'>1559 Problems</h2>
                        </div>
                    </div>
                    <div className='flex justify-center items-center mt-[100px] ml-[150px] border w-[100px] h-[30px] bg-blue-800 rounded-md text-white'>
                        <a className='text-[12px]' href="https://codeforces.com/profile/_Bohemian">Bohemian</a>
                    </div>
                </div>

            </div>

            <div className='flex lg:flex-1 bg-[#FEFAF0] h-[400px] lg:w-[400px] shadow-lg border'>
                <div className='flex flex-col'>

                        <div className='flex justify-center items-center'>
                            <img className='h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]' src={CC} alt="" />
                            <h1 className='lg:ml-[10px] lg:pt-[30px] text-[20px] lg:text-[30px] font-mono'>
                                CodeChef
                            </h1>
                        </div>
                        <div className='flex justify-between items-center mt-[30px]'>
                            <div className='flex flex-col items-center bg-white h-[100px] w-[150px] lg:ml-[40px] rounded-lg'>
                                <h1 className='uppercse font-mono lg:text-[16px] text-[12px] mb-[10px] lg:p-2 p-2'>4*</h1>
                                <h2 className='text-[10px] lg:text-[12px] font-mono text-gray-500 p-2'>Highest Ratings: 1810</h2>
                            </div>
                            <div className='flex flex-col items-center bg-white h-[100px] w-[150px] ml-[40px] rounded-lg'>
                                <h1 className='uppercse font-mono lg:text-[16px] text-[12px] mb-[10px] lg:p-2 p-2'>Total Solved</h1>
                                <h2 className='text-[10px] lg:text-[12px] font-mono text-gray-500 p-2'>280 Problems</h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-[100px] ml-[150px] border w-[100px] h-[30px] bg-blue-800 rounded-md text-white'>
                            <a className='text-[12px]' href="https://www.codechef.com/users/hkshakib">hkshakib</a>
                        </div>
                    </div>
                </div>

                <div className='flex lg:flex-1 bg-[#FFF4F4] h-[400px] lg:w-[400px] shadow-lg border'>
                    <div className='flex flex-col'>
                        <div className='flex justify-center items-center'>
                            <img className='h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]' src={LC} alt="" />
                            <h1 className='lg:ml-[10px] lg:pt-[30px] text-[20px] lg:text-[30px] font-mono'>
                                LeetCode
                            </h1>
                        </div>
                        <div className='flex justify-between items-center mt-[30px]'>
                            <div className='flex flex-col items-center bg-white h-[100px] w-[150px] lg:ml-[40px] rounded-lg'>
                                <h1 className='uppercse font-mono lg:text-[16px] text-[12px] mb-[10px] lg:p-2 p-2'>Max Streak</h1>
                                <h2 className='text-[10px] lg:text-[12px] font-mono text-gray-500 p-2'>35</h2>
                            </div>
                            <div className='flex flex-col items-center bg-white h-[100px] w-[150px] ml-[40px] rounded-lg'>
                                <h1 className='uppercse font-mono lg:text-[16px] text-[12px] mb-[10px] lg:p-2 p-2'>Total Solved</h1>
                                <h2 className='text-[10px] lg:text-[12px] font-mono text-gray-500 p-2'>113 Problems</h2>
                            </div>
                        </div>
                        <div className='flex justify-center items-center mt-[100px] ml-[150px] border w-[100px] h-[30px] bg-blue-800 rounded-md text-white'>
                            <a className='text-[12px]' href="https://leetcode.com/humayun_kibria/">humayun_kibria</a>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default ProblemSolving;