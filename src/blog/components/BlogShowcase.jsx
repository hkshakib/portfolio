import { useState } from "react";
import blogs from "../DummyData";
import BlogModal from "./BlogModal";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const BlogShowcase = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const openModal = (blog) => {
    setSelectedBlog(blog);
  };

  const closeModal = () => {
    setSelectedBlog(null);
  };

  return (
    <div className="flex p-10 font-modefor flex-wrap justify-around gap-16">
      {blogs.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col border border-gray-400 h-[80vh] w-[400px] cursor-pointer"
          onClick={() => openModal(blog)}
        >
          <div className="flex h-[45%]">
            <img src={blog.photo} className="flex bg-cover flex-1" alt="" />
          </div>
          <div className="flex p-4 text-[12px] text-gray-500 h-[10%] justify-between">
            <div className="flex flex-col">
              <span className="cursor-pointer hover:text-red-200">
                {blog.author}
              </span>
              <span>{blog.date}</span>
            </div>
            <div className="flex flex-col">
              <span className="cursor-pointer hover:text-red-200">
                {blog.category}
              </span>
            </div>
          </div>
          <div className="flex flex-col h-[35%] cursor-pointer hover:text-red-200">
            <div className="flex text-[18px] lg:text-[28px] italic p-4 h-[55%]">
              {blog.title}
            </div>
            <div className="flex text-[14px] lg:text-[16px] p-4 h-[35%] line-clamp-3 ">
              {blog.content}
            </div>
          </div>
          <div className="border-b border-gray-400 p-4 h-[1%] lg:h-[5%] w-[90%] mx-auto"></div>
          <div className="flex items-center pl-4 pt-2 gap-2">
            <MdOutlineRemoveRedEye className="flex text-[18px]" />
            <span className="flex text-[12px]">{blog.views}</span>
          </div>
        </div>
      ))}
      <div className="flex justify-center items-center gap-4">
        <div className="flex text-gray-400 text-[18px] gap-4">
          <MdKeyboardDoubleArrowLeft className="cursor-pointer" />
          <GrFormPrevious className="cursor-pointer" />
        </div>
        <div className="flex gap-4">
          <span className="cursor-pointer">1</span>
          <span className="cursor-pointer text-gray-400">2</span>
          <span className="cursor-pointer text-gray-400">3</span>
          <span className="cursor-pointer text-gray-400">4</span>
          <span className="cursor-pointer text-gray-400">5</span>
        </div>
        <div className="flex text-gray-400 text-[18px] gap-4">
          <GrFormNext className="cursor-pointer" />
          <MdKeyboardDoubleArrowRight className="cursor-pointer" />
        </div>
      </div>
      {selectedBlog && <BlogModal blog={selectedBlog} onClose={closeModal} />}
    </div>
  );
};

export default BlogShowcase;
