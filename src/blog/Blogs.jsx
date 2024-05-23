import BlogShowcase from "./components/BlogShowcase";
import Categories from "./components/Categories";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const Blogs = () => {
  return (
    <div className="flex flex-col w-full bg-[#FAF9F7] font-modefor">
      <Navbar />
      <Content />
      <Categories />
      <BlogShowcase />
      <Footer/>
    </div>
  );
};

export default Blogs;
