"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <nav className="fixed w-full h-100 font-gilda tracking-widest font-bold text-cyan-600 z-[100]">
        <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
          <div className="relative w-[120px] h-[60px] md:w-[250px] md:h-[70px]">
          <Image src="/Logo.png" alt="Logo" width={200} height={200} />
          </div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Projects
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <HiOutlineMenuAlt3
            size={25}
            onClick={handleNav}
            className="md:hidden"
          />
        </div>

        <div
          className={
            nav
              ? "fixed right-0 top-0 w-[100%] sm:w-[100%] tracking-widest h-screen ease-in duration-800  bg-cyan-600 text-[#b3d9ff] z-50"
              : "fixed right-[-150%] top-0 p-10 ease-in duration-800"
          }
        >
          <div>
            <div className="flex w-full p-2 items-center justify-between">
              <Link href="/" onClick={handleNav}>
                <Image src="/Logo.png" alt="Logo" width={100} height={50} />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full p-1 m-2 cursor-pointer"
              >
                <AiOutlineClose size={25} color="cyan-600" />
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
      </nav>
    </>
  );
};

export default Navbar;
