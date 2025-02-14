"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaSql,
  FaFlask,
} from 'react-icons/fa';
// import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
// import { FaDatabase as FaSql } from 'react-icons/fa'; // Si vous avez renommé une icône
import {SiTailwindcss, SiNextdotjs } from 'react-icons/si';

// import {
//   SitTailwindcss, SiNextdotjs
// } from 'react-icons/si';

import React from 'react'
import { Description } from '@radix-ui/react-dialog';

//about
const about={
  title:"A Propos de Moi",
  Description: "Je suis un Ingénieur IA/Data Science & Software En Formation à ENSAM-Meknès, motivé et passionné par l'utilisation de IA dans l'industrie. Par ailleurs, j'exerce également dans le domaine du développement web avec des technologies d'actualité. Cela fait de moi un atout polyvalent et précieux pour toute équipe.",
  info:[
    {
      fieldName:"Nom:",
      fieldValue:"Souleymane TRAORE",
    },
    {
      fieldName:"Pays d'origine:",
      fieldValue:"Burkina Faso",
    },
    {
      fieldName:"Adresse:",
      fieldValue:"Maroc/Meknes/Marjane2",
    },
    {
      fieldName:"Email:",
      fieldValue:"souleymanetraore.2026@gmail.com",
    },
  
    {
      fieldName:"Langues:",
      fieldValue:"Francais, Anglais",
    },
    {
      fieldName:"Collaboration:",
      fieldValue:"Disponible",
    },
  ]

};

const experience = {
  icon: '/assets/images/experience.png',
  title: 'Mon experience',
  description: "Développement web full stack ",
  items: [
    {
      company: "CodSoft",
      position: "Stagiaire-Full stack",
      duration: "Septembre-Octobre 2023",
    },
    {
      company: "Technocolabs Software Inc.",
      position: "Stagiaire-IA/Data Science",
      duration: "Juillet-Octobre 2024",
    },
    {
      company: "LMS Invention",
      position: "Developpeur web",
      duration: "2023-Présent",
    },
    {
      company: "Pro Htech Start Up",
      position: "Formateur/Developpeur web",
      duration: "2022-Présent",
    },
  ],
};

const education = {
  icon: '/assets/images/educ.png',
  title: 'Mon Parcours de Formation',
  description: "Ayant obtenu mon Bac à l'âge de 17 ans et etant passionnée de l'Informatique et ses Applications, je decide donc de continuer mes Etudes Superieures dans Une Grande Ecole. De ce fait j'ai obtenu une Bourse d'etude vers le Maroc ou je suis inscrit a l'Ecole Nationale Superieure Arts&Metiers de Meknes qui est une grande Ecole d'Ingenieur au Maroc. Après les années ppreparatoires Integrées j'ai choisi donc Genie Industriel Option IA/Data Science.",
  items: [
    {
      institution: "Collège Protestant de Ouagadougou (Burkina Faso)",
      degree: "Diplome du Baccalaureat serie D",
      duration: "Octobre 2019-Juillet 2021",
    },
    {
      institution: "Ecole Nationale Superieur Arts&Metiers de Meknès (Maroc) ",
      degree: "02 Années Préparatoires pour l'ingénierie",
      duration: "Octobre 2021-Juillet 2023",
    },
    {
      institution: "Ecole Nationale Superieur Arts&Metiers de Meknès (Maroc) ",
      degree: "03 Années de Specialisation GI-IA/DS",
      duration: "septembre 2023-Présent",
    },
    {
      institution: "Africa Tech Up Tour 2024",
      degree: "Formation Ingenieur IA/Data Science",
      duration: "Mars 2024-Aout 2024 (En ligne) ",
    },
  ],
};
const skills={
  title: "Mes compétences Techniques en Développement Web/Mobile",
  description: "Descriptionde mes competences techniques",
  skillist: [
    {
      icon:<FaHtml5/>,
      name: "html 5",
    },
    {
      icon:<FaCss3/>,
      name: "Css3",
    },
    {
      icon:<FaJs/>,
      name: "JavaScript",
    },
    {
      icon:<FaReact/>,
      name: "React.js",
    },
    {
      icon:<FaNodeJs/>,
      name: "NodeJs",
    },
    {
      icon:<FaPython/>,
      name: "Python",
    },
    // {
    //   icon:<FaSql/>,
    //   name: "Database SQL",
    // },
    // {
    //   icon:<FaFlask/>,
    //   name: "Flask API",
    // },
    {
      icon:<SiTailwindcss/>,
      name: "Tailwind CSS",
    },
    {
      icon:<SiNextdotjs/>,
      name: "Next.js",
    },
  ]
}
// A ajouter des skills et leurs icons
const skillsdataia={
  title: "Mes compétences Techniques Data/IA",
  description: "Descriptionde mes competences techniques",
  skillist: [
    {
      icon:<FaHtml5/>,
      name: "html 5",
    },
    {
      icon:<FaCss3/>,
      name: "Css3",
    },
    {
      icon:<FaJs/>,
      name: "JavaScript",
    },
    {
      icon:<FaReact/>,
      name: "React.js",
    },
    {
      icon:<FaNodeJs/>,
      name: "NodeJs",
    },
    {
      icon:<FaPython/>,
      name: "Python",
    },
    // {
    //   icon:<FaSql/>,
    //   name: "Database SQL",
    // },
    // {
    //   icon:<FaFlask/>,
    //   name: "Flask API",
    // },
    {
      icon:<SiTailwindcss/>,
      name: "Tailwind CSS",
    },
    {
      icon:<SiNextdotjs/>,
      name: "Next.js",
    },
  ]
}

import {Tabs, TabsContent,TabsList,TabsTrigger} from '@/components/ui/tabs';
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from '@/components/ui/tooltip';
import  {ScrollArea} from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
    initial={{ opacity:0 }} 
    animate={{ 
      opacity:1,
      transition:{delay:2.4,duration:0.4,ease:'easeIn'} 
  }} 
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0 "
    >
      <div className="container mx-auto">
        <Tabs defaultValue='experience' className='flex flex-col xl:flex-row gap-[60px] '>
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:max-0 gap-6 ">
            <TabsTrigger value="experience">Expérience</TabsTrigger>
            <TabsTrigger value="education">Formation</TabsTrigger>
            <TabsTrigger value="skills">Compétences</TabsTrigger>
            <TabsTrigger value="about">A Propos</TabsTrigger>
          </TabsList>
          {/* Content pour afficher contenus du Tabs */}
          <div className='min-h-[70vh] w-full '>
            {/* Experience */}
              <TabsContent value="experience" className="w-full">
                  <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                    <h3 className='text-4xl font-bold '>{experience.title} </h3>
                    <span className="flex items-center justify-center">
                          <img src={experience.icon} alt="Experience Icon" className="w-20 h-20" />
                    </span>

                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{experience.description} </p>
                    <ScrollArea className="h-[400px] ">
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                        {experience.items.map((item,index)=>{
                          return (<li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                            <span className='text-accent'>{item.duration} </span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ' >{item.position} </h3>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent ' > </span>
                              <p className='text-white/60'>{item.company} </p>

                            </div>
                          </li>)
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
              </TabsContent>
              {/* Education */}
              <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                    <h3 className='text-4xl font-bold '>{education.title} </h3>
                    <span className="flex items-center justify-center">
                          <img src={education.icon} alt="education Icon" className="w-20 h-20" />
                    </span>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{education.description} </p>
                    <ScrollArea className="h-[400px] ">
                      <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] '>
                        {education.items.map((item,index)=>{
                          return (<li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 '>
                            <span className='text-accent'>{item.duration} </span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ' >{item.degree} </h3>
                            <div className='flex items-center gap-3'>
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent ' > </span>
                              <p className='text-white/60'>{item.institution} </p>

                            </div>
                          </li>)
                        })}
                      </ul>
                    </ScrollArea>
                  </div>
              </TabsContent>
              {/* skills */}
              <TabsContent value="skills" className="w-full h-full">
              <div className='flex flex-col gap-[30px] ' >
                    <div className='flex flex-col gap-[30px] text-center xl:text-left ' >
                    <h3 className='text-4xl font-bold' >{skills.title} </h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 ' >{skills.description} </p>
                    </div>
                    <ul className='grid gap-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] ' >
                      {skills.skillist.map((skill,index) =>{
                        return (
                          <li key ={index} >
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ' >
                                  <div className='text-6xl transition-all duration-300 group-hover:text-accent ' >{skill.icon} </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p className='capitalize'>{skill.name} </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                    </ul>
                </div>
                      <div className='h-[100px] '></div>
                {/* Data/AI Skills */}

                <div className='flex flex-col gap-[30px] ' >
                    <div className='flex flex-col gap-[30px] text-center xl:text-left ' >
                    <h3 className='text-4xl font-bold' >{skillsdataia.title} </h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 ' >{skills.description} </p>
                    </div>
                    <ul className='grid gap-[30px] grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] ' >
                      {skills.skillist.map((skill,index) =>{
                        return (
                          <li key ={index} >
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group ' >
                                  <div className='text-6xl transition-all duration-300 group-hover:text-accent ' >{skill.icon} </div>
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>{skill.name} </p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </li>
                        )
                      })}
                    </ul>
                </div>
              </TabsContent>

              {/* about */}
              <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className='flex flex-col gap-[30px] '>
                    <h3 className='text-4xl font-bold '>{about.title} </h3>
                    <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 '>{about.Description} </p>
                      <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 '>
                        {about.info.map((info,index) =>{
                          return(
                            <li key={index} className='flex items-center justify-center gap-4 xl:justify-start ' >
                              <span className='text-white/60 '>{info.fieldName} </span>
                              <span className='text-xl '>{info.fieldValue} </span>
                            </li>
                          )
                        })}
                      </ul>
                  </div>
              </TabsContent>
          </div>
        </Tabs>

      </div>
    </motion.div>
  )
}
export default Resume;