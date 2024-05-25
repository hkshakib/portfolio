import BlogBg from "../static/blogBg.png";

const Content = () => {
  return (
    <div className="relative flex flex-1 font-modefor">
      <img
        className="h-[40vh] lg:h-[80vh] w-full bg-no-repeat bg-cover border brightness-75"
        src={BlogBg}
        alt=""
      />
      <div className="absolute inset-0 flex justify-center items-center">
        <div className="relative flex flex-col gap-4 justify-around items-center h-[50%] md:h-[70%] w-[60%] lg:w-[40%] bg-[#F7F5F3] opacity-90">
          <div className="absolute top-0 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-[8px] lg:text-xs font-bold py-2 px-3 rounded-full">
            Welcome
          </div>
          <div className="flex tracking-widest pt-4 lg:pt-8">
            <span className="flex text-[10px] lg:text-[12px]">Hey! Here we go</span>
          </div>
          <div className="flex">
            <span className="flex text-center p-1 md:p-8 italic text-[12px] md:text-[18px] lg:text-[34px]">
              Join me on a journey of learning, sharing, and exploring the
              ever-evolving tech landscape.
            </span>
          </div>
          <div className="flex mb-10">
            <button className="flex border border-black justify-center items-center h-[40px] lg:h-[70px] w-[120px] lg:w-[300px] text-[10px] lg:text-[12px] leading-10 tracking-widest">
              Read Article Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
