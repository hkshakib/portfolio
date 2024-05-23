
import Categories from "./components/Categories";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
const Blogs = () => {
  return (
    <div className="flex flex-col w-full h-[100vh]">
      <Navbar />
      <Content/>
      <Categories/>
    </div>
  );
};

export default Blogs;
