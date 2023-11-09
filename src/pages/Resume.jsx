import React from "react";
import { MdEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import { ImGithub } from "react-icons/im";
import { TbDeviceMobileFilled } from "react-icons/tb";
import { BsLinkedin } from "react-icons/bs";

const Resume = () => {
  return (
    <>
      <div className="flex flex-1 flex-col border p-10 ">
        <div className="flex justify-center">
          <h1 className="text-[35px] lg:text-[56px] font-mono mb-[50px]">
            RESUME
          </h1>
        </div>
        <div className="flex flex-col divide-y-4 divide-black">
          <div className="flex flex-col basis-[10%] pt-4">
            <span className="text-[46px] font-semibold leading-10 text-[#313C4E]">
              Humayun kibria shakib
            </span>
            <span className="text-[22px] text-gray-500 pt-2 pb-5">
              Competitive Programmer | Python | Django | REST | React | React
              Query
            </span>
          </div>
          <div className="flex basis-[10%] pt-4 pb-4 pl-4">
            <div className="flex flex-col basis-[50%] gap-4">
              <span className="flex items-center gap-4">
                <MdEmail /> hkshakib.cse@gmail.com
              </span>
              <span className="flex items-center gap-4">
                <CgWebsite /> hkshakib.me
              </span>
              <span className="flex items-center gap-4">
                <ImGithub /> github.com/hkshakib
              </span>
            </div>
            <div className="flex flex-col basis-[50%] gap-8">
              <span className="flex items-center gap-4">
                <TbDeviceMobileFilled /> +880-1710889028
              </span>
              <span className="flex items-center gap-4">
                <BsLinkedin /> linkedin.com/in/hkshakib
              </span>
            </div>
          </div>
          <div className="flex pl-4 pb-4 pt-4">
            <div className="flex flex-col basis-[50%]">
              <div className="flex flex-col pb-20">
                <h3 className="text-[28px] text-[#313C4E] font-semibold pb-4">
                  Education
                </h3>
                <h3 className="text-[20px] font-semibold">BSc in CSE</h3>
                <h3 className="text-[20px]">Leading University, Sylhet</h3>
                <div className="flex">
                  <h3 className="flex basis-[50%] text-[14px] italic text-gray-500">
                    02/2018 - 07/2022
                  </h3>
                  <h3 className="text-[14px] italic text-gray-500">
                    3.29 out of 4.00
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-4 pb-20 text-[14px]">
                <h3 className="text-[28px] text-[#313C4E] font-semibold pb-4">
                  PROJECTS
                </h3>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[20px]">
                    LUXEHAVEN(Backend)
                  </h3>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>I
                    developed an advanced e-commerce backend with a fully
                    functioning backend and secure authentication using the
                    Django Rest Framework.
                  </div>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>
                    The system included a secure authentication system with JWT
                    tokens and role-based access control.
                  </div>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>
                    Additionally, I designed and implemented the database schema
                    using MySQL and developed RESTful API endpoints for product
                    management and the checkout process.
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[20px]">Portfolio</h3>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>I
                    designed and built a visually appealing and responsive
                    portfolio website using React and Tailwind CSS.
                  </div>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>
                    The website consists of a single page with distinct
                    sections, such as Home, Skills, Problem Solving, Education,
                    Achievements, and Contact.
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[20px]">RAWG Clone</h3>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>Clone
                    of the popular Game Review Site RAWG.
                  </div>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>
                    Used Technology: VITE, React, React Query, Chakra UI
                  </div>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>
                    Mobile Responsive, Dark Mode
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[20px]">ReactFunBox</h3>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>a
                    six-in-one project using react
                  </div>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>
                    Calculator, Todo, Quiz, Snake Game, and TicTacToe.
                  </div>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>
                    Mobile Responsive
                  </div>
                </div>
                <div className="flex flex-col">
                  <h3 className="font-semibold text-[20px]">
                    DjangoAuthentication
                  </h3>
                  <div className="flex">
                    <span className="font-bold pr-1 text-[12px]">-</span>a
                    Django-based authentication system. It aims to provide
                    secure user authentication and authorization functionalities
                    for Django web applications. The project includes features
                    such as user registration, login, password reset, and
                    account activation.
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="text-[28px] text-[#313C4E] font-semibold pb-4">
                  WORK EXPERIENCE
                </h3>
                <div className="flex flex-col">
                  <h2 className="text-[22px] font-semibold">
                    Junior Software Engineer (Part Time)
                  </h2>
                  <h3 className="text-[20px]">LIILab</h3>
                  <div className="flex">
                    <h3 className="flex basis-[50%] text-[14px] italic text-gray-500">
                      03/2021 - 01/2022
                    </h3>
                    <h3 className="text-[14px] italic text-gray-500">
                      Sylhet, Bangladesh
                    </h3>
                  </div>
                  <h3 className="text-[14px] text-gray-500 pb-4">PC BUILDER</h3>
                  <div className="flex flex-col gap-4 text-[14px]">
                    <div className="flex">
                      <span className="font-bold pr-1">-</span>I designed and
                      built a PC Builder product page with a basic Django
                      backend and HTML/CSS frontend. This project is mainly
                      focused on people who have no prior knowledge of how to
                      build a PC.
                    </div>
                    <div className="flex">
                      <span className="font-bold pr-1">-</span>I used Django ORM
                      to create a dynamic product page that allows users to
                      select and customize PC components.
                    </div>
                    <div className="flex">
                      <span className="font-bold pr-1">-</span>
                      Using HTML and CSS, I designed a visually appealing and
                      user-friendly interface that provides users with an
                      intuitive browsing experience.
                    </div>
                    <div className="flex">
                      <span className="font-bold pr-1">-</span>I also
                      implemented dynamic product filtering and search
                      functionality to help users find the components they need
                      quickly.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col basis[50%]">
              <div className="flex flex-col pb-20">
                <h3 className="text-[28px] text-[#313C4E] font-semibold pb-4">
                  SKILLS
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      Python
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[80px] h-[30px] rounded-[20px]">
                      C++
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[60px] h-[30px] rounded-[20px]">
                      C
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[130px] h-[30px] rounded-[20px]">
                      JavaScript
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[80px] h-[30px] rounded-[20px]">
                      JAVA
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[130px] h-[30px] rounded-[20px]">
                      TypeScript
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      Django
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[220px] h-[30px] rounded-[20px]">
                      Django REST Framework
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      MySQL
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      Celery
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center bg-gray-500 w-[130px] h-[30px] text-white rounded-[20px]">
                      Celery Beat
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      FastAPI
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      React JS
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[130px] h-[30px] rounded-[20px]">
                      React Query
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      Redux
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[150px] h-[30px] rounded-[20px]">
                      Redux Toolkit
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[130px] h-[30px] rounded-[20px]">
                      Tailwind CSS
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[120px] h-[30px] rounded-[20px]">
                      Material UI
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[120px] h-[30px] rounded-[20px]">
                      Chakra UI
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      HTML
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      CSS
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[80px] h-[30px] rounded-[20px]">
                      Git
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      Docker
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[200px] h-[30px] rounded-[20px]">
                      Data Structure
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[120px] h-[30px] rounded-[20px]">
                      Algorithms
                    </div>
                    <div className="flex justify-center items-center bg-gray-500 text-white w-[100px] h-[30px] rounded-[20px]">
                      OOP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
