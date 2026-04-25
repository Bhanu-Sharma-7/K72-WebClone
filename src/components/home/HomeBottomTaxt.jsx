import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomTaxt = () => {
    return (
        <div className='font-[font2] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-10 md:mb-0'>
            <div className='border-2 md:border-5 h-20 md:h-35 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-6 md:px-10 border-white rounded-full uppercase'>
                <Link className='text-[8vw] md:text-[6vw] mt-1 md:mt-3' to="/projects">Projects</Link>
            </div>
            <div className='border-2 md:border-5 h-20 md:h-35 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-6 md:px-10 border-white rounded-full uppercase'>
                <Link className='text-[8vw] md:text-[6vw] mt-1 md:mt-3' to="/agence" >Agence</Link>
            </div>
        </div>
    )
}

export default HomeBottomTaxt
