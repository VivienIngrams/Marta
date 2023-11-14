"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("transparent");

  useEffect(() => {
    const handleNavBg = () => {
        if(window.scrollY >= 900) {
        setNavBg('rgb(203,224,246,0.7)')
      } else {
        setNavBg('transparent')
      }
    }
    window.addEventListener('scroll', handleNavBg)
    return () => {
      window.removeEventListener('scroll', handleNavBg);
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav  style={{backgroundColor: `${navBg}`}} className="fixed w-full h-100 font-gilda tracking-widest font-semibold text-cyan-800 z-[100]">
        <div className=" relative flex justify-center items-center w-full h-full p-4 2xl:px-16">
            <div>
            <ul className="hidden md:flex">
              <Link href="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>
              <Link href="/about">
                <li className="ml-20 text-sm uppercase hover:border-b">
                  About
                </li>
              </Link>
              <Link href="/psicoterapia">
                <li className="ml-20 text-sm uppercase hover:border-b">
                 Psicoterapia
                </li>
              </Link>
              <Link href="/coaching">
                <li className="ml-20 text-sm uppercase hover:border-b">
                  Coaching
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-20 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
            <div>
              <HiOutlineMenuAlt1
                size={25}
                onClick={handleNav}
                className="md:hidden -mt-4"
              />
            </div>
        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[100%] sm:w-[100%] tracking-widest h-screen ease-in duration-800  bg-cyan-700 text-[#b3d9ff] z-50"
              : "fixed right-[-150%] top-0 p-10 ease-in duration-800"
          }
        >
          <div>
            <div className="flex w-full p-2 items-center justify-between">
              <Link href="/" onClick={handleNav}>
                <Image src="/Logo-dark.png" alt="Logo" width={100} height={50} />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full p-1 m-2 cursor-pointer"
              >
                <AiOutlineClose size={25} color="cyan-700" />
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
              <Link href="/about">
                <li
                  className="py-5 text-sm uppercase hover:border-b"
                  onClick={handleNav}
                >
                  About
                </li>
              </Link>
              <Link href="/psicoterapia">
                <li
                  className="py-5 text-sm uppercase hover:border-b"
                  onClick={handleNav}
                >
                  Psicoterapia
                </li>
              </Link>
              <Link href="/coaching">
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
      </nav>
    </>
  );
};

export default Navbar;
