"use client";
import React, {useState} from 'react';
import {motion } from 'framer-motion';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import {
    Tooltip,
    TooltipTrigger,
    TooltipContent,
    TooltipProvider

 } from '@/components/ui/tooltip';
 import Link from 'next/link';
import Image from 'next/image';
import WorkSliderBtns from '@/components/WorkSliderBtns';

const projects=[
  {
    num: "01",
    category:"Front",
    title:"Project 1",
    description:"La description du project en question",
    stack:[
      {name:"HTML5"},
      {name:"CSS3"},
      {name:"JavaScript"}
    ],
    image:"/assets/images/proj1.png",
    live:"",
    github:""
  },
  {
    num: "02",
    category:"Front",
    title:"Project 2",
    description:"La description du project en question",
    stack:[
      {name:"HTML5"},
      {name:"CSS3"},
      {name:"JavaScript"}
    ],
    image:"/assets/images/proj2.png",
    live:"",
    github:""
  },
  {
    num: "03",
    category:"Front",
    title:"Project 3",
    description:"La description du project en question",
    stack:[
      {name:"HTML5"},
      {name:"CSS3"},
      {name:"JavaScript"}
    ],
    image:"/assets/images/proj3.png",
    live:"",
    github:""
  },
  {
    num: "04",
    category:"Front",
    title:"Project 4",
    description:"La description du project en question",
    stack:[
      {name:"HTML5"},
      {name:"CSS3"},
      {name:"JavaScript"}
    ],
    image:"/assets/images/proj4.png",
    live:"",
    github:""
  }
]
 


const Work=()=>{
  const [Projects,setProject]=useState(projects[0]);
  const handleSlideChange=(swiper)=>{
    // get the current slide index
    const currentIndex=swiper.activeIndex;
    // get the current project
    const currentProject=projects[currentIndex];
    // set the current project  
    setProject(currentProject);
  }
    return(
        <motion.section 
            initial={{opacity:0}}
            animate={{opacity:1}}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0 ">
           <div className="container mx-auto">
              <div className='flex flex-col xl:flex-row xl:gap-[30px] '>
                  <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none' >
                    <div className='flex flex-col gap-[10px] h-[50%] '>
                        {/* outline number */}
                        <div className="text-8xl leading-none font-extrabold text-transparent text-outline ">
                          {Projects.num} 
                        </div>
                        {/* Project category */}
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                          {Projects.category}-Project
                        </h2>
                        {/* project description */}
                        <p className='text-white/60 text-lg mt-4'>
                          {Projects.description}
                        </p>
                        {/* project stacks */}
                        <ul  className='flex gap-4'>
                          {Projects.stack.map((stack,index)=>(
                            <li key={index} className='text-xl text-accent '>
                              {stack.name}
                              {index<Projects.stack.length-1 && <span className=''> /</span>}
                            </li>
                          ))}
                        </ul>
                        {/* border */}
                        <div className='w-80 h-1 bg-accent mt-8'></div>
                        {/* project links */}
                        <div className='flex items-center gap-4 mt-8'>
                          {/* Live projet button */}
                          <Link href={Projects.live}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ' >
                                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <span>Project en Ligne</span>
                                      </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                          </Link>
                          {/* github project button */}
                          <Link href={Projects.github}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ' >
                                        <BsGithub className='text-white text-3xl group-hover:text-accent' />
                                      </TooltipTrigger>
                                      <TooltipContent>
                                        <span>Code Source sur Github</span>
                                      </TooltipContent>
                                  </Tooltip>
                                </TooltipProvider>
                          </Link>
                        </div>
                    </div>
                  </div>
                  <div className='w-full xl:w-[50%]'>
                      <Swiper spaceBetween={30} slidesPerView={1} className='xl:h-[520px] mb-12' onSlideChange={handleSlideChange}>
                          {projects.map((project,index)=>(
                            <SwiperSlide key={index} className='w-full'>
                              <div className='h-[460px] relative group flex justify-center bg-pink-50/20'>
                                  {/* overlay */}
                                  <div className='absolute top-0 bottom-0 w-full h-full bg-pink-50/20 z-10 '></div>
                                  {/* <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10'></div> */}
                                  <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10'></div>
                                  {/* image */}
                                  <div className='relative w-full h-full'>
                                    <Image src={project.image} layout='fill' objectFit='cover' className='rounded-lg object-cover' alt='image du projet' />
                                  </div>
                              </div>
                               
                            </SwiperSlide>
                          )) }
                         {/* SwiperSlide Button */}
                         <WorkSliderBtns/>
                
                      </Swiper>
                  </div>
              </div>
           </div>
        </motion.section>
    )
}
export default Work;