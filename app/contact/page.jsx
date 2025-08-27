"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { FiPhone, FiMail, FiMapPin, FiSend, FiCheckCircle, FiCpu, FiCode, FiDatabase, FiUsers, FiGlobe } from 'react-icons/fi';
import { motion } from 'framer-motion';
import Link from 'next/link';

const contactInfo = [
  {
    icon: <FiPhone />,
    title: 'Téléphone',
    info: '(+212) 06 19 94 48 95',
    description: 'Disponible 24H/24'
  },
  {
    icon: <FiMail />,
    title: 'Email',
    info: 'souleymanetraore.2026@gmail.com',
    description: 'Réponse sous H24'
  },
  {
    icon: <FiMapPin />,
    title: 'Localisation',
    info: 'Casablanca, Maroc',
    description: 'Disponible à distance'
  }
];

const services = [
  { value: "web", label: "Développement Web", icon: <FiGlobe /> },
  { value: "mobile", label: "Développement Mobile", icon: <FiCode /> },
  { value: "ia", label: "Data Science & IA", icon: <FiCpu /> },
  { value: "gi", label: "Ingénierie Industrielle", icon: <FiDatabase /> },
  { value: "formations", label: "Formations en Ligne", icon: <FiUsers /> }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value) => {
    setFormData(prev => ({
      ...prev,
      service: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsLoading(false);
    setIsSubmitted(true);

    // Reset après 3 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        prenom: '',
        nom: '',
        email: '',
        telephone: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Fond avec gradient animé - même style que la page d'accueil */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto"
        >
          {/* Header Section */}
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            {/* Badge professionnel */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
              variants={itemVariants}
            >
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-accent">Toujours disponible pour répondre</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Restons en{" "}
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                Contact
              </span>
            </h1>
            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Transformons vos idées en solutions digitales innovantes.
              Discutons de votre projet et créons quelque chose d'extraordinaire ensemble.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 items-start">
            {/* Contact Information */}
            <motion.div
              className="lg:col-span-1"
              variants={itemVariants}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-8">Informations de Contact</h3>

                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <motion.div
                      key={index}
                      className="group"
                      variants={itemVariants}
                    >
                      <div className="flex items-start gap-4 p-4 rounded-2xl transition-all duration-300 hover:bg-accent/10">
                        <div className="flex-shrink-0 w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300">
                          <div className="text-accent text-xl group-hover:scale-110 transition-transform">
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="text-sm font-semibold text-accent/70 uppercase tracking-wider mb-1">
                            {item.title}
                          </h4>
                          <p className="text-lg font-semibold text-white mb-1">
                            {item.info}
                          </p>
                          <p className="text-sm text-white/60">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Quick Stats */}
                <motion.div
                  className="mt-8 pt-8 border-t border-white/10"
                  variants={itemVariants}
                >
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                      <div className="text-2xl font-bold text-accent">H24</div>
                      <div className="text-sm text-white/60">Temps de réponse</div>
                    </div>
                    <div className="bg-accent/10 rounded-xl p-4 border border-accent/20">
                      <div className="text-2xl font-bold text-accent">100%</div>
                      <div className="text-sm text-white/60">Satisfaction client</div>
                    </div>
                  </div>
                </motion.div>

                {/* Spécialités */}
                <motion.div
                  className="mt-8"
                  variants={itemVariants}
                >
                  <h4 className="text-lg font-semibold text-white mb-4">Mes spécialités</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <FiCpu className="w-4 h-4 text-accent" />
                      <span className="text-sm text-white/80">Intelligence Artificielle</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <FiCode className="w-4 h-4 text-accent" />
                      <span className="text-sm text-white/80">Développement Software</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                      <FiDatabase className="w-4 h-4 text-accent" />
                      <span className="text-sm text-white/80">Data Science</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2"
              variants={itemVariants}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
                {isSubmitted ? (
                  <motion.div
                    className="p-12 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-accent/20 rounded-full mb-6">
                      <FiCheckCircle className="w-10 h-10 text-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">Message envoyé avec succès ! 🎉</h3>
                    <p className="text-white/70">Merci pour votre message. Je vous répondrai dans les plus brefs délais.</p>
                  </motion.div>
                ) : (
                  <div className="p-8 md:p-12">
                    <div className="mb-8">
                      <h3 className="text-2xl font-bold text-white mb-3">
                        Démarrons votre projet
                      </h3>
                      <p className="text-white/70">
                        Remplissez ce formulaire et recevez une réponse personnalisée sous 24h.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Prénom *</label>
                        <Input
                          type="text"
                          name="prenom"
                          value={formData.prenom}
                          onChange={handleInputChange}
                          placeholder="Votre prénom"
                          className="h-12 bg-white/5 border-white/20 rounded-xl text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Nom *</label>
                        <Input
                          type="text"
                          name="nom"
                          value={formData.nom}
                          onChange={handleInputChange}
                          placeholder="Votre nom"
                          className="h-12 bg-white/5 border-white/20 rounded-xl text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/50"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Email *</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="votre.email@exemple.com"
                          className="h-12 bg-white/5 border-white/20 rounded-xl text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/50"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">Téléphone</label>
                        <Input
                          type="tel"
                          name="telephone"
                          value={formData.telephone}
                          onChange={handleInputChange}
                          placeholder="+212 6 XX XX XX XX"
                          className="h-12 bg-white/5 border-white/20 rounded-xl text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/50"
                        />
                      </div>
                    </div>

                    <div className="mb-6">
                      <label className="text-sm font-medium text-white/80 block mb-2">Service souhaité *</label>
                      <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger className="h-12 bg-white/5 border-white/20 rounded-xl text-white focus:border-accent focus:ring-accent/50">
                          <SelectValue placeholder="Sélectionnez un service" className="text-white/50" />
                        </SelectTrigger>
                        <SelectContent className="bg-primary border-white/20 rounded-xl">
                          <SelectGroup>
                            <SelectLabel className="text-white/70 font-medium">Mes Services</SelectLabel>
                            {services.map((service) => (
                              <SelectItem
                                key={service.value}
                                value={service.value}
                                className="text-white hover:bg-accent/20 rounded-lg focus:bg-accent/20"
                              >
                                <div className="flex items-center gap-2">
                                  <span className="text-accent">{service.icon}</span>
                                  <span>{service.label}</span>
                                </div>
                              </SelectItem>
                            ))}
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mb-8">
                      <label className="text-sm font-medium text-white/80 block mb-2">Message *</label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Décrivez votre projet, vos besoins, et vos objectifs..."
                        className="min-h-[150px] bg-white/5 border-white/20 rounded-xl text-white placeholder:text-white/50 focus:border-accent focus:ring-accent/50 resize-none"
                        required
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      disabled={isLoading}
                      className="group w-full h-14 bg-accent hover:bg-accent/90 text-primary rounded-xl font-semibold text-lg shadow-lg hover:shadow-accent/20 transition-all duration-300 disabled:opacity-50"
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                          Envoi en cours...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <FiSend className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          Envoyer le message
                        </div>
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div
            className="mt-16 text-center bg-accent/10 border border-accent/20 rounded-3xl p-12 backdrop-blur-sm"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Prêt à commencer ?</h2>
            <p className="text-xl text-white/70 mb-8 max-w-2xl mx-auto">
              Chaque grand projet commence par une simple conversation.
              Contactez-moi aujourd'hui et donnons vie à vos idées.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/work" className="px-8 py-4 bg-accent hover:bg-accent/90 text-primary font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-accent/20">
                <Button
                  size="lg"
                  className="group bg-accent hover:bg-accent/90 text-primary px-8 py-6 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-accent/20"
                >
                  Voir mes projets
                </Button>

              </Link>
              <Button
                variant="outline"
                size="lg"
                className="group border-accent/30 text-accent hover:bg-accent/10 px-8 py-6 rounded-xl transition-all duration-300"
              >
                <a href="/resume/Cv_Pro_2025_version_pdf_Fr_1.0.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  Télécharger CV
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;