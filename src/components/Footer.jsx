import React from 'react';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineFacebook, AiOutlineTwitter } from 'react-icons/ai';
import Email from "../static/email.png";

const Footer = () => {
  return (
    <div className='flex flex-col w-[100%] pb-[10px]'>
      <div className='flex flex-col lg:flex-row pb-[100px] lg:ml-[15px]'>
        <div className='flex flex-col lg:flex-1 justify-start lg:pt-[50px] pl-4 pb-[50px] lg:pb-0'>
              <h1 className='text-[40px] lg:text-[56px] font-mono'>Contact ME</h1>
              <h2 className='font-mono lg:text-[30px]'>IF YOU WANT TO HIRE ME OR HAVE OTHER QUERIES, THEN KNOCK ME ANYTIME.</h2>
              <h2 className='font-mono lg:text-[30px]'><span className='text-blue-500'>Email:</span> hkshakib.cse@gmail.com</h2>
              <div className='flex basis-[10%] lg:w-[100%] gap-4 mt-[10px]'>
                <button className='flex justify-center items-center text-[35px] gap-2 font-semibold'>
                    <a href="https://github.com/hkshakib" target="_blank" rel="noopener noreferrer"><AiOutlineGithub className='bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]'/></a>
                    <a href="https://www.linkedin.com/in/hkshakib/" target="_blank" rel="noopener noreferrer"><AiOutlineLinkedin className='bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]'/></a>
                    <a href="https://web.facebook.com/Humayun.kibria.shakib/" target="_blank" rel="noopener noreferrer"><AiOutlineFacebook className='bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]'/></a>
                    <a href="https://twitter.com/HKibriaShakib" target="_blank" rel="noopener noreferrer"><AiOutlineTwitter className='bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]'/></a>
                </button>
            </div>
        </div>

        <div className='flex lg:flex-1 m-[15px] lg:ml-[40px]'>
              <img className='bg-contain rounded-lg' src={Email} alt="Email" />
        </div>
      </div>
      <div className='flex justify-center items-center'>
        <h2 className='text-blue-600'>All Right Reseved @HKShakib 2023</h2>
      </div>
    </div>
  )
}

export default Footer;