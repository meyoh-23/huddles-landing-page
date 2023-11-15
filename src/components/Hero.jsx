import React from 'react';
import { MainButton, PrimaryButton } from './utils/Buttons';
import { logo } from '../assets';

const Hero = () => {
  return (
    <div className='flex flex-col w-full xl:max-w-[1400px] gap-y-8 md:gap-y-16'>
      <div className='w-full xl:ma-w-[1400px] flex justify-between px-6 md:px-12 items-center'>
        <a href="#">
          <img src={logo} alt="huddle" className='w-[120px] h-[20px]'/>
        </a>
        <PrimaryButton
        text="try it for free"
        />
      </div>

      <div className='w-full xl:ma-w-[1400px] flex flex-col gap-y-4'>
      <h1 className='text-center'>
        Build the Community your Fans will love
      </h1>
      <p className='text-center max-w-[490px] mx-auto'>
        Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.
      </p>
      <div className='mx-auto'>
        <MainButton 
          text="get started for Free"
        />
      </div>
      </div>
    </div>
  )
}

export default Hero;