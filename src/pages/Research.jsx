import React from 'react';
import ResearchComponent from '../components/ResearchComponent';

const Research = () => {
  return (
    <div className='flex flex-col justify-center'>

    <div className='flex justify-center text-[35px] lg:text-[56px] font-mono mb-[20px]'>
      <h1>Research</h1>
    </div>

    <div className='flex flex-wrap gap-8 lg:p-12 justify-center'>
        <ResearchComponent
            Title={"Prosody-Controlled Text-To-Speech"}
        />
    </div>

  </div>
  )
}

export default Research;