"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  BsArrowUpRight,
  BsGithub,
  BsEye,
  BsCode,
  BsCalendar,
  BsTag,
  BsChevronLeft,
  BsChevronRight
} from 'react-icons/bs';
import {
  FiExternalLink,
  FiGithub,
  FiCode,
  FiUsers,
  FiClock,
  FiFilter,
  FiGrid,
  FiList
} from 'react-icons/fi';
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from '@/components/ui/tooltip';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    num: "01",
    category: "IA & Web",
    title: "CorrecteurPro : Plateforme de Correction Orthographique et Grammaticale Avancée",
    shortDescription: "Correction automatique, puissante et contextuelle du français, propulsée par l'Intelligence Artificielle.",
    description: "CorrecteurPro est une plateforme web sophistiquée qui utilise un modèle de traitement du langage naturel (NLP/LLM) de pointe pour détecter et corriger les fautes d'orthographe, de grammaire, de ponctuation et de typographie dans les textes français. Bien plus qu'un simple correcteur, notre IA analyse le contexte des phrases pour résoudre les ambiguïtés (comme les homophones 'a/ à', 'ou / où', 'ces / ses / c'est/s'est') et suggérer des améliorations stylistiques pour une expression plus claire et professionnelle. L'objectif est d'offrir une aide indispensable aux rédacteurs, étudiants, professionnels et à tous ceux qui souhaitent communiquer en français sans faute.",
    features: ["IA Generative", "Correcteur grammatical", "correction orthographique", "Utilisation facile", "Interface intuitive", "Francais correct"],
    stack: [
      { name: "ViteJS", color: "#E34F26" },
      { name: "Tailwind CSS", color: "#1572B6" },
      { name: "Python/FastAPI", color: "#F7DF1E" },
      { name: "Groq", color: "#FF6F00" }
    ],
    image: "/assets/images/app_correcteurrpro.png",
    status: "Terminé",
    duration: "02 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["IA", "Web", "Innovation"]
  },
  {
    num: "02",
    category: "IA & Web",
    title: "PropulseAI : Plateforme de Détection Proactive du Churn Client pour les Télécoms",
    shortDescription: "Identifiez les clients à risque de résiliation avec une IA prédictive pour agir avant qu'il ne soit trop tard.",
    description: "Ce projet consiste en la conception et le développement d'une plateforme analytique qui utilise l'Intelligence Artificielle et le Machine Learning pour prédire avec précision la probabilité qu'un client d'un opérateur télécoms (téléphonie, internet) résilie son abonnement. En analysant l'historique des clients, leur comportement d'usage, les réclamations et les données contractuelles, le modèle identifie les signaux faibles du ``churn``. L'objectif est de fournir aux équipes marketing et commerciales des alertes actionnables pour mettre en place des actions de rétention ciblées et personnalisées, réduisant ainsi le taux de désabonnement et préservant le chiffre d'affaires.",
    features: ["Data Analysis", "Data Science", "Machine Learning", "MLOps(Docker/MLflow)", "FastAPI", "Streamlit"],
    stack: [
      { name: "Ploty", color: "#E34F26" },
      { name: "Streamlit", color: "#1572B6" },
      { name: "MLOps", color: "#F7DF1E" },
      { name: "Data Science", color: "#FF6F00" }
    ],
    image: "/assets/images/project_churn_predict.png",
    status: "Terminé",
    duration: "03 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["IA", "Web", "Innovation"]
  },
  {
    num: "03",
    category: "IA & Web",
    title: "FraudShieldAI : Système Intelligent de Détection de Fraude aux Transactions Bancaires",
    shortDescription: "Détection en temps réel des transactions frauduleuses grâce à une IA predictive qui sécurise les clients et réduit les pertes financières.",
    description: "Ce projet consiste en la conception et le développement d'une plateforme de sécurité financière de pointe qui utilise l'Intelligence Artificielle et le Machine Learning pour analyser les transactions bancaires en temps réel et identifier instantanément les comportements suspects et les opérations frauduleuses. Le système apprend continuellement des modèles de dépenses normaux de chaque client et détecte les anomalies subtiles qui échappent aux règles statiques traditionnelles. L'objectif est de protéger les institutions financières et leurs clients contre la fraude tout en minimisant les faux positifs qui nuisent à l'expérience utilisateur.",
    features: ["IA Predictive", "Dashboard intuitif", "Gestion des transactions", "Alertes en temps réel"],
    stack: [
      { name: "Machine Learning", color: "#E34F26" },
      { name: "FastAPI", color: "#1572B6" },
      { name: "Faker", color: "#F7DF1E" },
      { name: "MLOps", color: "#FF6F00" },
      { name: "Dash(Python)", color: "#1572B6" }
    ],
    image: "/assets/images/app_detection_fraude.png",
    status: "Terminé",
    duration: "03 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["IA", "Web", "Securité Bancaire"]
  },
  {
    num: "04",
    category: "IA & Web",
    title: "Plateforme de Génération de Recettes Intelligentes",
    shortDescription: "Génération automatique de recettes personnalisées avec IA",
    description: "Ce projet consiste en la conception et le développement d'une plateforme web innovante qui intègre un modèle d'intelligence artificielle (IA) pour générer des recettes personnalisées en fonction des ingrédients disponibles dans le réfrigérateur de l'utilisateur. L'objectif est de simplifier la préparation des repas tout en réduisant le gaspillage alimentaire.",
    features: ["IA de génération", "Interface intuitive", "Gestion d'ingrédients", "Recettes personnalisées"],
    stack: [
      { name: "HTML5", color: "#E34F26" },
      { name: "CSS3", color: "#1572B6" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "TensorFlow", color: "#FF6F00" }
    ],
    image: "/assets/images/proj1.png",
    status: "Terminé",
    duration: "06 mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["IA", "Web", "Innovation"]
  },
  {
    num: "05",
    category: "IA & Mobile",
    title: "Application Mobile de Prédiction Agricole",
    shortDescription: "Diagnostic des plantes et prédictions agricoles par IA",
    description: "Ce projet vise à développer une application mobile innovante qui aide les agriculteurs à optimiser leurs rendements agricoles et à détecter précocement les maladies des plantes grâce à l'intelligence artificielle (IA). L'objectif est de fournir un outil accessible et efficace pour améliorer la productivité agricole.",
    features: ["Détection de maladies", "Prédictions météo", "Conseils personnalisés", "Interface mobile"],
    stack: [
      { name: "Flet", color: "#02569B" },
      { name: "TensorFlow", color: "#FF6F00" },
      { name: "Python", color: "#3776AB" },
      { name: "Flask", color: "#000000" },
      { name: "Scikit-learn", color: "#F7931E" }
    ],
    image: "/assets/images/proj2.png",
    status: "Terminé",
    duration: "4 mois",
    team: "2 personnes",
    live: "#",
    github: "#",
    tags: ["IA", "Mobile", "Agriculture"]
  },
  {
    num: "06",
    category: "Full Stack Web",
    title: "Blog Corporate Pro Htech",
    shortDescription: "Plateforme de blog moderne et responsive",
    description: "Le projet consiste à concevoir et développer un blog moderne et interactif pour PRO Htech, une entreprise spécialisée dans les solutions technologiques innovantes. Ce blog servira de plateforme pour partager des articles, des tutoriels, des actualités et des études de cas liés aux technologies.",
    features: ["CMS intégré", "SEO optimisé", "Responsive design", "Interface admin"],
    stack: [
      { name: "HTML5 & CSS", color: "#E34F26" },
      { name: "MySQL", color: "#4479A1" },
      { name: "JavaScript", color: "#F7DF1E" },
      { name: "PHP", color: "#777BB4" }
    ],
    image: "/assets/images/proj3.png",
    status: "Livré",
    duration: "06 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["Web", "CMS", "Corporate"]
  },
  {
    num: "07",
    category: "Full Stack Web",
    title: "Portfolio Professionnel Moderne",
    shortDescription: "Vitrine digitale interactive et responsive",
    description: "Ce projet vise à créer un portfolio professionnel et esthétique pour mettre en valeur les compétences, les réalisations et les projets. Le portfolio sera conçu pour offrir une expérience utilisateur fluide et intuitive, avec des animations modernes pour un rendu visuel attractif.",
    features: ["Design moderne", "Animations fluides", "Section projets", "Contact intégré"],
    stack: [
      { name: "Next.js", color: "#000000" },
      { name: "Tailwind CSS", color: "#06B6D4" },
      { name: "Framer Motion", color: "#0055FF" },
      { name: "Vercel", color: "#000000" }
    ],
    image: "/assets/images/proj4.png",
    status: "Terminé",
    duration: "1 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["Portfolio", "Next.js", "Modern"]
  },
  {
    num: "08",
    category: "IA & Web",
    title: "PredictMaintain : Plateforme de Maintenance Prédictive par l'IA",
    shortDescription: "Anticipez les pannes industrielles et optimisez la maintenance de vos équipements grâce à l'intelligence artificielle.",
    description: "Ce projet consiste en la conception et le développement d'une plateforme IoT (Internet of Things) qui utilise l'Intelligence Artificielle et l'analyse de données temps-réel pour prédire les défaillances d'équipements industriels (use case: La Température d'un moteur). En collectant et en analysant en continu les données des capteurs (vibration, température, acoustique, pression), le modèle détecte les anomalies et estime la durée de vie utile restante (RUL - Remaining Useful Life) des actifs. L'objectif est de permettre aux équipes de maintenance d'intervenir juste à temps, de passer d'une maintenance corrective ou calendaire à une maintenance prédictive, réduisant ainsi les temps d'arrêt non planifiés, les coûts de maintenance et les risques opérationnels.",
    features: ["Analytique Avancée", "Gestion des Actifs", "IA Prédictive", "Alertes Intelligentes"],
    stack: [
      { name: "Machine Learning", color: "#E34F26" },
      { name: "Data Science/Analysis", color: "#1572B6" },
      { name: "FastAPI", color: "#F7DF1E" },
      { name: "Faker", color: "#FF6F00" },
      { name: "MLOps", color: "#FF6F00" },
      { name: "viteJS", color: "#1572B6" }
    ],
    image: "/assets/images/project_maintenance_prev_1.png",
    status: "Terminé",
    duration: "01 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["IA", "Web", "IoT"]
  },
  {
    num: "09",
    category: "IA & Web",
    title: "SmartStock : Plateforme de Gestion de Stocks Prédictive et Automatisée",
    shortDescription: "Optimisez vos niveaux de stock, réduisez les ruptures et minimisez les coûts grâce à une IA qui prédit la demande.",
    description: "Ce projet consiste en la conception et le développement d'une plateforme web intelligente qui utilise l'Intelligence Artificielle et l'analyse de données pour automatiser et optimiser la gestion des stocks. Le système analyse les ventes historiques, la saisonnalité, les tendances du marché, et même des données externes (comme la météo) pour prévoir la demande future avec précision. Il calcule automatiquement les quantités optimales à commander et les points de commande pour chaque produit. L'objectif est d'éliminer les ruptures de stock qui coûtent des ventes, de réduire le surstockage qui immobilise inutilement du capital, et ainsi d'améliorer significativement la rentabilité opérationnelle.",
    features: ["IA Prédictive", "Dashboard Centralisé", "Gestion Automatique des Seuils", "Analyse ABC & Rapports"],
    stack: [
      { name: "Machine Learning", color: "#E34F26" },
      { name: "Data", color: "#1572B6" },
      { name: "FastAPI", color: "#F7DF1E" },
      { name: "Docker", color: "#FF6F00" },
      { name: "MLflow", color: "#FF6F00" },
      { name: "ReactJs", color: "#1572B6" }
    ],
    image: "/assets/images/project_smart_stock.png",
    status: "Terminé",
    duration: "01 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["IA", "Web", "Innovation"]
  },
  {
    num: "10",
    category: "Dev Mobile",
    title: "Clone Gmail : Réplique de l'application mobile Gmail.",
    shortDescription: "Développement d'une réplique fonctionnelle de l'application mobile Gmail, reproduisant son interface utilisateur et ses interactions principales.",
    description: "Ce projet personnel consistait à recréer l'interface et l'expérience utilisateur de l'application Gmail sur mobile. L'objectif principal était de maîtriser les concepts avancés du développement mobile cross-platform avec Flutter, notamment la gestion d'état complexe, la navigation entre écrans, et la création d'interfaces fluides et fidèles. L'application intègre les écrans principaux (boîte de réception, emails, rédaction) et simule les interactions de base comme le swipe pour archiver ou supprimer un mail. Aucune vraie connexion à un service de messagerie n'a été implémentée, les données étant mockées pour se concentrer sur le front-end et l'UX.",
    features: [
      "Interface fidèle à Gmail (Light & Dark Mode)",
      "Navigation entre les écrans (Inbox, Email, Compose)",
      "Gestes tactiles (Swipe pour archiver/supprimer)",
      "Liste dynamique des emails avec données mockées"
    ],
    stack: [
      { name: "Flutter", color: "#61DAFB" },
      { name: "Dart", color: "#F7DF1E" },
      { name: "Provider", color: "#FF4154" },
      { name: "Styled Components", color: "#DB7093" }
    ],
    image: "/assets/images/app_gmail_clone.png",
    status: "Terminé",
    duration: "02 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["Mobile", "Flutter", "UI/UX", "Frontend"]
  },
  {
    num: "11",
    category: "Dev Mobile",
    title: "Clone LinkedIn : Réplique mobile de l'interface LinkedIn",
    shortDescription: "Développement d'une réplique front-end de l'application LinkedIn, en reproduisant fidèlement son design et ses animations principales avec Flutter.",
    description: "Ce projet avait pour objectif de recréer l'interface utilisateur moderne et complexe de LinkedIn en utilisant Flutter. L'accent a été mis sur la construction d'une architecture widget propre, la gestion d'état avec Provider et l'implémentation d'une navigation fluide. Les écrans principaux comme le fil d'actualité, les profils et la messagerie ont été développés avec des données mockées pour simuler une expérience interactive et réaliste, sans backend. Ce défi m'a permis de consolider mes compétences en création de layouts responsives et d'animations custom dans le framework Flutter.",
    features: [
      "Interface fidèle à LinkedIn (Light & Dark Mode)",
      "Navigation fluide entre les écrans (Feed, Profil, Réseau, Messages)",
      "Fil d'actualité dynamique avec publications mockées (texte, images)",
      "Page de profil interactive avec expérience et compétences",
      "Animations et transitions fluides (héro, fade)"
    ],
    stack: [
      { name: "Flutter", color: "#02569B" },
      { name: "Dart", color: "#0175C2" },
      { name: "Provider", color: "#8940FA" }

    ],
    image: "/assets/images/app_clone_linkedin.png",
    status: "Terminé",
    duration: "03 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["Mobile", "Flutter", "UI/UX", "Frontend", "Dart"]
  },
  {
    num: "12",
    category: "Dev Mobile",
    title: "Clone WhatsApp : Réplique mobile de l'interface WhatsApp",
    shortDescription: "Développement d'une réplique front-end de l'application WhatsApp, en reproduisant fidèlement son design minimaliste et ses flux de messagerie avec Flutter.",
    description: "Ce projet consistait à recréer l'interface utilisateur épurée et fonctionnelle de WhatsApp en utilisant Flutter. L'objectif principal était de maîtriser la mise en page de listes complexes (liste de chats, liste de messages), la gestion d'état pour simuler une conversation en temps réel et la navigation imbriquée typique des applications de messagerie. Les écrans principaux (liste des discussions, chat individuel, appels, paramètres) ont été implémentés avec des données mockées. Ce défi m'a permis de renforcer mes compétences en design d'interfaces conversationnelles et en gestion d'état local pour une application mobile complexe.",
    features: [
      "Interface fidèle à WhatsApp (Dark Mode uniquement, typique de WhatsApp)",
      "Navigation entre les écrans (Chats, Appels, Statuts, Paramètres)",
      "Liste dynamique des conversations avec derniers messages et horaires",
      "Page de chat interactive avec envoi et réception de messages mockés",
      "Indicateurs de statut (en ligne, dernière connexion, vus)",
      "UI pour l'envoi de texte, d'images et d'emoji"
    ],
    stack: [
      { name: "Flutter", color: "#02569B" },
      { name: "Dart", color: "#0175C2" },
      { name: "Provider", color: "#8940FA" }
    ],
    image: "/assets/images/app_what_clone.png",
    status: "Terminé",
    duration: "02 Mois",
    team: "Personnel",
    live: "#",
    github: "#",
    tags: ["Mobile", "Flutter", "UI/UX", "Frontend", "Dart", "Messagerie"]
  }
];


const ProjectCard = ({ project, isActive, onClick }) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    },
    hover: {
      scale: 1.02,
      transition: { duration: 0.2 }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Terminé': return 'bg-green-500/20 text-green-400 border-green-400/30';
      case 'En cours': return 'bg-blue-500/20 text-blue-400 border-blue-400/30';
      case 'Livré': return 'bg-purple-500/20 text-purple-400 border-purple-400/30';
      default: return 'bg-gray-500/20 text-gray-400 border-gray-400/30';
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover="hover"
      onClick={onClick}
      className={`cursor-pointer p-1 rounded-2xl transition-all duration-300 ${isActive ? 'bg-gradient-to-r from-accent/20 to-accent/10 border border-accent/30' : 'border border-transparent'
        }`}
    >
      <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
        {/* Image propre sans texte */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
          {/* Overlay subtil au survol seulement */}
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-all duration-300" />
        </div>

        {/* Toutes les informations en dessous de l'image */}
        <div className="p-4 space-y-3">
          {/* En-tête avec numéro et statut */}
          <div className="flex items-center justify-between">
            <span className="text-2xl font-black text-accent/60">{project.num}</span>
            <span className={`px-2 py-1 text-xs rounded-full border ${getStatusColor(project.status)}`}>
              {project.status}
            </span>
          </div>

          {/* Titre */}
          <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">
            {project.title}
          </h3>

          {/* Description courte */}
          <p className="text-white/70 text-sm line-clamp-2 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Footer avec catégorie et technologies */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-accent text-sm font-medium">
              {project.category}
            </span>
            <div className="flex gap-1">
              {project.stack.slice(0, 3).map((tech, index) => (
                <div
                  key={index}
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: tech.color }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const ProjectDetails = ({ project }) => {
  const detailVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={detailVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* En-tête du projet */}
      <motion.div variants={itemVariants}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <span className="text-8xl font-black text-transparent bg-gradient-to-r from-accent/30 to-accent/10 bg-clip-text">
              {project.num}
            </span>
          </div>
          <div className="flex gap-3">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={project.live} className="group">
                    <div className="w-12 h-12 bg-accent/10 hover:bg-accent border border-accent/30 hover:border-accent rounded-xl flex items-center justify-center transition-all duration-300">
                      <FiExternalLink className="w-5 h-5 text-accent group-hover:text-primary" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Voir le projet en ligne</TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={project.github} className="group">
                    <div className="w-12 h-12 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 rounded-xl flex items-center justify-center transition-all duration-300">
                      <FiGithub className="w-5 h-5 text-white/70 group-hover:text-white" />
                    </div>
                  </Link>
                </TooltipTrigger>
                <TooltipContent>Code source sur GitHub</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>

        <h2 className="text-3xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h2>

        <div className="flex items-center gap-4 mb-4">
          <span className="px-3 py-1 bg-accent/10 text-accent border border-accent/30 rounded-full text-sm">
            {project.category}
          </span>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <FiClock className="w-4 h-4" />
            {project.duration}
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <FiUsers className="w-4 h-4" />
            {project.team}
          </div>
        </div>
      </motion.div>

      {/* Description */}
      <motion.div variants={itemVariants}>
        <p className="text-white/80 leading-relaxed mb-6">
          {project.description}
        </p>
      </motion.div>

      {/* Fonctionnalités */}
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold text-white mb-3">Fonctionnalités clés</h3>
        <div className="grid grid-cols-2 gap-3">
          {project.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="text-white/70 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Technologies */}
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold text-white mb-4">Technologies utilisées</h3>
        <div className="flex flex-wrap gap-3">
          {project.stack.map((tech, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg flex items-center gap-2 hover:border-accent/30 transition-colors"
            >
              <div
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: tech.color }}
              />
              <span className="text-white/90 text-sm">{tech.name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Tags */}
      <motion.div variants={itemVariants}>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-accent/10 text-accent border border-accent/20 rounded-full text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Ligne de séparation */}
      <motion.div variants={itemVariants}>
        <div className="h-px bg-gradient-to-r from-accent via-accent/50 to-transparent mt-8" />
      </motion.div>
    </motion.div>
  );
};

const Work = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [viewMode, setViewMode] = useState('grid'); // 'grid' ou 'carousel'
  const [filter, setFilter] = useState('Tous');

  const categories = ['Tous', ...new Set(projects.map(p => p.category))];
  const filteredProjects = filter === 'Tous'
    ? projects
    : projects.filter(p => p.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* En-tête */}
          <motion.div variants={headerVariants} className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-accent">Mes Réalisations</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Projets &
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                {" "}Innovations
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Découvrez une sélection de mes projets les plus significatifs,
              alliant innovation technique et créativité pour des solutions concrètes.
            </p>

            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto mt-8"></div>
          </motion.div>

          {/* Filtres et contrôles */}
          <motion.div
            variants={headerVariants}
            className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4"
          >
            {/* Filtres par catégorie */}
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-lg text-sm transition-all duration-300 ${filter === category
                    ? 'bg-accent text-primary font-medium'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 border border-white/10'
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sélecteur de vue */}
            <div className="flex items-center gap-2 bg-white/5 p-1 rounded-lg border border-white/10">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded ${viewMode === 'grid'
                  ? 'bg-accent text-primary'
                  : 'text-white/60 hover:text-white'
                  }`}
              >
                <FiGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('carousel')}
                className={`p-2 rounded ${viewMode === 'carousel'
                  ? 'bg-accent text-primary'
                  : 'text-white/60 hover:text-white'
                  }`}
              >
                <FiList className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Contenu principal */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
            {/* Liste des projets */}
            <motion.div variants={headerVariants}>
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <AnimatePresence>
                    {filteredProjects.map((project, index) => (
                      <motion.div
                        key={project.num}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <ProjectCard
                          project={project}
                          isActive={activeProject.num === project.num}
                          onClick={() => setActiveProject(project)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="relative">
                  <Swiper
                    modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
                    effect="coverflow"
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    coverflowEffect={{
                      rotate: 50,
                      stretch: 0,
                      depth: 100,
                      modifier: 1,
                      slideShadows: true,
                    }}
                    navigation={{
                      nextEl: '.swiper-button-next',
                      prevEl: '.swiper-button-prev',
                    }}
                    pagination={{ clickable: true }}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    onSlideChange={(swiper) => {
                      const currentProject = filteredProjects[swiper.activeIndex];
                      if (currentProject) setActiveProject(currentProject);
                    }}
                    className="pb-12"
                  >
                    {filteredProjects.map((project, index) => (
                      <SwiperSlide key={project.num} className="!w-80">
                        <ProjectCard
                          project={project}
                          isActive={activeProject.num === project.num}
                          onClick={() => setActiveProject(project)}
                        />
                      </SwiperSlide>
                    ))}

                    {/* Navigation personnalisée */}
                    <div className="swiper-button-prev !text-accent !w-10 !h-10 !mt-0 !top-1/2 !left-4">
                      <BsChevronLeft />
                    </div>
                    <div className="swiper-button-next !text-accent !w-10 !h-10 !mt-0 !top-1/2 !right-4">
                      <BsChevronRight />
                    </div>
                  </Swiper>
                </div>
              )}
            </motion.div>

            {/* Détails du projet sélectionné */}
            <motion.div variants={headerVariants} className="sticky top-20">
              <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <AnimatePresence mode="wait">
                  <ProjectDetails key={activeProject.num} project={activeProject} />
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* Statistiques */}
          <motion.div
            variants={headerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
          >
            {[
              { number: projects.length, label: "Projets réalisés" },
              { number: new Set(projects.flatMap(p => p.stack.map(s => s.name))).size, label: "Technologies" },
              { number: projects.filter(p => p.status === 'Terminé').length, label: "Projets livrés" },
              { number: projects.reduce((acc, p) => acc + parseInt(p.duration), 0), label: "Mois d'expérience" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl">
                <div className="text-3xl font-bold text-accent mb-2">{stat.number}</div>
                <div className="text-white/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
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

export default Work;