import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import Email from "../static/email.png";

const Footer = () => {
  return (
    <div className="flex flex-col w-[100%] pb-[10px] bg-[rebeccapurple] h-[400px] rounded-t-3xl">
      <div className="flex flex-col flex-1 lg:flex-row">
        <div className="flex flex-col lg:flex-1 flex-wrap">
          <div className="flex flex-col lg:flex-1 justify-start items-center">
            <div className="flex lg:flex-1">
              <h1 className="text-white text-[40px] lg:text-[56px] font-mono">
                Better Together
              </h1>
            </div>

            <div className="flex justify-center items-end lg:flex-1 lg:w-[100%] pl-8 pr-4 lg:p-0">
              <p className="font-mono text-white text-[12px] lg:text-[18px] whitespace-wrap">
                Let me take into a deeper experience, make a moment a lasting
                conveyable memory.
              </p>
            </div>

            <div className="flex flex-col lg:flex-1 w-[100%] justify-center items-center">
              <p className="font-mono text-white text-[12px] lg:text-[18px]">
                Let me help build your tribe.
              </p>
              <h2 className="font-mono lg:text-[20px] text-white pt-10">
                <span className="text-blue-500">Email:</span>{" "}
                hkshakib.cse@gmail.com
              </h2>
            </div>
          </div>

          <div className="flex lg:flex-1 justify-center items-end pt-8 lg:pt-0">
            <div className="flex text-[35px] gap-4 lg:gap-12 font-semibold">
              <div>
                <a
                  href="https://github.com/hkshakib"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub className="bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]" />
                </a>
              </div>

              <div>
                <a
                  href="https://www.linkedin.com/in/hkshakib/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineLinkedin className="bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]" />
                </a>
              </div>
              <div>
                <a
                  href="https://web.facebook.com/Humayun.kibria.shakib/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineFacebook className="bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]" />
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/HKibriaShakib"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineTwitter className="bg-[#F2f4F8] rounded text-blue-700 hover:bg-white hover:text-[36px]" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:flex lg:flex-1 justify-center items-center lg:p-0 p-8">
          <img
            className="h-[200px] w-[200px] rounded-lg"
            src={Email}
            alt="Email"
          />
        </div>
      </div>

      <div className="flex basis-[10%] justify-center items-center text-white">
        <h2>All Right Reseved @HKShakib 2023</h2>
      </div>
    </div>
  );
};

export default Footer;
