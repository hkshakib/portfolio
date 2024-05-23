import BlogBg from '../static/blogBg.png';

const Content = () => {
  return (
    <div className="relative flex flex-1 font-modefor">
      <img className='h-[80vh] w-full bg-cover bg-no-repeat border  brightness-75' src={BlogBg} alt="" />
      <div className='absolute inset-0 flex justify-center items-center'>
        <div className='relative flex flex-col gap-4 justify-around items-center h-[50%] w-[40%] bg-[#F7F5F3] opacity-90'>
          <div className='absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-bold py-1 px-3 rounded-full'>
            Welcome
          </div>
          <div className='flex tracking-widest pt-8'>
            <span>Hey! Here we go</span>
          </div>
          <div className='flex'>
            <span className='flex text-center p-8 text-[34px]'>
            Join me on a journey of learning, sharing, and exploring the ever-evolving tech landscape.
            </span>
          </div>
          <div className='flex mb-10'>
            <button className='flex border border-black justify-center items-center h-[80px] w-[300px] text-[12px] leading-10 tracking-widest'>Read Article Now</button>
          </div>
        </div>
      </div>
  </div>
  );
};

export default Content;
