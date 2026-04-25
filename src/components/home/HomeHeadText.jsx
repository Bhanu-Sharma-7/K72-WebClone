import React from 'react'
import Video from './Video'

const HomeHeadText = () => {
    return (
        <div className='font-[font1] pt-10 text-center px-4'>
            <div className='text-[10vw] md:text-[9vw] flex justify-center items-center uppercase leading-[10vw] md:leading-[8vw]' >
                The spark for
            </div>
            <div className='text-[10vw] md:text-[9vw] flex justify-center items-start uppercase leading-[10vw] md:leading-[8vw]' >
                all
                <div className='h-[8vw] md:h-[7vw] w-[20vw] md:w-[16vw] rounded-full overflow-hidden mx-2'>
                    <Video />
                </div>
                things
            </div>
            <div className='text-[10vw] md:text-[9vw] flex justify-center items-center uppercase leading-[10vw] md:leading-[8vw]' >
                creative
            </div>
        </div>
    )
}

export default HomeHeadText
