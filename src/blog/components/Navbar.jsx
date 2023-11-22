import React from "react";
import { VscRequestChanges } from "react-icons/vsc";

const Navbar = () => {
  return (
    <div className="flex h-[60px] p-5 items-center justify-between border">
      <div className="flex items-center gap-8">
        <div className="flex uppercase font-bold text-xl lg:pl-8 ml-4 font-mono">
          <a href="/">HKSHAKIB</a>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative flex items-center text-black">
            <div class="absolute left-0 pl-2">
              <svg
                class="h-7 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search"
              class="bg-[#F9F9F9] h-10 pl-10 pr-10 text-[15px] rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <span className="flex items-center uppercase lg:pr-8 ml-4 font-mono cursor-pointer gap-1">
          <VscRequestChanges /> Request Blog
        </span>
      </div>
    </div>
  );
};

export default Navbar;
