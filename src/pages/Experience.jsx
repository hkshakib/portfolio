import React from 'react'

function Experience() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-[56px] font-mono mb-[50px]'>Experience</h1>
        <div class="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
            <div class="col-span-4 w-full h-full ">
                <div class="w-full h-full bg-[#FCF4FF] rounded-md p-2 md:pl-4">
                    <h1 class="text-black text-xl font-medium py-1">Junior Software Engineer (Part-Time)</h1>
                    <h2 class="text-black text-[16px] font-normal py-1">March 2021 - January 2022</h2>
                    <p class="text-gray-500 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                </div>
            </div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                <div class="h-full w-1 bg-indigo-300"></div>
                <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">1</div>
            </div>
            <div class="col-span-4 w-full h-full"></div>



            <div class="col-span-4 w-full h-full"></div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                <div class="h-full w-1 bg-indigo-300"></div>
                <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">2</div>
            </div>
            <div class="col-span-4 w-full h-full ">
                <div class="w-full h-full bg-[#FEFAF0] rounded-md p-2 md:pl-4">
                    <h1 class="text-black text-xl font-medium py-1">ACM Coordinator Lead</h1>
                    <h2 class="text-black text-[16px] font-normal py-1">January 2021 - January 2022</h2>
                    <p class="text-gray-500 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                </div>
            </div>

            <div class="col-span-4 w-full h-full ">
                <div class="w-full h-full bg-[#FFF4F4] rounded-md p-2 md:pl-4">
                    <h1 class="text-black text-xl font-medium py-1">ACM Cordinator</h1>
                    <h2 class="text-black text-[16px] font-normal py-1">January 2020 - January 2021</h2>
                    <p class="text-gray-500 sm:text-sm text-xs">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt corporis consequuntur voluptate nulla iusto quam ut quasi, eaque quas omnis vero totam ullam, reprehenderit ratione pariatur accusamus suscipit odit nostrum?</p>
                </div>
            </div>
            <div class="relative col-span-1 w-full h-full flex justify-center items-center">
                <div class="h-full w-1 bg-indigo-300"></div>
                <div class="absolute w-6 h-6 rounded-full bg-indigo-400 z-10 text-white text-center">3</div>
            </div>
            <div class="col-span-4 w-full h-full"></div>
        </div>
    </div>
  )
}

export default Experience;