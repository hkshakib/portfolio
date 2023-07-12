import React from 'react';

const ProjectWithLive = () => {
  return (
    <div className='flex flex-col justify-center p-4 lg:p-0 lg:items-center bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
            <div className='flex justify-center text-[16px] lg:text-[18px] font-mono pl-4 lg:pl-0 lg:pt-2 font-bold'>
              <span>React Fun Box</span>
            </div>

            <div className='flex flex-col'>
              <p className='text-[14px] lg:p-4 text-gray-500'>
                This is the combinations of 6 apps. I implemented those for learning purpose.
                Those Apps are,
              </p>
              <span className='text-[12px] font-mono lg:pl-4'>1. Calculator</span>
              <span className='text-[12px] font-mono lg:pl-4'>2. To-Do List</span>
              <span className='text-[12px] font-mono lg:pl-4'>3. Quiz</span>
              <span className='text-[12px] font-mono lg:pl-4'>4. Snake</span>
              <span className='text-[12px] font-mono lg:pl-4'>5. Memory Game</span>
              <span className='text-[12px] font-mono lg:pl-4'>6. TicTacToe</span>

              <h1 className='text-[14px] lg:pl-4 font-bold lg:pt-1'>Used Techonology:</h1>
              <span className='text-[12px] font-mono lg:pl-4'># React JS</span>
              <span className='text-[12px] font-mono lg:pl-4'># React Router Dom</span>
              <span className='text-[12px] font-mono lg:pl-4'># React ICONS</span>
            </div>

            <div className='flex flex-1 justify-center items-end pb-3 gap-4'>
              <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'> 
                <a className='font-mono' href="https://github.com/hkshakib/reactfunbox">Code</a>
              </button>
              <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'>
                <a className='font-mono' href="https://reactfunbox.vercel.app/">Live</a>
              </button>
            </div>
          </div>
  )
}

export default ProjectWithLive;