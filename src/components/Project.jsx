import React from 'react';

const Project = ({Title, Summery, Technologies, CodeUrl}) => {
  return (
    <div className='flex flex-col items-center  bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
        <div className='flex justify-center lg:text-[18px] font-mono p-1 lg:pt-2 font-bold'>
            <span>{Title}</span>
        </div>
        <div className='flex flex-col'>
            <span className='text-[14px] p-2 lg:p-4 text-gray-500'>
                {Summery}
            </span>
            <span className='text-[14px] lg:text[16px] pl-2 lg:pl-4 font-bold lg:pt-1'>
                Used Technology:
            </span>
            {Technologies && Technologies.map((tech) =>
                <span className='text-[12px] font-mono pl-2 lg:pl-4'># {tech}</span>
            )}
        </div>
        <div className='flex flex-1 justify-center items-end pb-3 gap-4'>
            <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'> 
                <a className='font-mono' href={CodeUrl}>Code</a>
            </button>
        </div>
    </div>
  )
}

export default Project;