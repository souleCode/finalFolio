"use client";

import { motion } from "framer-motion";
import Image from "next/image";


const Photo = () => {
  return (
    <div className="h-full w-full relative">
                <div className="h-[298px] w-[298px] xl:w-[498px] xl:h-[498px] mix-blend-lighten absolute">
                    <Image src="/assets/images/image.png" 
                        priority 
                        quality={100} 
                        fill alt="" 
                        className="object-contain" />
                </div>
          
      {/*cercle pour le samedi 21/09*/}
      <motion.svg 
    className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]" 
    fill="transparent" 
    viewBox="0 0 506 506" 
    xmlns="http://www.w3.org/2000/svg"
>
    <motion.circle 
        cx="253" 
        cy="253" 
        r="250" 
        stroke="#00ff99" 
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round" 
        // L'animation doit être dans animate pour être continue
        animate={{ 
            rotate: 360 // Rotation complète (de 0 à 360°)
        }}
        initial={{ 
            strokeDasharray: ["15 120 25 25","16 25 92 72","4 250 22 22"],
            rotate: 0 // Position initiale
        }}
        transition={{ 
            duration: 20, // La durée de chaque cycle complet
            ease: "linear", // Pour que la rotation soit fluide
            repeat: Infinity, // Répétition infinie
        }}
    />
</motion.svg>

    </div>
  )
}

export default Photo;