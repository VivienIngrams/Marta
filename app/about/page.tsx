"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Link from "next/link";

const About = () => {
  return (
    <section
      id="About"
      className="relative z-10 lg:[200px] flex flex-col text-center text-cyan-700 "
    >
      {/* Top border */}
      <div className="relative w-full h-[65px] md:h-[100px] bg-cyan-700">
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
      </div>
      {/* Main */}
      <motion.div
        initial="hidden"
        whileInView="show"
        className="max-w-[1240px] m-auto  my-[120px] px-[10vw] w-[95vw] md:w-[90vw] lg:w-[80vw] border-[1px] border-orange-100 bg-white shadow-lg"
      >
        {/* Title */}
        <motion.h1
          variants={fadeIn("down", "tween", 0, 1)}
          className=" text-3xl lg:text-6xl text-cyan-700 my-12 lg:my-20 uppercase text-center"
        >
          Sobre Marta
        </motion.h1>
        <div>
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="text-justify lg:text-left p-2"
          >
            Olá! Sou a Marta, uma psicóloga dedicada ao crescimento pessoal e ao
            desenvolvimento saudável das relações interpessoais. Com uma vasta
            experiência como formadora na área comportamental e uma
            especialização em Psicoterapia Relacional, o meu objetivo é oferecer
            suporte emocional e promover mudanças significativas na vida das
            pessoas.
          </motion.p>
          <motion.p
            variants={fadeIn("down", "tween", 0.3, 1)}
            className="text-justify lg:text-left p-2"
          >
            Sou apaixonada por compreender a complexidade da mente humana e, ao
            longo dos anos, tenho mergulhado profundamente na psicologia
            comportamental e na psicoterapia relacional.
          </motion.p>
          <motion.p
            variants={fadeIn("down", "tween", 0.4, 1)}
            className="text-justify lg:text-left p-2"
          >
            Atualmente, estou focada na minha especialização em Psicoterapia
            Relacional, uma abordagem que valoriza a importância das relações
            interpessoais na construção do bem-estar emocional. A minha prática
            é fundamentada em conhecimentos sólidas, aliada a uma abordagem
            empática e colaborativa.
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("down", "tween", 0.6, 1)}
          className="flex flex-col w-full items-center my-12"
        >
          <Link
            href="/#contact"
            className=" p-2 text-lg shadow-md text-sky-50 shadow-gray-400   bg-cyan-700"
          >
            Conhecer a Marta
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
