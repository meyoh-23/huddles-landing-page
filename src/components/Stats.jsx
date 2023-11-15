import React from 'react';
import { communitiesIcon, messageIcon, screenMockup } from '../assets';

const Stats = () => {
  return (
    <div className='w-full lg:max-w-[1400px] flex flex-col my-6 md:my-16'>
      <div className='w-full lg:max-w-[1400px] px-6 md:px-16'>
        <img src={screenMockup} alt="mockups"  className='mx-auto'/>
      </div>
      <div className='w-full lg:max-w-[1400px] px-6 md:px-16 flex flex-col sm:flex-row items-center justify-between gap-y-6 sm:gap-y-16'>
        <div className='flex flex-col items-center sm:items-start'>
          <img src={communitiesIcon} alt="community" />
          <h1>1.4K+</h1>
          <p className='stats__message'>Communities Formed</p>
        </div>
        <div className='flex flex-col items-center sm:items-start'>
          <img src={messageIcon} alt="messages" />
          <h1>2.7m+</h1>
          <p className='stats__message'>Messages sent</p>
        </div>
      </div>
    </div>
  )
}

export default Stats;