import React from 'react';
import { bgFooterDesktop, emailIcon, mobileFooterTopPattern, phoneIcon } from '../assets';
import ContactForm from './utils/ContactForm';

const Footer = () => {
  return (
    <div className='w-full xl:max-w-[1400px] relative mt-10'>
      <img src={mobileFooterTopPattern} alt="mobileFooterTopPattern" className='block w-full sm:hidden absolute left-[0] bottom-[99%]'/>
      <img src={bgFooterDesktop} alt="bgFooterDesktop" className='hidden sm:block w-full  absolute bottom-[99%] left-0 z-[-10]'/>
      <div className='w-full  bg-[#00252E]'>
        <div className='flex flex-col sm:flex-row justify-between py-20 my-0 px-6 sm:px-12'>
          <div className='flex flex-col items-start gap-y-6'>
            <div>white Icon herer</div>
            <p className="text-white max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem. 
            </p>
            <div className='flex flex-col items-start gap-y-4'>
              <div className='flex flex-row justify-between gap-6'>
                <img src={phoneIcon} alt="phone" className='w-[30px] h-[30px]' />
                <p className='text-white'>+1-543-123-4567</p>
              </div>
              <div className='flex flex-row justify-between gap-6'>
                <img src={emailIcon} alt="email" className='w-[30px] h-[30px]'/>
                <p className='text-white'>example@huddle.com</p>
              </div>
            </div>
            <div className='flex justify-between text-white'>
              icons
            </div>
          </div>

          <div className='flex flex-col items-start'>
            <h1 className='text-white'>NEWSLETTER</h1>
            <p className='text-white max-w-[400px]'>
              To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address
            </p>
            <ContactForm/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;