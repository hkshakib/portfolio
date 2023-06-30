import React from 'react';
import Image from '../static/p.jpeg';

function SideBar() {
  return (
    <div className='width-[100%] ml-auto mr-auto grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]'>
        <div className='col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44'>
            <div className='w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0'>
                <img className='w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]' src={Image} alt="" />
            </div>
            <div className='pt-[100px] pb-8'>
                <h2 className='mt-6 mb-1 text-[26px] font-semibold dark:text-white'>Humayun Kibria Shakib</h2>
                <h3 className='mb-4 text-[#7B7B7B] inline-block px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]'>WEB DEVELOPER</h3>
                <div className='flex justify-center space-x-3'>
                    <a href="www.facebook.com">
                        <span className='flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-lg BgCustom'>
                            {/* <FontAwesomeIcon icon="fa-brands fa-facebook-f" /> */}
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SideBar;