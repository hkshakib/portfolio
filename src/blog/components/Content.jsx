import BlogBg from '../static/blogBg.png';

const Content = () => {
  return (
    <div className="flex flex-1">
      <img className='h-[80vh] w-full bg-cover bg-no-repeat border' src={BlogBg} alt="" />
    </div>
  );
};

export default Content;
