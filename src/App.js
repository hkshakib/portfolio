import Navbar from "./components/Navbar";
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { AiOutlineMail, AiOutlineDownload, AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { LiaBirthdayCakeSolid } from 'react-icons/lia';
import { SlDocs } from 'react-icons/sl';
import { BiClipboard } from 'react-icons/bi';
import { PiSlideshowThin } from 'react-icons/pi';


import Image from './static/p.jpeg';

const App = () => {
  return (
    <div className="flex h-[100vh] bg-[url('./static/bg-1.jpg')] justify-center">
      <div className="flex basis-[70%] flex-col">

        <div className="flex basis-[20%] justify-center ">
          <Navbar/>
        </div>

        <div className="flex basis-[80%] gap-[82px]">

            <div className="fixed top-24 left-[350px] rounded-lg">
              <img src={Image} alt="Profile photo" className="h-[250px] w-[250px] rounded-lg bg-contain"/>
            </div>

          <div className="flex basis-[30%]">
    
            <div className="flex basis-[100%] flex-col bg-[#FFFFFF] shadow-sm rounded-lg justify-end">
              
              <div className="flex flex-col basis-[25%] ">
                <div className="flex flex-1 justify-center font-mono">
                  <h1 className="uppercase">Humayun Kibria shakib</h1>
                </div>
                <div className="flex flex-2 justify-center font-mono text-[14px]">
                  <h1 className="uppercase font-mono">Web Developer</h1>
                </div>
                <div className="flex flex-1 justify-center items-center gap-8">
                  <FaFacebook className="h-[30px] w-[30px] rounded text-white bg-blue-500 cursor-pointer hover:bg-blue-700"/>
                  <FaTwitter className="h-[30px] w-[30px] rounded text-white bg-blue-500 cursor-pointer hover:bg-blue-700"/>
                  <FaInstagram className="h-[30px] w-[30px] rounded text-white bg-blue-500 cursor-pointer hover:bg-blue-700"/>
                  <FaGithub className="h-[30px] w-[30px] rounded text-white bg-blue-500 cursor-pointer hover:bg-blue-700"/>
                </div>

              </div>

              <div className="flex flex-col basis-[40%] bg-[#F3F6F6] ml-4 mr-4 rounded-md">
                <div className="flex flex-1 uppercase border-b-2">
                  <div className="flex p-8"><FiPhone/></div>
                  <div className="flex flex-col p-2">
                    <div className="flex mt-2 font-mono text-[12px]">PHONE</div>
                    <div className="flex font-mono">+880-1710889028</div>
                  </div>
                </div>
                <div className="flex flex-1 border-b-2 uppercase">
                  <div className="flex p-8"><AiOutlineMail/></div>
                  <div className="flex flex-col p-2">
                    <div className="flex  mt-2 font-mono text-[12px]">email</div>
                    <div className="flex font-mono lowercase">hkshakib.cse@gmail.com</div>
                  </div>
                </div>
                <div className="flex flex-1 uppercase border-b-2">
                <div className="flex p-8"><CiLocationOn/></div>
                  <div className="flex flex-col p-2">
                    <div className="flex mt-2 font-mono text-[12px]">location</div>
                    <div className="flex font-mono">Sylhet, Bangladesh</div>
                  </div>
                </div>
                <div className="flex flex-1 uppercase">
                  <div className="flex p-8"><LiaBirthdayCakeSolid/></div>
                  <div className="flex flex-col p-2">
                    <div className="flex mt-2 font-mono text-[12px]">Birth date</div>
                    <div className="flex font-mono">01-10-1997</div>
                  </div>
                </div>
              </div>


              <div className="flex basis-[10%] justify-center items-center">
                <div className="flex justify-center items-center gap-4 border border-blue-400 h-[40px] w-[200px] rounded-md cursor-pointer hover:bg-blue-800 hover:text-white">
                  <AiOutlineDownload className="w-[20px] h-[20px]"/>
                 <button className="flex text-[16px] font-mono">DOWNLOAD CV</button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col basis-[70%]">
            <div className="flex basis-[15%] justify-end">
              <div className="flex basis-[70%] gap-4 p-6 rounded-lg bg-[#FFFFFF]">

                <div className="flex flex-col flex-1 justify-center items-center bg-[#F3F6F6] cursor-pointer rounded hover:bg-[#9FE4CF] hover:text-black">
                  <div><BiClipboard/></div>
                  <div>ABOUT</div>
                </div>

                <div className="flex flex-col flex-1 justify-center items-center bg-[#F3F6F6] cursor-pointer rounded hover:bg-[#9FE4CF] hover:text-black">
                  <div><SlDocs/></div>
                  <div>SKILLS</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center bg-[#F3F6F6] cursor-pointer rounded hover:bg-[#9FE4CF] hover:text-black">
                  <div><AiOutlineFundProjectionScreen/></div>
                  <div>PROJECTS</div>
                </div>
                <div className="flex flex-col flex-1 justify-center items-center bg-[#F3F6F6] cursor-pointer rounded hover:bg-[#9FE4CF] hover:text-black">
                  <div><PiSlideshowThin/></div>
                  <div>CONTACT</div>
                </div>

              </div>

            </div>
            <div className="flex flex-1 mt-16 bg-[#FFFFFF]">
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
