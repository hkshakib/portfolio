import React from "react";
import Navbar from "./components/Navbar";
import Content from "./components/Content";
const Blogs = () => {
  return (
    <div className="flex flex-col w-full h-[100vh]">
      <Navbar />
      <Content />
    </div>
  );
};

export default Blogs;
