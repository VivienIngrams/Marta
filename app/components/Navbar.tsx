
'use client';

import { useState } from 'react';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { navVariants } from '@/utils/motion';
import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from 'react-icons/hi';


const Navbar: React.FC  = () => {

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className=" text-white py-3 first:relative"
  >
    <div onClick={handleNav}
      className=" mx-auto cursor-pointer flex justify-between gap-8"
    >
      <h2 className="font-bold text-sm md:text-lg leading-[30.24px] tracking-widest">
        Marta Guimarães
      </h2>
      <div >  <HiOutlineMenuAlt3 size={25}  />
</div>
    </div>
  </motion.nav>
   <div
   className={
     nav
       ? "fixed right-0 top-0 w-[50%] sm:w-[30%] tracking-widest h-screen ease-in duration-500 bg-black text-white z-50"
       : "fixed right-[-150%] top-0 p-10 ease-in duration-500"
   }
 >
   <div>
     <div className="flex w-full p-2 items-center justify-between">
       <Link href="/" onClick={handleNav}>
            <h2 className="font-bold text-sm md:text-lg leading-[30.24px] tracking-widest">
            Marta Guimarães
            </h2>   
       </Link>
       <div
         onClick={handleNav}
         className="rounded-full p-1 m-2 cursor-pointer"
       >
         <AiOutlineClose size={25} color="white" />
       </div>
     </div>
   </div>
   <div className="p-5 flex-col mt-10 text-center">
     <ul>
       <Link href="/">
         <li
           className="py-5 text-sm uppercase hover:border-b"
           onClick={handleNav}
         >
           Home
         </li>
       </Link>
       <Link href="/#About">
         <li
           className="py-5 text-sm uppercase hover:border-b"
           onClick={handleNav}
         >
           About
         </li>
       </Link>
       <Link href="/#Psicoterapia">
         <li
           className="py-5 text-sm uppercase hover:border-b"
           onClick={handleNav}
         >
          Psicoterapia
   
         </li>
       </Link>
       <Link href="/#Coaching">
         <li
           className="py-5 text-sm uppercase hover:border-b"
           onClick={handleNav}
         >
          Coaching
   
         </li>
       </Link>
       <Link href="/#Contact">
         <li
           className="py-5 text-sm uppercase hover:border-b"
           onClick={handleNav}
         >
            Contacto
    
         </li>
       </Link>
     </ul>
      </div>
  </div>
   </>
)};

export default Navbar;