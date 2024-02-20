"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TypingText } from "../components/CustomTexts";
import { fadeIn } from "@/utils/motion";

const About = () => (
  <section id="About" className="relative z-10 min-h-screen text-center text-cyan-700 ">
    <div className="relative w-full h-[200px] bg-cyan-700">
      <div className="absolute -bottom-[2px] left-0 w-full overflow-hidden">
        <svg
          className="relative block h-[20px] lg:h-[40px] w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="rgb(227,237,246)"
            stroke="none"
          ></path>
        </svg>
      </div>
      {/* Text Overlay */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="w-full h-full flex  items-center justify-center text-sky-100 font-light tracking-widest"
      >
        <motion.p
          variants={fadeIn("down", "tween", 0.1, 0.5)}
          className="lg:text-2xl p-6 mb-4"
        >
          Psicoterapia relacional online e presencial no Porto
        </motion.p>
      </motion.div>
    </div>

    {/* Main section */}
    <div className=" flex justify-center items-center h-[80%] border-b-white border-b-4 mx-[10vw]">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="px-2 gap-8 py-10 md:max-w-[80%] mx-auto"
      >
    
        <motion.div className="w-full flex flex-col items-center justify-center ">
          <div className="lg:pb-12 tracking-widest uppercase  text-center">
            <TypingText title="Marta Guimarães" textStyles="text-center" />
          </div>
        </motion.div>
        <div className="py-12 w-full ">
        
          <motion.p
            variants={fadeIn("up", "tween", 1.5, 0.8)}
            className="text-center max-w-[80%] mx-auto lg:text-2xl "
          >
            Marta Guimarães é uma profissional comprometida que integra a
            abordagem psicológica com estratégias de coaching para ajudá-lo a
            atingir seus objetivos e superar desafios.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 1.5, 0.8)}
          className="flex flex-col w-full items-center my-12"
        >
          <Link
            href="/about"
            className=" p-2 text-lg shadow-md font-ubuntu  text-sky-100 shadow-gray-400   bg-cyan-700"
          >
            Conhecer a Marta
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default About;
