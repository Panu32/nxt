import React from 'react'
import Link from 'next/link'
import { Spotlight } from './ui/Spotlight'

function HeroSection() {
  return (
    <div
    className='h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0'
    >  
      <div className='p-4 relative z-10 w-full text-center'>
         <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
        <h1 className='text-white'>Master the art of Music</h1>
        <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo sunt fugiat necessitatibus praesentium vero explicabo quam mollitia minima? Labore quaerat laboriosam temporibus aut atque? Optio adipisci expedita ea accusamus dolore!</p>
        <div className="mt-4">
            <Link href={"/courses"}>
               Explore courses
            </Link>
        </div>

         
      </div>
     
    
    </div>
  )
}

export default HeroSection