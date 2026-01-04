import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'

const FullScreenNav = () => {
  const fullNavLinksRef = useRef(null)
    const fullScreenRef = useRef(null)

  const [navOpen, setNavOpen] = useContext(NavbarContext)

  function gsapAnimation() {
    const tl = gsap.timeline()
    tl.to('.fullscreennav', {
      display: 'block'
    })
    tl.to('.stairing', {
      delay: 0.2,
      height: '100%',
      stagger: {
        amount: -0.3
      }
    })
    tl.to('.link', {
      opacity: 1,
      rotateX: 0,
      stagger: {
        amount: 0.3
      }
    })
    tl.to('.navlink', {
      opacity: 1
    })
  }

  function gsapAnimationReverse() {
    const tl = gsap.timeline()
    tl.to('.link', {
      opacity: 0,
      rotateX: 90,
      stagger: {
        amount: 0.1
      }
    })
    tl.to('.stairing', {
      height: 0,
      stagger: {
        amount: 0.1
      }
    })
    tl.to('.navlink', {
      opacity: 0
    })
    tl.to('.fullscreennav', {
      display: 'none',
    })
  }

  useGSAP(function () {
    if (navOpen) {

      gsapAnimation()
    } else {

      gsapAnimationReverse()

    }
  }, [navOpen])
  return (
    <div ref={fullScreenRef} id='fullScreenNav' className='text-white hidden fullscreennav h-screen w-full absolute z-50 overflow-hidden'>
      <div className='h-screen w-full fixed'>
        <div className='h-full w-full flex'>
          <div className='stairing h-full w-1/5 bg-red-900'></div>
          <div className='stairing h-full w-1/5 bg-red-900'></div>
          <div className='stairing h-full w-1/5 bg-red-900'></div>
          <div className='stairing h-full w-1/5 bg-red-900'></div>
          <div className='stairing h-full w-1/5 bg-red-900'></div>
        </div>
      </div>
      <div ref={fullNavLinksRef} className='relative'>
        <div className='navlink flex w-full justify-between lg:p-5 p-1 items-start'>
          <div className=''>
            <div className='w-30'>
              <img src="/svgs/NavbarIcon.svg" className='w-36' alt="" />
            </div>
          </div>
          <div onClick={() => {
            setNavOpen(false)
          }} className='h-32 cursor-pointer w-32 relative'>
            <div className='absolute h-44 w-1 bg-[#D3FD50] -rotate-45 origin-top'></div>
            <div className='absolute h-44 w-1 bg-[#D3FD50] right-0 rotate-45 origin-top'></div>
          </div>
        </div>
        <div className='py-20' style={{ perspective: "1000px" }}>
          <div className='link relative origin-top border-t-1 border-white'>
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
          <div className='link relative origin-top border-t-1 border-white'>
            <h1 className='font-[font2] text-[8vw] leading-[0.8] text-center pt-3 uppercase'>agency</h1>
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
          <div className='link relative origin-top border-t-1 border-white'>
            <h1 className='font-[font2] text-[8vw] leading-[0.8] text-center pt-3 uppercase'>contect</h1>
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
          <div className='link relative origin-top border-y-1 border-white'>
            <h1 className='font-[font2] text-[8vw] leading-[0.8] text-center pt-3 uppercase'>blog</h1>
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
    </div>
  )
}

export default FullScreenNav
