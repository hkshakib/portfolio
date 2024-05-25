// BlogModal.js
import React from "react";
import { createPortal } from "react-dom";
import { ImCross } from "react-icons/im";

const BlogModal = ({ blog, onClose }) => {
  if (!blog) return null;

  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return createPortal(
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-md shadow-lg h-[90vh] overflow-y-auto w-[90vw] md:w-[90vw] lg:w-[60vw] relative"
        onClick={handleModalClick}
      >
        
        <button
          className="sticky top-0 right-0 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          <ImCross className="text-[20px]"/>
        </button>
        <div className="text-center md:text-[20px] lg:text-[30px] font-bold mb-4 z-[9999]">{blog.title}</div>
        <div className="flex justify-center">
            <img src={blog.photo} alt={blog.title} className="w-[50%] h-[50vh] mb-4 bg-cover" />


        </div>
        <div className="flex justify-center text-gray-700 mb-4 p-10">
          {blog.author} - {blog.date}
        </div>
        <div className="flex justify-center">
          <article className="text-[16px] prose lg:prose-xl">{blog.content}</article>
        </div>
      </div>

    </div>,
    document.body
  );
};

export default BlogModal;
