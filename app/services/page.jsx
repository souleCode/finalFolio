"use client";
import { motion } from 'framer-motion';
import { Link } from 'lucide-react';
import {BsArrowReturnRight, BsArrowDownRight } from "react-icons/bs";


const services=[
  {
    num:'01',
    title:"Développement web full stack",
    description:"Développeur Full Stack polyvalent, je maîtrise l'ensemble du cycle de développement web, de la conception front-end à la mise en œuvre back-end, en passant par la gestion des bases de données et le déploiement. Grâce à une expertise approfondie dans les technologies modernes (HTML5, CSS3, JavaScript, React, Node.js, Python, Django, etc.), je crée des applications web performantes, scalables et sécurisées, offrant une expérience utilisateur fluide et intuitive. Mon approche méthodique, allant de l'analyse des besoins à la maintenance post-déploiement, garantit des solutions sur mesure, alignées sur les objectifs métier et les attentes des utilisateurs. Passionné par les dernières tendances technologiques, je m'efforce de proposer des architectures robustes et innovantes pour répondre aux défis complexes du web moderne.",
    href:"/#",
  },
  {
    num:'02',
    title:"Développement Mobile",
    description:"Développeur mobile expérimenté, je conçois et réalise des applications mobiles performantes, intuitives et adaptées aux besoins des utilisateurs sur les plateformes iOS et Android. Grâce à ma maîtrise des frameworks cross-platform (Flutter, React Native), je crée des solutions innovantes qui allient design élégant, fonctionnalités riches et expérience utilisateur optimale. Mon expertise couvre l'ensemble du cycle de développement, de l'idéation à la publication sur les stores, en passant par l'intégration d'API, la gestion des bases de données et l'optimisation des performances. Passionné par les nouvelles technologies et les tendances du mobile, je m'engage à livrer des applications robustes, sécurisées et évolutives pour répondre aux attentes des utilisateurs et aux objectifs métier.",
    href:"/#",
  },
  {
    num:'03',
    title:"IA/DataScience/ML",
    description:"Ingénieur en Intelligence Artificielle, Data Science et Machine Learning, je transforme les données en insights stratégiques et en solutions intelligentes pour répondre aux défis complexes des entreprises. Grâce à ma maîtrise des algorithmes avancés, des outils de traitement de données (Python, SQL) et des frameworks de ML (TensorFlow, PyTorch, Scikit-learn), je conçois des modèles prédictifs, des systèmes de recommandation et des solutions d'automatisation qui optimisent les processus et créent de la valeur. Mon expérience couvre l'ensemble du cycle de vie des projets IA, de la collecte et du nettoyage des données à la mise en production et au monitoring des modèles. Passionné par l'innovation et les technologies émergentes, je m'efforce de repousser les limites de l'analyse prédictive et de l'apprentissage automatique pour offrir des avantages compétitifs à mes clients.",
    href:"/#",
  },
  
  {
    num:'04',
    title:"Développement Desktop",
    description:"Spécialiste en développement d'applications desktop, je conçois et implémente des solutions logicielles robustes, performantes et intuitives pour répondre aux besoins spécifiques des utilisateurs. Fort de mon expertise dans les langages de programmation tels que  Java, Python et C++, ainsi que dans l'utilisation de frameworks comme Tkinter, .NET et Qt, je crée des applications multiplateformes ou natives qui allient fonctionnalité, ergonomie et sécurité. Mon approche méthodique, allant de l'analyse des besoins à la maintenance post-déploiement, garantit des produits finaux de haute qualité, adaptés aux exigences techniques et métier. Passionné par l'innovation et les bonnes pratiques de développement, je m'engage à fournir des solutions durables et évolutives pour accompagner la croissance des entreprises.",
    href:"/#",
  },
  {
    num:'05',
    title:"Genie Industriel/Numerisation Industrielle/Usine 4.0",
    description:"Ingénieur en Génie Industriel avec une spécialisation avancée dans la digitalisation et la numérisation des processus industriels, je maîtrise les technologies clés de l'Usine 4.0 pour optimiser la performance opérationnelle, accroître la productivité et réduire les coûts. Fort de mon expérience dans l'intégration de solutions IoT, de systèmes cyber-physiques, de Big Data et d'IA, je transforme les environnements industriels traditionnels en écosystèmes connectés et intelligents. Ma capacité à piloter des projets complexes, à modéliser des flux de production et à implémenter des outils de gestion numérique me permet de garantir une transition fluide vers l'industrie du futur. Passionné par l'innovation et les défis technologiques, je suis déterminé à apporter une valeur ajoutée tangible en alignant les objectifs stratégiques avec les avancées technologiques pour une compétitivité accrue sur le marché.",
    href:"/#",
  },
  {
    num:'06',
    title:"Formateur en Technologies de l'Information",
    description:"Formateur expérimenté en Technologies de l'Information, je conçois et anime des programmes de formation sur mesure pour accompagner les professionnels dans l'acquisition de compétences techniques et pratiques essentielles. Grâce à une expertise solide dans des domaines variés (développement web, bases de données, IA, etc.), je transmets des connaissances claires et accessibles, adaptées aux besoins des apprenants et aux exigences du marché. Mon approche pédagogique, alliant théorie et pratique, favorise l'engagement et la montée en compétence rapide des participants. Passionné par l'innovation et la transmission du savoir, je m'engage à former les équipes aux technologies émergentes et aux bonnes pratiques, pour renforcer leur productivité et leur compétitivité.",
    href:"/#",
  },
]

const Services = () => {
  return (
    <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0 '>
      <div className="container mx-auto">
        <motion.div
          initial={{ 
            opacity:0
           }}
          animate={{ 
            opacity:1,
            transition:{
              delay:2.4,
              duration:0.4,
              ease: 'easeIn'
            }
           }}
           className='grid grid-cols-1 md:grid-cols-2 gap-[60px] '
        >
          {services.map((item,index)=>{
            return <div key={index} className='flex flex-col justify-center flex-1 gap-6 group'>
              {/* top*/ }
              <div className='flex items-center justify-between w-full'>
                <div className='text-5xl font-extrabold transition-all duration-500 text-outline group-hover:text-outline-hover'>{item.num}</div>
                <Link href={item.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45 ' >
                <BsArrowReturnRight />
                </Link>
              </div>
              {/* title*/ }
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 '>{item.title} </h2>
              {/* description*/ }
              <p className='text-white/60'>{item.description} </p>
              <div className='w-full border-b border-white/20'></div>
            </div>
          })}
        </motion.div>
      </div>
      <div className='h-[50px]' ></div>
    </section>
  )
}

export default Services