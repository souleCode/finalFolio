"use client";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from 'react-icons/fa';
import { FiChevronDown, FiChevronUp, FiTarget, FiCode, FiTrendingUp } from 'react-icons/fi';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { FiUser, FiMapPin, FiMail, FiGlobe, FiUsers, FiCheckCircle, FiCalendar, FiAward } from 'react-icons/fi';
import KerasIcon from '@/components/icons/Keras';
import MatplotlibIcon from '@/components/icons/Matplotlib';
import SeabornIcon from '@/components/icons/Seaborn';
import PandasIcon from '@/components/icons/Pandas';
import TensorFlowIcon from '@/components/icons/Tensorflow';
import ScipyIcon from '@/components/icons/Scipy';
import DjangoIcon from '@/components/icons/Django';
import FlaskIcon from '@/components/icons/Flask';
import SqlIcon from '@/components/icons/SQL';
import React, { useState } from 'react';
import Link from 'next/link';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

// Données
const about = {
  title: "À Propos de Moi",
  description: "Je suis un Ingénieur IA/Data Science & Software en formation à ENSAM-Meknès, motivé et passionné par l'utilisation de l'IA dans l'industrie. Par ailleurs, j'exerce également dans le domaine du développement web avec des technologies d'actualité. Cela fait de moi un atout polyvalent et précieux pour toute équipe.",
  info: [
    {
      icon: FiUser,
      fieldName: "Nom",
      fieldValue: "Souleymane TRAORE",
    },
    {
      icon: FiGlobe,
      fieldName: "Pays d'origine",
      fieldValue: "Burkina Faso",
    },
    {
      icon: FiMapPin,
      fieldName: "Adresse",
      fieldValue: "Maroc/Meknès/Marjane2",
    },
    {
      icon: FiMail,
      fieldName: "Email",
      fieldValue: "souleymanetraore.2026@gmail.com",
    },
    {
      icon: FiGlobe,
      fieldName: "Langues",
      fieldValue: "Français, Anglais",
    },
    {
      icon: FiUsers,
      fieldName: "Collaboration",
      fieldValue: "Disponible",
    },
  ]
};

const experience = {
  title: 'Mon Expérience',
  description: "Avec 03 années d'expérience(Personnelle) dans le domaine des technologies de l'information, j'ai eu l'opportunité de travailler sur des projets variés et stimulants, allant du développement d'applications web et mobiles à la mise en œuvre de solutions d'intelligence artificielle et de data science.",
  items: [
    {
      company: "Africa Data Entry",
      position: "AI Software Engineer",
      duration: "Juil-Sept 2025",
      type: "Stage",
      description: "Mise en place de solutions d'IA pour la détection des Surcharges dans les Bus SOTRACO",
      details: {
        missions: [
          "Formation de groupes de 05-10 étudiants aux technologies web modernes",
          "Création de curricula pédagogiques pour les parcours Frontend et Backend",
          "Développement d'outils internes pour automatiser les processus de formation",
          "Encadrement de projets étudiants et évaluation des compétences acquises",
          "Veille technologique et mise à jour continue des programmes de formation",
          "Collaboration avec l'équipe pédagogique pour l'amélioration des méthodes d'enseignement"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Git", "GitHub", "VS Code"],
        achievements: [
          "Plus de 10 étudiants formés avec un taux de réussite de 95%",
          "Création de 50+ exercices pratiques et projets pédagogiques",
          "Taux de satisfaction des formations maintenu à 4.8/5"
        ]
      }
    },
    {
      company: "DIGISCIA",
      position: "AI Software Engineer",
      duration: "2025-Présent",
      type: "Temps partiel",
      description: "Formation et développement de solutions technologiques",
      details: {
        missions: [
          "Formation de groupes de 05-10 étudiants aux technologies Mobile modernes",
          "Création de curricula pédagogiques pour les parcours Mobile",
          "Encadrement de projets étudiants et évaluation des compétences acquises",
          "Veille technologique et mise à jour continue des programmes de formation",
          "Développement d'applications Web DIGISCIA-ACCADEMY",
          "Développement d'un blog pour DIGISCIA",
          "Collaboration avec l'équipe pédagogique pour l'amélioration des activités au sein de DIGISCIA"
        ],
        technologies: ["Flutter", "Tailwind CSS", "Django", "React.js", "Node.js", "Git", "GitHub", "React Native"],
        achievements: [
          "Plus de 10 étudiants formés avec un taux de réussite de 95%",
          "Création de 50+ exercices pratiques et projets pédagogiques",
          "Taux de satisfaction des formations maintenu à 4.8/5"
        ]
      }
    },
    {
      company: "LMS Invention",
      position: "Développeur Web&Mobile",
      duration: "2023-Présent",
      type: "Freelance",
      description: "Création de solutions web&Mobile innovantes pour divers clients",
      details: {
        missions: [
          "Développement d'applications web sur mesure pour PME et startups",
          "Création de sites AICECOOK pour LMS Invention",
          "Développement d'applications mobiles avec React Native",
          "Formation des clients à l'utilisation des outils développés"
        ],
        technologies: ["React.js", "Next.js", "Vue.js", "Node.js", "PHP", "MySQL", "PostgreSQL", "Django", "Flutter", "React Native", "cloud"],
        achievements: [
          "Plusieurs projets web&Mobile livrés avec 100% de satisfaction client",
          "Amélioration moyenne de 40% des performances sur les sites optimisés",
        ]
      }
    },
    {
      company: "Pro Htech Start Up",
      position: "Formateur/Développeur Web",
      duration: "2022-Présent",
      type: "Temps partiel",
      description: "Formation et développement de solutions technologiques",
      details: {
        missions: [
          "Formation de groupes de 05-10 étudiants aux technologies web modernes",
          "Création de curricula pédagogiques pour les parcours Frontend et Backend",
          "Développement d'outils internes pour automatiser les processus de formation",
          "Encadrement de projets étudiants et évaluation des compétences acquises",
          "Veille technologique et mise à jour continue des programmes de formation",
          "Collaboration avec l'équipe pédagogique pour l'amélioration des méthodes d'enseignement"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Git", "GitHub", "VS Code"],
        achievements: [
          "Plus de 10 étudiants formés avec un taux de réussite de 95%",
          "Création de 50+ exercices pratiques et projets pédagogiques",
          "Taux de satisfaction des formations maintenu à 4.8/5"
        ]
      }
    },
    {
      company: "CodSoft",
      position: "Stagiaire Full Stack",
      duration: "Sept-Oct 2023",
      type: "Stage",
      description: "Développement d'un Blog Personnel avec les technologies modernes",
      details: {
        missions: [
          "Conception et développement d'une application de blog responsive avec HTML&CSS,PHP et MySQL",
          "Intégration d'un système d'authentification sécurisé.",
          "Mise en place d'un système pour la gestion des articles et commentaires",
          "Déploiement de l'application sur des plateformes cloud"
        ],
        technologies: ["HTML&CSS", "PHP", "MySQL"],
        achievements: [
          "Application entièrement fonctionnelle livré dans les délais",
          "Interface utilisateur intuitive et responsive sur tous les appareils",
        ]
      }
    },
    {
      company: "Technocolabs Software Inc.",
      position: "Stagiaire IA/Data Science",
      duration: "Juil-Oct 2024",
      type: "Stage",
      description: "Implémentation de modèles d'apprentissage automatique et analyse de données",
      details: {
        missions: [
          "Développement et entraînement d'un pipeline composé d'un ensemble de modèles de classification et regression pour prédire les prêts Hypothécaire",
          "Traitement et nettoyage de larges datasets (>100k entrées) avec Pandas et NumPy",
          "Création de pipelines d'apprentissage automatique avec scikit-learn",
          "Visualisation de données complexes avec Matplotlib, Seaborn et Plotly",
          "Déploiement de modèles ML en production avec Flask et Docker",
          "Rédaction de documentation technique et présentation des résultats"
        ],
        technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Flask", "Docker", "Jupyter"],
        achievements: [
          "Pipeline très performant, Modèle de classification avec 97% de précision et modèle de régression avec 95% de R² sur les données de test",
          "Réduction du temps de traitement des données de 60% grâce aux optimisations",
          "Pipeline automatisé permettant le retraining périodique des modèles"
        ]
      }
    },

  ],
};

const certifications = {
  title: 'Mes Certifications',
  categories: [
    {
      name: "IA/Data Science",
      items: [
        {
          title: "Associate AI Engineer",
          institution: "DataCamp",
          duration: "44 Heures",
        },
        {
          title: "Deep Learning: De Zéro à la Certification Tensorflow",
          institution: "Udemy",
          duration: "UC-4168169f-2a6c4e-2e-838f-5d7b1735278f",
        },
        {
          title: "Construire les modèles non supervisés",
          institution: "CentraleSupélec",
          duration: "ID: 4942497317",
        },
        {
          title: "Explorez les données avec des modèles Non Supervisés",
          institution: "CentraleSupélec",
          duration: "ID: 1704755782",
        },
        {
          title: "Analysez les données textuelles",
          institution: "CentraleSupélec",
          duration: "ID: 6455606015",
        },
        {
          title: "Évaluez les performances d'un modèle ML",
          institution: "CentraleSupélec",
          duration: "ID: 2712019692",
        },
      ]
    },
    {
      name: "Développement Web",
      items: [
        {
          title: "MERN Stack",
          institution: "Udemy",
          duration: "UC-a39b23ff-7137-4f3b-8d6c-acca9f12d85c",
        },
        {
          title: "React & Next.js: From Beginner to Pro",
          institution: "Udemy",
          duration: "UC-67162148-b95e-41ef-b21a-2bd64d1cde73",
        },
        {
          title: "Développement Web Full Stack A à Z",
          institution: "Udemy",
          duration: "UC-9fde37a0-1dbc-4ca6-868b-a542ea48543a",
        },
      ]
    }
  ]
};

const education = {
  title: 'Mon Parcours de Formation',
  description: "Ayant obtenu mon Bac à l'âge de 19 ans et étant passionné de l'informatique et ses applications, j'ai décidé de continuer mes études supérieures dans une grande école. J'ai obtenu une bourse d'étude vers le Maroc où je suis inscrit à l'École Nationale Supérieure Arts&Métiers de Meknès.",
  items: [
    {
      institution: "ENSAM Meknès",
      degree: "05-Année Ingénieur Génie Industriel - IA/Data Science",
      duration: "Sept 2025 - Juil 2026",
      country: "Maroc",
      type: "Diplôme d'Ingénieur d'État"
    },
    {
      institution: "Africa Tech Up Tour",
      degree: "Formation Ingénieur IA/Data Science",
      duration: "Mars 2024 - Août 2024",
      country: "En ligne",
      type: "Certification"
    },
    {
      institution: "ENSAM Meknès",
      degree: "04-Année Ingénieur Génie Industriel - IA/Data Science",
      duration: "Sept 2024 - Juil 2025",
      country: "Maroc",
      type: "Ingénierie"
    },
    {
      institution: "ENSAM Meknès",
      degree: "03-Année Ingénieur Génie Industriel - IA/Data Science",
      duration: "Sept 2023 - Juil 2024",
      country: "Maroc",
      type: "Ingénierie"
    },

    {
      institution: "ENSAM Meknès",
      degree: "Classes Préparatoires Intégrées",
      duration: "Oct 2021 - Juil 2023",
      country: "Maroc",
      type: "Préparatoire"
    },
    {
      institution: "Collège Protestant de Ouagadougou",
      degree: "Diplôme du Baccalauréat série D",
      duration: "Oct 2020 - Juil 2021",
      country: "Burkina Faso",
      type: "Secondaire"
    },
  ],
};

const skills = {
  title: "Mes Compétences Techniques",
  description: "Doté d'un solide bagage technique et d'une expertise polyvalente, je maîtrise un large éventail de technologies et d'outils pour répondre aux défis complexes des projets modernes.",
  categories: [
    {
      name: "Frontend",
      skills: [
        { icon: <FaHtml5 />, name: "HTML5", level: 90 },
        { icon: <FaCss3 />, name: "CSS3", level: 85 },
        { icon: <FaJs />, name: "JavaScript", level: 88 },
        { icon: <FaReact />, name: "React.js", level: 85 },
        { icon: <SiNextdotjs />, name: "Next.js", level: 80 },
        { icon: <SiTailwindcss />, name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      name: "Backend",
      skills: [
        { icon: <FaNodeJs />, name: "Node.js", level: 82 },
        { icon: <FaPython />, name: "Python", level: 92 },
        { icon: <DjangoIcon />, name: "Django", level: 78 },
        { icon: <FlaskIcon />, name: "Flask", level: 75 },
        { icon: <SqlIcon />, name: "SQL", level: 85 },
      ]
    },
    {
      name: "IA/Data Science",
      skills: [
        { icon: <TensorFlowIcon />, name: "TensorFlow", level: 88 },
        { icon: <KerasIcon />, name: "Keras", level: 85 },
        { icon: <PandasIcon />, name: "Pandas", level: 90 },
        { icon: <MatplotlibIcon />, name: "Matplotlib", level: 82 },
        { icon: <SeabornIcon />, name: "Seaborn", level: 80 },
        { icon: <ScipyIcon />, name: "SciPy", level: 78 },
      ]
    }
  ]
};

// Composants


const ExperienceCard = ({ item, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: index * 0.1 }
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Stage': return 'bg-blue-500/10 text-blue-400 border-blue-400/30';
      case 'Freelance': return 'bg-green-500/10 text-green-400 border-green-400/30';
      case 'Temps partiel': return 'bg-purple-500/10 text-purple-400 border-purple-400/30';
      default: return 'bg-accent/10 text-accent border-accent/30';
    }
  };

  return (
    <motion.div variants={cardVariants} className="group">
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
        {/* En-tête de la carte */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <span className={`px-3 py-1 text-xs rounded-full border ${getTypeColor(item.type)}`}>
              {item.type}
            </span>
          </div>
          <span className="text-accent text-sm font-medium">{item.duration}</span>
        </div>

        {/* Titre et entreprise */}
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
          {item.position}
        </h3>

        <div className="flex items-center space-x-2 mb-3">
          <div className="w-1.5 h-1.5 bg-accent rounded-full"></div>
          <p className="text-white/70">{item.company}</p>
        </div>

        {/* Description de base */}
        <p className="text-white/60 text-sm leading-relaxed mb-4">{item.description}</p>

        {/* Bouton pour développer/réduire */}
        {item.details && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-medium transition-colors mb-4"
          >
            {isExpanded ? (
              <>
                <FiChevronUp className="w-4 h-4" />
                Voir moins
              </>
            ) : (
              <>
                <FiChevronDown className="w-4 h-4" />
                Voir plus de détails
              </>
            )}
          </button>
        )}

        {/* Contenu détaillé (affiché si développé) */}
        {isExpanded && item.details && (
          <div className="space-y-6 border-t border-white/10 pt-6">
            {/* Missions */}
            {item.details.missions && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FiTarget className="w-4 h-4 text-accent" />
                  <h4 className="text-white font-semibold text-sm">Missions principales</h4>
                </div>
                <ul className="space-y-2">
                  {item.details.missions.map((mission, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                      <div className="w-1 h-1 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{mission}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technologies */}
            {item.details.technologies && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FiCode className="w-4 h-4 text-accent" />
                  <h4 className="text-white font-semibold text-sm">Technologies utilisées</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.details.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-accent/10 border border-accent/20 rounded-md text-xs text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Réalisations */}
            {item.details.achievements && (
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <FiTrendingUp className="w-4 h-4 text-accent" />
                  <h4 className="text-white font-semibold text-sm">Réalisations clés</h4>
                </div>
                <ul className="space-y-2">
                  {item.details.achievements.map((achievement, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-white/70 text-sm">
                      <div className="w-1 h-1 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Aperçu des technologies (toujours visible) */}
        {item.details && item.details.technologies && !isExpanded && (
          <div className="mt-4">
            <div className="flex flex-wrap gap-1 mb-2">
              {item.details.technologies.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 bg-accent/5 border border-accent/10 rounded text-xs text-accent/80"
                >
                  {tech}
                </span>
              ))}
              {item.details.technologies.length > 4 && (
                <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/60">
                  +{item.details.technologies.length - 4} autres
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SkillCard = ({ skill, index }) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300 cursor-pointer"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="text-4xl text-white/80 group-hover:text-accent transition-colors duration-300">
                {skill.icon}
              </div>
              <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-accent to-accent/80 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                ></motion.div>
              </div>
              <span className="text-sm font-medium text-white/90">{skill.level}%</span>
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p className="capitalize">{skill.name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');

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

  const tabVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="relative min-h-screen py-20 overflow-hidden">
      {/* Fond avec effets */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/95 to-primary/90">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* En-tête */}
          <motion.div variants={tabVariants} className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <div className="w-2 h-2 bg-accent rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium text-accent">Mon Parcours</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Expérience &
              <span className="bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                {" "}Compétences
              </span>
            </h1>

            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Découvrez mon parcours professionnel, mes formations et les technologies
              que je maîtrise pour créer des solutions innovantes.
            </p>

            <div className="h-1 w-20 bg-gradient-to-r from-accent to-accent/50 rounded-full mx-auto mt-8"></div>
          </motion.div>

          {/* Tabs */}
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <motion.div variants={tabVariants}>
              <TabsList className="grid grid-cols-2 lg:grid-cols-5 gap-2 p-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl mb-12 max-w-4xl mx-auto">
                <TabsTrigger
                  value="experience"
                  className="data-[state=active]:bg-accent data-[state=active]:text-primary text-white/70 py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <FiCalendar className="w-4 h-4 mr-2" />
                  Expérience
                </TabsTrigger>
                <TabsTrigger
                  value="education"
                  className="data-[state=active]:bg-accent data-[state=active]:text-primary text-white/70 py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <FiAward className="w-4 h-4 mr-2" />
                  Formation
                </TabsTrigger>
                <TabsTrigger
                  value="skills"
                  className="data-[state=active]:bg-accent data-[state=active]:text-primary text-white/70 py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <FiCheckCircle className="w-4 h-4 mr-2" />
                  Compétences
                </TabsTrigger>
                <TabsTrigger
                  value="certifications"
                  className="data-[state=active]:bg-accent data-[state=active]:text-primary text-white/70 py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <FiAward className="w-4 h-4 mr-2" />
                  Certifications
                </TabsTrigger>
                <TabsTrigger
                  value="about"
                  className="data-[state=active]:bg-accent data-[state=active]:text-primary text-white/70 py-3 px-6 rounded-xl transition-all duration-300"
                >
                  <FiUser className="w-4 h-4 mr-2" />
                  À Propos
                </TabsTrigger>
              </TabsList>
            </motion.div>

            {/* Contenu des tabs */}
            <div className="min-h-[60vh]">
              {/* Expérience */}
              <TabsContent value="experience">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{experience.title}</h2>
                    <p className="text-white/70 max-w-4xl mx-auto leading-relaxed">{experience.description}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {experience.items.map((item, index) => (
                      <ExperienceCard key={index} item={item} index={index} />
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Formation */}
              <TabsContent value="education">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{education.title}</h2>
                    <p className="text-white/70 max-w-4xl mx-auto leading-relaxed">{education.description}</p>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {education.items.map((item, index) => (
                      <ExperienceCard key={index} item={{
                        ...item,
                        position: item.degree,
                        company: item.institution,
                        type: item.type,
                        description: `Formation à ${item.institution}, ${item.country}`
                      }} index={index} />
                    ))}
                  </div>
                </motion.div>
              </TabsContent>

              {/* Compétences */}
              <TabsContent value="skills">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-12"
                >
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{skills.title}</h2>
                    <p className="text-white/70 max-w-4xl mx-auto leading-relaxed">{skills.description}</p>
                  </div>

                  {skills.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-6">
                      <h3 className="text-2xl font-bold text-accent text-center">{category.name}</h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {category.skills.map((skill, index) => (
                          <SkillCard key={index} skill={skill} index={index} />
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>

              {/* Certifications */}
              <TabsContent value="certifications">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-12"
                >
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{certifications.title}</h2>
                    <p className="text-white/70 max-w-4xl mx-auto leading-relaxed">
                      Mes certifications professionnelles dans différents domaines technologiques.
                    </p>
                  </div>

                  {certifications.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="space-y-6">
                      <h3 className="text-2xl font-bold text-accent text-center">{category.name}</h3>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {category.items.map((item, index) => (
                          <ExperienceCard key={index} item={{
                            ...item,
                            position: item.title,
                            company: item.institution,
                            type: 'Certification',
                            description: `Certification délivrée par ${item.institution}`
                          }} index={index} />
                        ))}
                      </div>
                    </div>
                  ))}
                </motion.div>
              </TabsContent>

              {/* À Propos */}
              <TabsContent value="about">
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="space-y-8"
                >
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">{about.title}</h2>
                    <p className="text-white/70 max-w-4xl mx-auto leading-relaxed mb-8">{about.description}</p>
                  </div>

                  <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {about.info.map((info, index) => (
                        <motion.div
                          key={index}
                          variants={tabVariants}
                          className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-accent/30 transition-all duration-300"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 bg-accent/10 border border-accent/20 rounded-xl flex items-center justify-center">
                              <info.icon className="w-5 h-5 text-accent" />
                            </div>
                            <div>
                              <p className="text-white/70 text-sm">{info.fieldName}</p>
                              <p className="text-white font-medium">{info.fieldValue}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            </div>
          </Tabs>
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

export default Resume;