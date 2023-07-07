import React from 'react'

const Projects = () => {
  return (
    <div className='flex flex-col justify-center'>

      <div className='flex justify-center text-[35px] lg:text-[56px] font-mono mb-[20px]'>
        <h1>Projects</h1>
      </div>

      <div className='flex flex-wrap gap-8 lg:p-12 justify-center'>

          <div className='flex flex-col justify-center items-center bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
            <sapn className='text-[18px] font-mono p-2'>React Fun Box</sapn>

            <div className='flex'>
              <p className='text-[14px] p-4 text-gray-500'>
                This Project contains a collection of React apps developed as part of the React Fun Box project. 
                Each app focuses on a different concept or game, providing interactive and educational experiences.
              </p>
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

          <div className='flex flex-col items-center bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
            <sapn className='text-[18px] font-mono p-1'>Personal Protfolio</sapn>
            <div className='flex'>
              <p className='text-[14px] p-4 text-gray-500'>
                I designed and built a visually appealing and responsive portfolio website using React and Tailwind CSS. 
                The website consists of a single page with distinct sections, such as 
                Home, Skills, Problem Solving, Education, Achivements, and Contact. 
                It effectively showcases my skills, education, and achievements in a concise and organized manner. 
                The website's responsive design ensures optimal viewing experience across various devices.
              </p>
            </div>
            <div className='flex flex-1 justify-center items-end pb-3 gap-4'>
              <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'> 
                <a className='font-mono' href="https://github.com/hkshakib/protfolio">Code</a>
              </button>
            </div>
          </div>

          <div className='flex flex-col items-center bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
            <sapn className='text-[18px] font-mono p-1'>StoreFront (Backend)</sapn>
            <div className='flex'>
              <p className='text-[14px] p-4 text-gray-500'>
                I have developed a complete E-commerce backend system that includes user registration, 
                login functionality, product browsing, cart management, and a customizable admin panel. Users can register, 
                log in, and browse through a wide range of products. They can add products to their cart, 
                apply filters for a refined search, and access their profiles. The system is designed for future payment integration to provide a seamless purchasing experience.
              </p>
            </div>
            <div className='flex flex-1 justify-center items-end pb-3 gap-4'>
              <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'> 
                <a className='font-mono' href="https://github.com/hkshakib/storefront2">Code</a>
              </button>
            </div>
          </div>

          <div className='flex flex-col items-center bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
            <sapn className='text-[18px] font-mono p-1'>Django Authentication (Backend)</sapn>
            <div className='flex'>
              <p className='text-[14px] p-4 text-gray-500'>
                This is the complete package of Django authentication system using Django Simple JWT.
                I implemented it using Django REST framework. It has several Endpoints for user including login, logout, signup and user profile.
              </p>
            </div>
            <div className='flex flex-1 justify-center items-end pb-3 gap-4'>
              <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'> 
                <a className='font-mono' href="https://github.com/hkshakib/DjangoAuthentication">Code</a>
              </button>
            </div>
          </div>


          <div className='flex flex-col items-center bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
            <sapn className='text-[18px] font-mono p-1'>BID Buddy (Frontend)</sapn>
            <div className='flex'>
              <p className='text-[14px] p-4 text-gray-500'>
                BID BUDDY Project is a web application that enables users to participate in auctions for various items. 
                It provides features such as user registration and authentication, an auction gallery to browse available items, 
                the ability to place bids on items.
              </p>
            </div>

            <div className='flex flex-1 justify-center items-end pb-3 gap-4'>
              <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'> 
                <a className='font-mono' href="https://github.com/hkshakib/auctionfrontend">Code</a>
              </button>
            </div>
          </div>


          <div className='flex flex-col items-center bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
            <sapn className='text-[18px] font-mono p-1'>BID Buddy (Backend)</sapn>
            <div className='flex'>
              <p className='text-[14px] p-4 text-gray-500'>
              BID BUDDY Project is a web application that enables users to participate in auctions for various items. 
              It provides features such as user registration and authentication, an auction gallery to browse available items, the ability to place bids on items. 
              Also, Included some endpoints for the Admin dashboard and statistics that not includes in frontend yet
              </p>
            </div>
            <div className='flex flex-1 justify-center items-end pb-3 gap-4'>
              <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'> 
                <a className='font-mono' href="https://github.com/hkshakib/auctionbackend">Code</a>
              </button>
            </div>
          </div>


          <div className='flex flex-col items-center bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
            <sapn className='text-[18px] font-mono p-1'>Steller (FullStack)</sapn>
            <div className='flex'>
              <p className='text-[14px] p-4 text-gray-500'>
                An Real Estate App Using Django REST, React And Redux.
                I implement REST, React Redux in this project while Learning Redux from Scratch.
              </p>
            </div>
            <div className='flex flex-1 justify-center items-end pb-3 gap-4'>
              <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'> 
                <a className='font-mono' href="https://github.com/hkshakib/Stellar">Code</a>
              </button>
            </div>
          </div>

          <div className='flex flex-col items-center bg-[#FEFAF0] border h-[400px] w-[300px] lg:w-[400px] shadow-lg'>
            <sapn className='text-[18px] font-mono p-1'>Blog (Frontend)</sapn>
            <div className='flex'>
              <p className='text-[14px] p-4 text-gray-500'>
                I implement this blog using React while Learning React.
              </p>
            </div>
            <div className='flex flex-1 justify-center items-end pb-3 gap-4'>
              <button className='border bg-white h-[40px] w-[100px] rounded hover:shadow-md'> 
                <a className='font-mono' href="https://github.com/hkshakib/blogfrontend">Code</a>
              </button>
            </div>
          </div>


      </div>
    </div>
  )
}

export default Projects;
// FCF4FF