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
    category:"IA & Web",
    title:"Plateforme de Génération de Recettes Intelligentes par IA",
    description:"Ce projet consiste en la conception et le développement d'une plateforme web innovante qui intègre un modèle d'intelligence artificielle (IA) pour générer des recettes personnalisées en fonction des ingrédients disponibles dans le réfrigérateur de l'utilisateur. L'objectif est de simplifier la préparation des repas tout en réduisant le gaspillage alimentaire.",
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
    category:"IA & Mobile",
    title:"Application Mobile de Prédiction Agricole et Diagnostic des Plantes par IA",
    description:"Ce projet vise à développer une application mobile innovante qui aide les agriculteurs à optimiser leurs rendements agricoles et à détecter précocement les maladies des plantes grâce à l'intelligence artificielle (IA). L'objectif est de fournir un outil accessible et efficace pour améliorer la productivité agricole tout en réduisant les pertes liées aux maladies.",
    stack:[
      {name:"Flet"},
      {name:"TensorFlow"},
      {name:"Python"},
      {name:"Flask"},
      {name:"Scikit-learn"},
      {name:"Postman"}

    ],
    image:"/assets/images/proj2.png",
    live:"",
    github:""
  },
  {
    num: "03",
    category:"Full Stack web",
    title:"Dévelopment d'un blog pour la boite Pro Htech",
    description:"Le projet consiste à concevoir et développer un blog moderne et interactif pour PRO Htech, une entreprise spécialisée dans les solutions technologiques innovantes. Ce blog servira de plateforme pour partager des articles, des tutoriels, des actualités et des études de cas liés aux technologies, aux tendances du secteur et aux services proposés par PRO Htech. L'objectif est de renforcer la visibilité de l'entreprise, d'établir son autorité dans le domaine et d'engager une communauté active. Le blog sera responsive, optimisé pour le référencement (SEO) et intégrera des fonctionnalités telles que des commentaires, un système de recherche avancée et des partages sur les réseaux sociaux. Une interface d'administration intuitive permettra à l'équipe de PRO Htech de publier et de gérer facilement du contenu.",
    stack:[
      {name:"HTML5&CSS"},
      {name:"MySQL"},
      {name:"JavaScript"},
      {name:"PHP"},
    ],
    image:"/assets/images/proj3.png",
    live:"",
    github:""
  },
  {
    num: "04",
    category:"Full Stack web",
    title:"Development d'un porfilio",
    description:"Ce projet vise à créer un portfolio professionnel et esthétique pour mettre en valeur les compétences, les réalisations et les projets d'un individu ou d'une entreprise. Le portfolio sera conçu pour offrir une expérience utilisateur fluide et intuitive, mettant en avant les travaux réalisés à travers des sections dédiées (projets, compétences, à propos, contact). Il sera entièrement responsive, s'adaptant à tous les appareils (desktop, tablette, mobile), et intègrera des animations modernes pour un rendu visuel attractif. L'objectif est de fournir une vitrine digitale qui reflète la créativité, l'expertise et la personnalité du propriétaire, tout en facilitant la prise de contact pour des opportunités professionnelles. Des fonctionnalités supplémentaires, comme un blog intégré ou un système de filtrage des projets, pourront être ajoutées selon les besoins",
    stack:[
      {name:"Next.js"},
      {name:"Tailwind CSS"},
      {name:"Framer Motion"},
      {name:"Vercel"}

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
                        <div className="font-extrabold leading-none text-transparent text-8xl text-outline ">
                          {Projects.num} 
                        </div>
                        {/* Project category */}
                        <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                          {Projects.category}
                        </h2>
                        {/* project description */}
                        <p className='mt-4 text-lg text-white/60'>
                          {Projects.description}
                        </p>
                        {/* project stacks */}
                        <ul  className='flex gap-4'>
                          {Projects.stack.map((stack,index)=>(
                            <li key={index} className='text-xl text-accent '>
                              {stack.name}
                              {/* {index<Projects.stack.length-1 && <span className=''> /</span>} */}
                            </li>
                          ))}
                        </ul>
                        {/* border */}
                        <div className='h-1 mt-8 w-80 bg-accent'></div>
                        {/* project links */}
                        <div className='flex items-center gap-4 mt-8'>
                          {/* Live projet button */}
                          <Link href={Projects.live}>
                                <TooltipProvider delayDuration={100}>
                                  <Tooltip>
                                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group ' >
                                        <BsArrowUpRight className='text-3xl text-white group-hover:text-accent' />
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
                                        <BsGithub className='text-3xl text-white group-hover:text-accent' />
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
                                  <div className='absolute top-0 bottom-0 z-10 w-full h-full bg-pink-50/20 '></div>
                                  {/* <div className='absolute inset-0 z-10 bg-gradient-to-r from-black/80 to-transparent'></div> */}
                                  <div className='absolute inset-0 z-10 bg-gradient-to-b from-transparent to-black/80'></div>
                                  {/* image */}
                                  <div className='relative w-full h-full'>
                                    <Image src={project.image} layout='fill' objectFit='cover' className='object-cover rounded-lg' alt='image du projet' />
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