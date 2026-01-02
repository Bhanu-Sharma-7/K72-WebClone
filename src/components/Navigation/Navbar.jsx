import { useContext, useRef } from 'react'
import { NavbarContext } from '../../context/NavContext'

const Navbar = () => {

    const navGreenRef = useRef(null)
    const [navOpen, setNavOpen] = useContext(NavbarContext)
    return (
        <div className='z-4 flex fixed top-0 w-full items-start justify-between'>
            <div className='p-4'>
                <div className='w-36'>
                    <img src="/svgs/NavbarIcon.svg" className='w-36' alt="" />
                </div>
            </div>
            <div
                onClick={() => {
                    setNavOpen(true)
                }}
                onMouseEnter={() => {
                    navGreenRef.current.style.height = '100%'
                }}
                onMouseLeave={() => {
                    navGreenRef.current.style.height = '0%'
                }}
                className='relative bg-black  h-12   w-[16vw]'
            >
                <div ref={navGreenRef} className='bg-[#D3FD50] transition-all absolute top-0 h-0 w-full'></div>
                <div className='relative h-full flex items-end justify-center flex-col gap-1 px-10'>
                    <div className="w-15 h-0.5 bg-white"></div>
                    <div className="w-7 h-0.5 bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
