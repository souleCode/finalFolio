"use client";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select,
         SelectContent,
         SelectGroup,
         SelectItem,
         SelectLabel,
         SelectTrigger,
         SelectValue,
 } from '@/components/ui/select';
 import  {FaPhoneAlt,
          FaEnvelope,
          FaMapMarkerAlt,
          FaFacebookF,
     
 } from 'react-icons/fa';

import React from 'react'
import { motion } from 'framer-motion';

const info=[
  {
    icon:<FaPhoneAlt/>,
    title:'Telephone',
    info:'(+212) 06 19 94 48 95 '
  },
  {
    icon:<FaEnvelope/>,
    title:'Email',
    info:'souleymanetraore.2026@gmail.com'
  },
  {
    icon:<FaMapMarkerAlt/>,
    title:'Adresse',
    info:'Maroc, Casablanca'
  },
 
]

const Contact = () => {
  return (
    <motion.section
    initial={{opacity:0}}
    animate={{opacity:1,
              transition:{duration:0.4, delay:2.4,ease:'easeInOut'},
    }}
    className="py-6 ">
    <div className="container max-auto">
      <div className='flex flex-col xl:flex-row gap-[30px] '>
        {/* form */}
        <div className='xl:h-[54%] order-2 xl:order-none'>
          <form action="" className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl ">
            <h3 className='text-4xl text-accent' >
              Contactez-moi
            </h3>
            <p className='text-white/60' >
              Pour toute question ou demande de services, n'hésitez pas à me contacter.
            </p>
            <div className='h-[20px]' ></div>
            {/* inputs */}
            <div className="grid gap-6 gri-cols-1 md:grid-cols-2" >
              <Input type='text' placeholder='Prénom' />
              <Input type='text' placeholder='Nom' />
              <Input type='email' placeholder='Email' />
              <Input type='text' placeholder='Telephone' />
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className="w-full " >
                <SelectValue placeholder=" Choisir un service"/>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Mes Services</SelectLabel>
                  <SelectItem value="web" >Développement web</SelectItem>
                  <SelectItem value="mobile" >Développement Mobile</SelectItem>
                  <SelectItem value="iads" >Data Science/IA</SelectItem>
                  <SelectItem value="gi" >Ingénierie industrielle</SelectItem>
                  <SelectItem value="formations" >Formations en Ligne</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* texteara */}
            <Textarea className="h-[200px]" placeholder='Taper votre Message ici!' />
            {/* button */}
            <Button size="md" className="max-w-40" >
              Envoyer
            </Button>

          </form>
        </div >
        {/* info */}
        <div className="flex items-center flex-1 order-1 mb-8 xl:justify-end xl:order-none xl:mb-0 " >
          <ul className="flex flex-col gap-10" >
            {info.map((item,index)=>{
              return(
                <li key={index} className="flex items-center gap-6" >
                  <div className="w-[52px] h-[52px] xl:h-[72px] xl:w-[72px] bg-[#27272c] text-accent rounded-lg flex items-center justify-center " >
                    <div className='text-[28px]'> {item.icon}</div>
                  </div>
                  <div className="flex-1" >
                    <h4 className="text-accent/30" >{item.title}</h4>
                    <p className="text-xl text-white/60" >{item.info}</p>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
    </motion.section>
  )
}
export default Contact

// Debut de la page contact le 17/02/025