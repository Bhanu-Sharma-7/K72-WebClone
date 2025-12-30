import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  const imageArray = [
    '/images/agence-img-1.jpg',
    '/images/agence-img-2.jpg',
    '/images/agence-img-3.jpg',
    '/images/agence-img-4.jpg',
    '/images/agence-img-5.jpg',
    '/images/agence-img-6.jpg',
    '/images/agence-img-7.jpg',
    '/images/agence-img-8.jpg'
  ]

  useGSAP(function () {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 10%',
        end: 'top -120%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          console.log(imageRef.current.src = imageArray[imageIndex])
        }
      }
    })
  })
  return (
    <div className="parent">
      <div id='page1' className='py-1'>
        <div ref={imageDivRef} className='absolute h-[20vw] w-[15vw] overflow-hidden rounded-3xl top-60 left-[30vw]'>
          <img ref={imageRef} className='h-full w-full object-cover' src="/images/agence-img-1.jpg" alt="agence-img-1" />
        </div>
        <div className='relative font-[font2]'>
          <div className='mt-[53vh]'>
            <h1 className='text-[20vw] leading-[18vw] text-center uppercase'>SEVEN7Y <br /> TWO</h1>
          </div>
          <div className='pl-[40%] mt-20'>
            <p className='text-6xl indent-80'>We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
          </div>
        </div>
      </div>
      <div id="page2" className="h-screen">

      </div>
    </div>
  )
}

export default Agence
