"use client";
import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { FiCode, FiSmartphone, FiCpu, FiMonitor, FiSettings, FiBookOpen, FiArrowUpRight, FiChevronDown, FiChevronUp } from "react-icons/fi";

const services = [
  {
    num: '01',
    title: "Développement Web Full Stack",
    shortDesc: "Applications web performantes et scalables avec les technologies modernes",
    description: "Développeur Full Stack polyvalent, je maîtrise l'ensemble du cycle de développement web, de la conception front-end à la mise en œuvre back-end, en passant par la gestion des bases de données et le déploiement. Grâce à une expertise approfondie dans les technologies modernes (HTML5, CSS3, JavaScript, React, Node.js, Python, Django, etc.), je crée des applications web performantes, scalables et sécurisées, offrant une expérience utilisateur fluide et intuitive.",
    icon: FiCode,
    technologies: ["React", "Node.js", "Python", "Django", "PostgreSQL"],
    href: "/#",
  },
  {
    num: '02',
    title: "Développement Mobile",
    shortDesc: "Applications mobiles natives et cross-platform pour iOS et Android",
    description: "Développeur mobile expérimenté, je conçois et réalise des applications mobiles performantes, intuitives et adaptées aux besoins des utilisateurs sur les plateformes iOS et Android. Grâce à ma maîtrise des frameworks cross-platform (Flutter, React Native), je crée des solutions innovantes qui allient design élégant, fonctionnalités riches et expérience utilisateur optimale.",
    icon: FiSmartphone,
    technologies: ["Flutter", "React Native", "iOS", "Android", "Firebase"],
    href: "/#",
  },
  {
    num: '03',
    title: "IA/DataScience/ML",
    shortDesc: "Solutions intelligentes et modèles prédictifs pour transformer vos données",
    description: "Ingénieur en Intelligence Artificielle, Data Science et Machine Learning, je transforme les données en insights stratégiques et en solutions intelligentes pour répondre aux défis complexes des entreprises. Grâce à ma maîtrise des algorithmes avancés, des outils de traitement de données (Python, SQL) et des frameworks de ML (TensorFlow, PyTorch, Scikit-learn), je conçois des modèles prédictifs, des systèmes de recommandation et des solutions d'automatisation.",
    icon: FiCpu,
    technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "SQL"],
    href: "/#",
  },
  {
    num: '04',
    title: "Développement Desktop",
    shortDesc: "Applications desktop robustes et multiplateformes",
    description: "Spécialiste en développement d'applications desktop, je conçois et implémente des solutions logicielles robustes, performantes et intuitives pour répondre aux besoins spécifiques des utilisateurs. Fort de mon expertise dans les langages de programmation tels que Java, Python et C++, ainsi que dans l'utilisation de frameworks comme Tkinter, .NET et Qt, je crée des applications multiplateformes ou natives.",
    icon: FiMonitor,
    technologies: ["Java", "Python", "C++", "Qt", ".NET"],
    href: "/#",
  },
  {
    num: '05',
    title: "Génie Industriel/Usine 4.0",
    shortDesc: "Digitalisation et optimisation des processus industriels",
    description: "Ingénieur en Génie Industriel avec une spécialisation avancée dans la digitalisation et la numérisation des processus industriels, je maîtrise les technologies clés de l'Usine 4.0 pour optimiser la performance opérationnelle, accroître la productivité et réduire les coûts. Fort de mon expérience dans l'intégration de solutions IoT, de systèmes cyber-physiques, de Big Data et d'IA.",
    icon: FiSettings,
    technologies: ["IoT", "Big Data", "Systèmes cyber-physiques", "Automatisation", "Industrie 4.0"],
    href: "/#",
  },
  {
    num: '06',
    title: "Formation en Technologies",
    shortDesc: "Programmes de formation sur mesure en technologies de l'information",
    description: "Formateur expérimenté en Technologies de l'Information, je conçois et anime des programmes de formation sur mesure pour accompagner les professionnels dans l'acquisition de compétences techniques et pratiques essentielles. Mon approche pédagogique, alliant théorie et pratique, favorise l'engagement et la montée en compétence rapide des participants.",
    icon: FiBookOpen,
    technologies: ["Pédagogie", "Développement web", "IA", "Bases de données", "Méthodologies agiles"],
    href: "/#",
  },
];

const ServiceCard = ({ service, index, isExpanded, toggleExpand }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10"
    >
      {/* Gradient overlay au hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="w-14 h-14 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
              <service.icon className="w-7 h-7 text-accent" />
            </div>
            <div className="text-6xl font-black text-white/10 group-hover:text-accent/20 transition-colors duration-500">
              {service.num}
            </div>
          </div>

          <button
            onClick={toggleExpand}
            className="w-12 h-12 bg-white/5 hover:bg-accent/10 border border-white/10 hover:border-accent/30 rounded-xl flex items-center justify-center transition-all duration-300 group/btn"
          >
            <FiArrowUpRight className="w-5 h-5 text-accent group-hover/btn:rotate-45 transition-transform duration-300" />
          </button>
        </div>

        {/* Titre */}
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>

        {/* Description courte */}
        <p className="text-white/70 leading-relaxed mb-6">
          {service.shortDesc}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {service.technologies.slice(0, 3).map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-lg border border-accent/20"
            >
              {tech}
            </span>
          ))}
          {service.technologies.length > 3 && (
            <span className="px-3 py-1 bg-white/5 text-white/60 text-sm rounded-lg border border-white/10">
              +{service.technologies.length - 3} autres
            </span>
          )}
        </div>

        {/* Description complète (expandable) */}
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="pt-4 border-t border-white/10">
            <p className="text-white/60 text-sm leading-relaxed mb-4">
              {service.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-accent font-semibold text-sm">Technologies maîtrisées :</h4>
              <div className="flex flex-wrap gap-2">
                {service.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-accent/5 text-accent text-xs rounded border border-accent/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Toggle button */}
        <button
          onClick={toggleExpand}
          className="flex items-center space-x-2 text-accent hover:text-accent/80 text-sm mt-4 transition-colors duration-200"
        >
          <span>{isExpanded ? "Voir moins" : "En savoir plus"}</span>
          {isExpanded ? (
            <FiChevronUp className="w-4 h-4" />
          ) : (
            <FiChevronDown className="w-4 h-4" />
          )}
        </button>

        {/* Ligne de séparation */}
        <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Fond avec effets */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* En-tête */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            variants={headerVariants}
          >
            <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium text-accent">Mes Services</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Solutions
            <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
              {" "}Digitales
            </span>
          </h1>

          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            De la conception à la mise en production, je vous accompagne dans tous vos projets
            technologiques avec une expertise complète et une approche innovante.
          </p>

          <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto mt-8"></div>
        </motion.div>

        {/* Grid des services */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              service={service}
              index={index}
              isExpanded={expandedCards[index]}
              toggleExpand={() => toggleCard(index)}
            />
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 border border-accent/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto">
              Discutons de vos besoins et trouvons ensemble la solution technologique
              parfaitement adaptée à vos objectifs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-4 bg-accent text-white rounded-xl hover:bg-accent/80 transition-colors duration-300">
                <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent/20">
                  Demander un devis
                </button>
              </Link>
              <Link href="/work" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-xl border border-white/10 hover:border-accent/30 transition-colors duration-300">
                <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-accent font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent/20">
                  Voir mes réalisations
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;