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
import KerasIcon from '@/components/icons/Keras';
import MatplotlibIcon from '@/components/icons/Matplotlib';
import SeabornIcon from '@/components/icons/Seaborn';
import PandasIcon from '@/components/icons/Pandas';
import TensorFlowIcon from '@/components/icons/Tensorflow';
import ScipyIcon from '@/components/icons/Scipy';
import DjangoIcon from '@/components/icons/Django';
import FlaskIcon from '@/components/icons/Flask';
import SqlIcon from '@/components/icons/SQL';

// import {
//   SitTailwindcss, SiNextdotjs
// } from 'react-icons/si';

import React from 'react'


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
  description: "Avec plusieurs années d'expérience professionnelle dans le domaine des technologies de l'information, j'ai eu l'opportunité de travailler sur des projets variés et stimulants, allant du développement d'applications web et mobiles à la mise en œuvre de solutions d'intelligence artificielle et de data science. Mon parcours m'a permis d'acquérir une expertise technique solide tout en développant des compétences transversales en gestion de projet, collaboration d'équipe et résolution de problèmes complexes. Chaque expérience a renforcé ma capacité à m'adapter rapidement aux nouveaux environnements, à comprendre les besoins métier et à proposer des solutions innovantes et efficaces ",
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
// Certif IA/DS
const certifications = {
  title: 'Mes Certifications en IA/Data Science',
  items: [
    {
      title: "Deep Learning: De Zéro à la Certification Tensorflow",
      institution: "Udemy",
      duration: "ID: UC-4168169f-2a6c4e-2e-838f-5d7b1735278f",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Construire les modèles non supervisés",
      institution: "CentraleSupélec",
      duration: "ID: 4942497317",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Explorez les données avec des modèles Non Superivés",
      institution: "CentraleSupélec",
      duration: "ID: 1704755782",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Requetez une base de données avec SQL",
      institution: "OpenClassrom",
      duration: "ID: 4378300745",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Analysez les données textuelles",
      institution: "CentraleSupélec",
      duration: "ID: 6455606015",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Evaluez les performances d'un modèle ML",
      institution: "CentraleSupélec",
      duration: "ID: 2712019692",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Netoyage et Analyse des données",
      institution: "OpenClassroom",
      duration: "ID: 7246317626",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Initiation aux modèles de Deep Learning",
      institution: "Openclassroom",
      duration: "ID: 9983515599",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Analysez et Modelisez les series temporelles",
      institution: "OpenClassroom",
      duration: "ID: 2918328515",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Machine Learning Methods for Beginners",
      institution: "MindLuster",
      duration: "ID: 17123050655",
      image:"/images/certification"  //Photo de la certif
    },
  
  ]

}
// Certif Web
const certifWeb = {
  title: 'Mes Certifications en Developpement Web',
  items: [
    {
      title: "MERN Stack",
      institution: "Udemy",
      duration: "ID: UC-a39b23ff-7137-4f3b-8d6c-acca9f12d85c",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "React&Next.js: From beginner to Pro",
      institution: "Udemy",
      duration: "ID: UC-67162148-b95e-41ef-b21a-2bd64d1cde73",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Developpement Web Full Stack A à Z",
      institution: "Udemy",
      duration: "ID: UC-9fde37a0-1dbc-4ca6-868b-a542ea48543a",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Adoptez les APIs REST pour les projets web",
      institution: "OpenClassroom",
      duration: "ID: 7078712727",
      image:"/images/certification"  //Photo de la certif
    },
  ]

}
// Certif Programming
const certifProgramming = {
  title: 'Mes Certifications en Informatique Générale',
  items: [
    {
      title: "Decouvrez le fonctionnement des algorithmes",
      institution: "OpenClassroom",
      duration: "ID: 7239562413",
      image:"/images/certification"  //Photo de la certif
    },

    {
      title: "Ecrire du code Python maintenable",
      institution: "OpenClassroom",
      duration: "ID: 4465378927",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Gerz du code avec Git et GitHub",
      institution: "OpenClassroom",
      duration: "ID: 2286640726",
      image:"/images/certification"  //Photo de la certif
    },
    {
      title: "Testez vos projet Python",
      institution: "OpenClassroom",
      duration: "ID: 1607277454",
      image:"/images/certification"  //Photo de la certif
    },
  ]

}

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
  title: "Mes compétences Techniques",
  description: "Doté d'un solide bagage technique et d'une expertise polyvalente, je maîtrise un large éventail de technologies et d'outils pour répondre aux défis complexes des projets modernes. Que ce soit en développement web, mobile, desktop, en intelligence artificielle, en data science ou en gestion de bases de données, je combine une approche méthodique et une passion pour l'innovation pour livrer des solutions performantes et adaptées aux besoins métier. Mon expérience couvre l'ensemble du cycle de vie des projets, de la conception à la mise en production, en passant par l'optimisation et la maintenance. En constante veille technologique, je m'efforce de rester à la pointe des dernières tendances pour proposer des solutions innovantes et durables.",
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
    {
      icon:<KerasIcon/>,
      name: "Keras",
    },
    {
      icon:<MatplotlibIcon/>,
      name: "Matplotlib",
    },
    {
      icon:<SiTailwindcss/>,
      name: "Tailwind CSS",
    },
    {
      icon:<SiNextdotjs/>,
      name: "Next.js",
    },
    {
      icon:<SeabornIcon/>,
      name: "Seaborn",
    },
    {
      icon:<PandasIcon/>,
      name: "Pandas",
    },
    {
      icon:<TensorFlowIcon/>,
      name: "Tensorflow",
    },
    {
      icon:<ScipyIcon/>,
      name: "Scipy",
    },
    {
      icon:<DjangoIcon/>,
      name: "Django",
    },
    {
      icon:<FlaskIcon/>,
      name: "Flask",
    },
    {
      icon:<SqlIcon/>,
      name: "SQL",
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
            <TabsTrigger value="certifications">Certifications</TabsTrigger>
            <TabsTrigger value="about">A Propos</TabsTrigger>
          </TabsList>
          {/* Content pour afficher contenus du Tabs */}
          <div className='min-h-[70vh] w-full '>
            {/* Experience */}
              <TabsContent value="experience" className="w-full">
                  <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                    <h3 className='text-4xl font-bold '>{experience.title} </h3>
                    {/* <span className="flex items-center justify-center">
                          <img src={experience.icon} alt="Experience Icon" className="w-20 h-20" />
                    </span> */}

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
                  <div className='h-[20px]' ></div>
              </TabsContent>
              {/* Education */}
              <TabsContent value="education" className="w-full">
              <div className='flex flex-col gap-[30px] text-center xl:text-left '>
                    <h3 className='text-4xl font-bold '>{education.title} </h3>
                    {/* <span className="flex items-center justify-center">
                          <img src={education.icon} alt="education Icon" className="w-20 h-20" />
                    </span> */}
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

              </TabsContent>
              {/* certifications */}
              <TabsContent value="certifications" className="w-full">
                <div className='flex flex-col gap-[30px] ' >
                    <h3 className='text-4xl font-bold' >{certifications.title} </h3>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] ' >
                      {certifications.items.map((certif,index) =>{
                        return (
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ' >
                            <span className='text-accent' >{certif.duration} </span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ' >{certif.title} </h3>
                            <div className='flex items-center gap-3' >
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent' > </span>
                              <p className='text-white/60' >{certif.institution} </p>
                            </div>
                          </li>

                        )
                      })}
                    </ul>
                    <div className='h-[20px]'></div>
                  </div>
                  <div className='h-[50px]' ></div>
                  {/* Certif web */}
                  <div className='flex flex-col gap-[30px] ' >
                    <h3 className='text-4xl font-bold' >{certifWeb.title} </h3>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] ' >
                      {certifWeb.items.map((certif,index) =>{
                        return (
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ' >
                            <span className='text-accent' >{certif.duration} </span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ' >{certif.title} </h3>
                            <div className='flex items-center gap-3' >
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent' > </span>
                              <p className='text-white/60' >{certif.institution} </p>
                            </div>
                          </li>

                        )
                      })}
                    </ul>
                    <div className='h-[20px]'></div>
                  </div>
                  {/* Certif Informatique generale */}
                  <div className='flex flex-col gap-[30px] ' >
                    <h3 className='text-4xl font-bold' >{certifProgramming.title} </h3>
                    <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px] ' >
                      {certifProgramming.items.map((certif,index) =>{
                        return (
                          <li key={index} className='bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ' >
                            <span className='text-accent' >{certif.duration} </span>
                            <h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left ' >{certif.title} </h3>
                            <div className='flex items-center gap-3' >
                              {/* dot */}
                              <span className='w-[6px] h-[6px] rounded-full bg-accent' > </span>
                              <p className='text-white/60' >{certif.institution} </p>
                            </div>
                          </li>

                        )
                      })}
                    </ul>
                    <div className='h-[20px]'></div>
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