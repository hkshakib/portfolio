import { AiOutlineFire } from 'react-icons/ai';

function Achivement({Text}) {
  return (
    <div className='flex flex-wrap justify-start items-center gap-1 lg:gap-2 mb-[10px]'>
        <h2 className='flex gap-1 items-center text-[14px] lg:text-[18px] font-mono text-[#090E34]'>
          <AiOutlineFire className='text-red-700 text-[25px]'/> {Text} 
        </h2>
    </div>
  )
}

export default Achivement;