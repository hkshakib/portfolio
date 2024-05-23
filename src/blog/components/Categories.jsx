import { useEffect, useState } from 'react';
import { FaSearch } from 'react-icons/fa';

const Categories = () => {
    const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);
      const navbarOffset = 835;
      setIsNavbarSticky(scrollPosition > navbarOffset);
      console.log(isNavbarSticky);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, );
  return (
    <div className={`flex justify-around items-center p-5 font-modefor shadow-lg ${
        isNavbarSticky ? " bg-white border-b fixed top-0 left-0 right-0 z-50 " : ""
      }`}>
        <div className="flex gap-8 justify-between items-center text-[14px] tracking-widest">
            <a href="/programming">
                <span className="cursor-pointer hover:underline">Programming</span>
            </a>
            <a href="/programming">
                <span className="cursor-pointer hover:underline">Web Development</span>
            </a>
            <a href="/programming">
                <span className="cursor-pointer hover:underline">Mobile Development</span>
            </a>
            <a href="/programming">
                <span className="cursor-pointer hover:underline">Artificial Intelligence</span>
            </a>
            <a href="/programming">
                <span className="cursor-pointer hover:underline">Database</span>
            </a>
            <a href="/programming">
                <span className="cursor-pointer hover:underline">Thoughts</span>
            </a>
        </div>
        <div className="flex items-center relative">
            <FaSearch className="absolute left-3 opacity-50" />
            <input 
            className="flex w-[300px] md:w-[400px] h-[40px] pl-10 pr-4 rounded-[5px] border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm text-[14px]" 
            placeholder="Search Articles" 
            type="text" 
            />
      </div>
    </div>
  )
}

export default Categories;