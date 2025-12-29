import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomTaxt = () => {
    return (
        <div className='font-[font2] flex items-center justify-center gap-8'>
            <div className='border-5 h-35 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-10 border-white rounded-full uppercase'>
                <Link className='text-[6vw] mt-3' to="/projects">Projects</Link>
            </div>
            <div className='border-5 h-35 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center px-10 border-white rounded-full uppercase'>
                <Link className='text-[6vw] mt-3' to="/agence" >Agence</Link>
            </div>
        </div>
    )
}

export default HomeBottomTaxt
