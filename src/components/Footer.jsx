import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import Email from "../static/email.png";

const Footer = () => {
  return (
    <div className='flex flex-col w-[100%] pb-[10px]'>

      <div className='flex flex-col basis-[90%] lg:flex-row'>

        <div className='flex flex-col lg:flex-1 flex-wrap'>

          <div className='flex flex-col lg:flex-1 justify-start items-center'>
            
            <div className='flex lg:flex-1'>
              <h1 className='text-[40px] lg:text-[56px] font-mono'>Contact ME</h1>
            </div>

            <div className='flex justify-center items-end lg:flex-1 lg:w-[100%] pl-8 pr-4 lg:p-0'>
              <p className='font-mono text-[12px] lg:text-[18px]'>IF YOU WANT TO HIRE ME OR HAVE OTHER QUERIES, THEN KNOCK ME ANYTIME.</p>
            </div>

            <div className='flex lg:flex-1 w-[100%] justify-center items-end'>
              <h2 className='font-mono lg:text-[20px]'><span className='text-blue-500'>Email:</span> hkshakib.cse@gmail.com</h2>
            </div>

          </div>

          <div className='flex lg:flex-1 justify-center items-end gap-4'>

            <button className='flex text-[35px] gap-2 font-semibold'>
              <a href="https://github.com/hkshakib" target="_blank" rel="noopener noreferrer"><AiOutlineGithub className='bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]'/></a>
              <a href="https://www.linkedin.com/in/hkshakib/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin className='bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]'/></a>
              <a href="https://web.facebook.com/Humayun.kibria.shakib/" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook className='bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]'/></a>
              <a href="https://twitter.com/HKibriaShakib" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter className='bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]'/></a>
            </button>
          
          </div>

        </div>

        <div className='flex lg:flex-1 justify-center lg:p-0 p-8'>
          <img className='bg-contain rounded-lg' src={Email} alt="Email" />
        </div>

      </div>

      <div className='flex justify-center items-center'>
        <h2>All Right Reseved @HKShakib 2023</h2>
      </div>

    </div>
  )
}

export default Footer;