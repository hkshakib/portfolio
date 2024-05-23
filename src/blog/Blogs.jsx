
import BlogShowcase from "./components/BlogShowcase";
import Categories from "./components/Categories";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
const Blogs = () => {
  return (
    <div className="flex flex-col w-full h-[100vh] bg-[#FAF9F7] font-modefor">
      <Navbar />
      <Content/>
      <Categories/>
      <BlogShowcase/>
    </div>
  );
};

export default Blogs;
