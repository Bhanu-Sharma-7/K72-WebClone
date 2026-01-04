import React from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

const Projects = () => {

  const projects = [{
    image1: '/images/project-1-image.png',
    image2: '/images/project-2-image.jpg',
  },
  {
    image1: '/images/project-3-image.jpg',
    image2: '/images/project-4-image.jpg',
  },
  {
    image1: '/images/project-5-image.jpg',
    image2: '/images/project-6-image.jpg',
  },
  {
    image1: '/images/project-7-image.jpg',
    image2: '/images/project-8-image.jpg',
  },
  {
    image1: '/images/project-9-image.jpg',
    image2: '/images/project-10-image.jpg',
  },
  {
    image1: '/images/project-11-image.jpg',
    image2: '/images/project-12-image.jpg',
  },
  {
    image1: '/images/project-13-image.jpg',
    image2: '/images/project-14-image.jpg',
  },
  {
    image1: '/images/project-15-image.jpg',
    image2: '/images/project-16-image.jpg',
  },
  ]
  gsap.registerPlugin(ScrollTrigger)
  useGSAP(function() {
    gsap.from('.hero', {
      height: '100px',
      stagger:{
        amount: 1
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 100%',
        end: 'bottom -450%',
        scrub: true,
      }
    })
  })
  return (
    <div className='p-4'>
      <div className='pt-[45vh]'>
        <h2 className="font-[font2] text-[10vw] top-[8.5vw] uppercase">Projets</h2>
      </div>
      <div className='-mt-20 lol'>
        {
          projects.map(function (elem, idx) {
            return <div key={ idx } className='hero w-full h-[700px] mb-4 flex gap-4'>
              <ProjectCard image1={elem.image1} image2={elem.image2} />
            </div>
          })
        }
      </div>
    </div>
  )
}

export default Projects
