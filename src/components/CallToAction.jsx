import React from 'react';
import { MainButton } from './utils/Buttons';

const CallToAction = () => {
  return (
    <div className='flex flex-col items-center gap-y-4'>
      <h1 className='text-center'>Ready to Build Your Community</h1>
      <MainButton
      text="get started for free"
      />
      
    </div>
  )
}

export default CallToAction;