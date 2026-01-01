import React from 'react'

const FullScreenNav = () => {
  return (
    <div id='fullScreenNav' className='text-white h-screen py-50 w-full absolute bg-amber-700'>
      <div id='all-links'>
        <div className='link relative border-y-1 border-white'>
          <h1 className='font-[font2] text-[8vw] leading-[0.8] text-center pt-3 uppercase'>Work</h1>
          <div className='moveLink absolute flex text-black bg-[#D3FD50] top-0'>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center pt-3 uppercase'>See everything</h2>
              <img className='h-28 w-70 shrink-0 object-cover rounded-full' src="/images/img-1.png" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center pt-3 uppercase'>See everything</h2>
              <img className='h-28 w-70 shrink-0 object-cover rounded-full' src="/images/img-2.jpg" alt="" />
            </div>
            <div className='moveX flex items-center'>
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center pt-3 uppercase'>See everything</h2>
              <img className='h-28 w-70 shrink-0 object-cover rounded-full' src="/images/img-1.png" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-[8vw] leading-[0.8] text-center pt-3 uppercase'>See everything</h2>
              <img className='h-28 w-70 shrink-0 object-cover rounded-full' src="/images/img-2.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FullScreenNav
