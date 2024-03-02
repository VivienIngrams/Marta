'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import { HiOutlineChevronDoubleDown } from "react-icons/hi";
import { fadeIn } from "@/utils/motion";

const Hero = () => (
  <section id="Hero" className="">
    <div className="h-screen">
      {/* Unsplash image */}
      <div className="w-full z-10" style={{ backgroundPosition: "center bottom" }}>
        <Image
          className="absolute top-0 left-0 bottom-0 min-h-screen bg-fixed bg-center bg-cover h-full w-full "
          src="https://images.unsplash.com/photo-1444044205806-38f3ed106c10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={1400}
          height={700}
          alt="background image"
        />
        <div className="absolute top-0 left-0 w-full min-h-screen h-full bg-cover bg-[rgb(227,237,246,0.6)]" />

        {/* Logo overlay */}
        <div className="relative left-0 w-full min-h-screen flex items-center justify-center">
          <div className="relative pl-6 -pt-6">
            <Link href="/">
              <Image
                src="/NewLogo-simple.png"
                alt="Logo"
                width={500}
                height={400}
              />
            </Link>
            <div className="absolute inset-0 flex items-center justify-center">
              <h1 className="pt-20 sm:pt-32 xl:pt-20 text-md xs:text-lg md:text-2xl  pr-6 md:pr-12 xl:pr-24 tracking-widest uppercase text-center big-first-letter">
                Marta Guimarães
              </h1>
            </div>
          </div>
        </div>
        <motion.div initial="hidden"
        whileInView="show" variants={fadeIn("down", "tween", 0.8, 0.5)} className="absolute bottom-6 w-full flex justify-center">
          <div className="rounded-full p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            <HiOutlineChevronDoubleDown  />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
