"use client";
import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import { FiDownload, FiArrowRight, FiCode, FiCpu, FiDatabase } from "react-icons/fi";
import { motion } from "framer-motion";

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const specialties = [
    { icon: FiCpu, text: "Intelligence Artificielle" },
    { icon: FiCode, text: "Développement Software" },
    { icon: FiDatabase, text: "Data Science" }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fond avec gradient animé */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Contenu textuel */}
          <motion.div
            className="flex-1 text-center lg:text-left space-y-8"
            variants={itemVariants}
          >
            {/* Badge professionnel */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-accent">Disponible pour de nouveaux projets</span>
            </motion.div>

            {/* Titre principal */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
                Salut 👋, je suis
                <br />
                <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  TRAORE Souleymane
                </span>
              </h1>
              <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto lg:mx-0"></div>
            </motion.div>

            {/* Spécialités */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              variants={itemVariants}
            >
              {specialties.map((specialty, index) => (
                <div
                  key={index}
                  className="flex items-center px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg hover:border-accent/30 transition-colors"
                >
                  <specialty.icon className="w-4 h-4 text-accent mr-2" />
                  <span className="text-sm text-white/90">{specialty.text}</span>
                </div>
              ))}
            </motion.div>

            {/* Description */}
            <motion.p
              className="max-w-2xl text-lg text-white/80 leading-relaxed"
              variants={itemVariants}
            >
              Passionné par l'intelligence artificielle et ses applications innovantes, je conçois
              des solutions digitales performantes qui allient{" "}
              <span className="text-accent font-medium">robustesse technique</span> et{" "}
              <span className="text-accent font-medium">élégance design</span>.
              Mon expertise couvre l'ensemble du cycle de développement, de la conception
              à la mise en production.
            </motion.p>

            {/* Boutons d'action */}
            <motion.div
              className="flex flex-col sm:flex-row items-center gap-4"
              variants={itemVariants}
            >
              <a href="/resume/TRAORE_CV_VF.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="group bg-accent hover:bg-accent/90 text-primary font-semibold px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent/20"
                >
                  <FiDownload className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Télécharger mon CV
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="group border-accent/30 text-accent hover:bg-accent/10 px-8 py-6 rounded-xl transition-all duration-300"
              >
                Voir mes projets
                <FiArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div variants={itemVariants}>
              <div className="flex justify-center lg:justify-start">
                <Socials
                  containerStyles="flex gap-4"
                  iconStyles="w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl flex justify-center items-center text-accent text-lg hover:bg-accent hover:text-primary hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-accent/20"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Photo avec effets */}
          <motion.div
            className="flex-shrink-0"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Cercles décoratifs */}
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-transparent rounded-full blur-xl animate-pulse"></div>
              <div className="absolute -inset-8 border border-accent/20 rounded-full animate-spin-slow"></div>

              {/* Photo principale */}
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <Photo />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Section statistiques */}
      <motion.div
        className="relative z-10 mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Stats />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
      </motion.div>
    </section>
  );
};

export default Home;