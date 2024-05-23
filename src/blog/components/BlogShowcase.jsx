import blogs from '../DummyData';

const BlogShowcase = () => {
  return (
    <div className='flex h-[100vh] p-10 font-modefor flex-wrap justify-around gap-16'>
      {blogs.map(blog => (
        <div key={blog.id} className='flex flex-col border border-gray-400 h-[80vh] w-[400px]'>
          <div className='flex h-[45%]'>
            <img src={blog.photo} className='flex bg-cover flex-1' alt="" />
          </div>
          <div className='flex p-4 text-[12px] text-gray-500 h-[10%] justify-between'>
            <div className='flex flex-col'>
              <span>{blog.author}</span>
              <span>{blog.date}</span>
            </div>
            <div className='flex flex-col'>
              <span>{blog.category}</span>
            </div>
          </div>
          <div className='flex text-[28px] italic p-4 h-[20%] break-words'>
            {blog.title}
          </div>
          <div className='flex p-4 h-[15%]'>
            {blog.content} 
          </div>
          <div className='border-b border-gray-400 p-4 h-[5%] w-[90%] ml-auto mr-auto'></div>
        </div>
      ))}
    </div>
  )
}

export default BlogShowcase;
