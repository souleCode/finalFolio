"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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
  const [isOpen, setIsOpen] = useState(false);
  const pathmane = usePathname();

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger className="flex items-center justify-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mb-20 text-2xl text-center mt-15">
          <Link href="/">
            <h1 className='text-4xl font-semibold'>
              <span className="text-accent">\</span>
              SouleCode
              <span className="text-accent">/</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col items-center justify-center gap-8">
          {links.map((link, index) => (
            <Link
              href={link.path}
              key={index}
              className={`${link.path == pathmane && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
              onClick={handleLinkClick}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav