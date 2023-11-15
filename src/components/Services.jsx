import React from 'react';
import { DesktopSectionTop, desktopBottomSection, flowingConversation, growTogether, mobileBottomSection, mobileTopSection, yourUsers, desktopSection2Bottombg, desktopSection2Topbg, mobileSection2bottombg, mobileSection2Topbg } from '../assets';

const Services = () => {
  return (
    <div className='w-full xl:max-w-[1400px] overflow-hidden my-8 sm:my-16 flex flex-col items-center z-[1]'>
      {/* item one */}
      <div className='w-full mt-10 '>
        <img src={DesktopSectionTop} alt="DesktopSectionTop" className='hidden sm:block z-0 w-full'/>
        <img src={mobileTopSection} alt="mobileTopSection" className=' block sm:hidden z-0 w-full'/>

        <div className='w-full py-10 flex flex-col-reverse sm:flex-row bg-[#F6FBFF] px-6 sm:px-12 gap-y-4 justify-between'>
          <div className='flex flex-col items-center sm:items-start gap-y-4 mt-2 sm:mt-45'>
            <h1 className='text-center sm:text-left'>Grow Together</h1>
            <p className='max-w-[400px] text-center sm:text-left'>
              Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.
            </p>
          </div>

          <div className='w-full sm:w-[50vw]'>
            <img src={growTogether} alt="growTogether" />
          </div>
          </div>

        <img src={mobileBottomSection} alt="mobileTopSection" className='  block sm:hidden z-0 w-full'/>
        <img src={desktopBottomSection} alt="mobileTopSection" className='  hidden sm:block z-0 w-full'/>
        
      </div>

      {/* item 2 */}
      <div className='w-full  mt-10' >
        <div className='w-full py-10 flex flex-col-reverse sm:flex-row-reverse px-6 sm:px-12 gap-y-4 justify-between'>
          <div className='flex flex-col items-center sm:items-start gap-y-4 mt-2 sm:mt-45'>
            <h1 className='text-center sm:text-left'>Flowing Conversations</h1>
            <p className='max-w-[400px] text-center sm:text-left'>
              You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.
            </p>
          </div>

          <div className='w-full sm:w-[50vw]'>
            <img src={flowingConversation} alt="flowingConversation" />
          </div>
        </div>
      </div>

      {/* item 3 */}
      <div className='w-full mt-10'>
        <img src={desktopSection2Topbg} alt="DesktopSectionTop" className='hidden sm:block z-0 w-full'/>
        <img src={mobileSection2Topbg} alt="mobileTopSection" className=' block sm:hidden z-0 w-full'/>
          <div className='w-full py-10 flex flex-col-reverse sm:flex-row bg-[#F6FBFF] px-6 sm:px-12 gap-y-4 justify-between'>
          <div className='flex flex-col items-center sm:items-start gap-y-4 mt-2 sm:mt-45'>
            <h1 className='text-center sm:text-left'>Your Users</h1>
            <p className='max-w-[400px] text-center sm:text-left'>
              It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.
            </p>
          </div>

          <div className='w-full sm:w-[50vw]'>
            <img src={yourUsers} alt="yourUsers" />
          </div>
          </div>
        <img src={mobileSection2bottombg} alt="mobileTopSection" className='  block sm:hidden z-0 w-full'/>
        <img src={desktopSection2Bottombg} alt="mobileTopSection" className='  hidden sm:block z-0 w-full'/>
      </div>
    </div>
  )
}

export default Services;