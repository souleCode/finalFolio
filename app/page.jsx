import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";


const Home = () => {
  return (
    <section className="h-full mb-[250px] ">
        <div className="container h-full mx-auto ">
          <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
            {/* texte */}
            <div className="order-2 text-center xl:text-left xl:order-none ">
              <span className="text-xl">Ingénieur IA/Data Science & Softwares</span>
              <h1 className="h1">
                Salut 👋! Je suis <br /> <span className="text-accent">TRAORE Souleymane</span>
              </h1>
              <p className="max-w-[500px] mt-9 mb-9 text-white/80 ">
              Passionné par l'intelligence artificielle et ses applications innovantes, je me spécialise dans 
              la conception et le développement de solutions digitales performantes et esthétiques. Doté d'une
               expertise approfondie dans plusieurs langages de programmation et technologies de pointe, je mets 
               mes compétences techniques et ma créativité au service de projets ambitieux, alliant robustesse et élégance. 
               Mon approche allie rigueur, innovation et sens du détail, permettant de livrer des produits qui répondent aux 
               besoins les plus exigeants tout en offrant une expérience utilisateur exceptionnelle.
              </p>
              {/* Btn and socials */}
              <div className="flex flex-col items-center gap-8 xl:flex-row ">
              <a href="/resume/Cv_Pro_2025_version_pdf_Fr_1.0.pdf" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="flex items-center gap-2 uppercase"
                >
                  <span>Téléchargez mon Cv</span>
                  <FiDownload className="text-lg" />
                </Button>
              </a>
                <div className="mb-8 xl:mb-0">
                  <Socials containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover: transition-all duration-500"/>
                </div>
              </div>
            </div>
            {/* photo */}
            <div className="order-1 mb-8 xl:order-none xl:mb-0">
              <Photo/>
            </div>
          </div>
        </div>  
        <Stats/>
    </section>
  )
}

export default Home