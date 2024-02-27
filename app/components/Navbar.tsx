"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import useRouter

import { AiOutlineClose } from "react-icons/ai";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const Navbar: React.FC = () => {
  const [nav, setNav] = useState(false);
  const [navBg, setNavBg] = useState("transparent");
  const [textColor, setTextColor] = useState("text-cyan-700"); // Add pathname to the Navbar component
  const path = usePathname(); 

  useEffect(() => {
    const handleNavBg = () => {
      if (window.scrollY >= 900) {
        setNavBg("rgb(227,237,246,0.7)");
      } else {
        setNavBg("transparent");
      }
    };
    window.addEventListener("scroll", handleNavBg);
    return () => {
      window.removeEventListener("scroll", handleNavBg);
    };
  }, []);

  useEffect(() => {
    // Function to handle text color based on path and scroll position
    const handleTextColor = () => {
      // Check if it's the homepage
      if (path === "/") {
        // Change text color to cyan-700 on the homepage
        setTextColor("text-cyan-700");
      } else {
        // For other pages, check scroll position
        if (window.scrollY >= 60) {
          // Change text color to cyan-700 if scrolled down more than 100 pixels
          setTextColor("text-cyan-700");
        } else {
          // Change text color to sky-50 if not scrolled down enough
          setTextColor("text-sky-50");
        }
      }
    };
  
    // Immediately set the text color based on the initial path
    handleTextColor();
  
    // Add event listener for scrolling
    window.addEventListener("scroll", handleTextColor);
    return () => {
      window.removeEventListener("scroll", handleTextColor);
    };
  }, [path]);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <>
      <nav
        style={{ backgroundColor: `${navBg}` }}
        className={`fixed w-full h-100 p-4 text-lg xl:text-xl font-marcellus uppercase tracking-tight font-light ${textColor} z-[100]`}
      >
        {/* Desktop nav */}
        <div className="relative flex justify-center items-center w-full h-full 2xl:px-16">
          <div>
            <ul className="hidden lg:flex">
              <Link href="/">
                {/* Apply different text color based on whether it's home page or not */}
                <li className="ml-10 hover:border-b ">
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="ml-10 hover:border-b">
                  Sobre
                </li>
              </Link>
              <Link href="/psicoterapia">
                <li className="ml-10 hover:border-b">
                  Psicoterapia Relacional
                </li>
              </Link>
              <Link href="/services">
                <li className="ml-10 hover:border-b">
                  Outros Serviços
                </li>
              </Link>
              <Link href="/#contact">
                <li className="ml-10 hover:border-b">
                  Contacto
                </li>
              </Link>
            </ul>
          </div>
        </div>

            {/* Mobile nav */}
        <div>
          <HiOutlineMenuAlt1
            size={25}
            color={textColor}
            onClick={handleNav}
            className="lg:hidden "
          />
        </div>
        <div
          className={
            nav
              ? "fixed right-0 top-0 left-0 w-full  tracking-widest h-screen ease-in duration-800  bg-cyan-700 text-sky-100 z-50"
              : "fixed right-[-150%] top-0 p-10 ease-in duration-800"
          }
        >
          <div className="w-full">
            <div className="relative flex w-full items-center justify-between z-200">
              <Link href="/" onClick={handleNav}>
                <Image src="/NewLogoDark.png" alt="Logo" width={300} height={180} />
              </Link>
              <div
                onClick={handleNav}
                className="absolute top-2 right-2 rounded-full p-1 m-2 cursor-pointer"
              >
                <AiOutlineClose size={25} color="cyan-700" />
              </div>
            </div>
          </div>
          <div className="p-5 flex-col mt-4 text-center">
            <ul>
              <Link href="/">
                <li className="py-5 hover:border-b" onClick={handleNav}>
                  Home
                </li>
              </Link>
              <Link href="/about">
                <li className="py-5 hover:border-b" onClick={handleNav}>
                  Sobre
                </li>
              </Link>
              <Link href="/psicoterapia">
                <li className="py-5 hover:border-b" onClick={handleNav}>
                  Psicoterapia Relacional
                </li>
              </Link>
              <Link href="/services">
                <li className="py-5 hover:border-b" onClick={handleNav}>
                  Outros Serviços
                </li>
              </Link>
              <Link href="/#contact">
                <li className="py-5 hover:border-b" onClick={handleNav}>
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
