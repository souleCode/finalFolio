"use client";

import {usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

const links = [
    {
        name: 'Accueil',
        path: "/",
    },
    {
        name: 'Services',
        path: "/services",
    },
    {
        name: 'Compétences',
        path: "/resume",
    },
    {
        name: 'Réalisations',
        path: "/work",
    },
    {
        name: 'Contact',
        path: "/contact",
    },
];
const MobileNav = () => {
    const pathmane= usePathname ();
  return (
    <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent "/>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
            {/* Logo */}
            <div className="mt-15 mb-20 text-center text-2xl">
                <Link href="/">
                <h1 className='text-4xl font-semibold'>
                        <span className="text-accent">\</span>
                        SouleCode
                        <span className="text-accent">/</span>
                    </h1>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link,index)=>{
                    return <Link href={link.path} key={index} className={`${link.path==pathmane && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all `}>{link.name} </Link>
                }) }
            </nav>
        </SheetContent>
    </Sheet>
  )
}

export default MobileNav