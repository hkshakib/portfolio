
const OnlineJudge = ({Name, Designation, RatingsOrMaxStreak, Text, Problems, Handle, Url, PhotoUrl}) => {
  return (
    <div className='flex flex-1 flex-col'>
            <div className='flex justify-center items-center'>
                <img className='h-[50px] w-[50px] lg:h-[100px] lg:w-[100px]' src={PhotoUrl} alt="" />
                <h1 className='lg:ml-[10px] lg:pt-[30px] text-[20px] lg:text-[30px] font-mono'>
                 {Name}
               </h1>
            </div>

            <div className='flex justify-around items-center pt-10 pr-2 pl-2 lg:pl-0 lg:pr-0 '>
                <div className='flex flex-col items-center bg-white h-[100px] w-[150px] rounded-lg border'>
                    <h1 className='uppercse font-mono lg:text-[16px] text-[12px] mb-[10px] lg:p-2 p-2'>{Designation}</h1>
                    <h2 className='text-[10px] lg:text-[12px] font-mono text-[#4E4FEB] p-2'>{Text} {RatingsOrMaxStreak}</h2>
                </div>
                <div className='flex flex-col items-center bg-white h-[100px] w-[150px] rounded-lg border ml-2 lg:ml-0'>
                    <h1 className='uppercse font-mono lg:text-[16px] text-[12px] mb-[10px] lg:p-2 p-2'>Total Solved</h1>
                    <h2 className='text-[10px] lg:text-[12px] font-mono text-[#4E4FEB] p-2'>{Problems} Problems</h2>
                </div>
            </div>

            <div className='flex flex-1 lg:flex-0 justify-center items-end p-4'>
                <button className='flex justify-center items-center border w-[100px] h-[30px] bg-blue-800 rounded-md text-white'>
                    <a className='text-[12px]' href={Url}>{Handle}</a>
                </button>
            </div>
        </div>
  )
}

export default OnlineJudge;