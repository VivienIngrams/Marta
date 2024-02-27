"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Services = () => {
  return (
    <section
      id="Services"
      className="relative z-10 flex flex-col text-center text-cyan-700 "
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
        className="max-w-[1240px] m-auto my-12 flex flex-col justify-center items-center px-[10vw] w-[95vw] md:w-[90vw] lg:w-[80vw]"
      >
        {/* Title */}
        <motion.h1
          variants={fadeIn("down", "tween", 0, 1)}
          className="big-first-letter max-w-[520px] lg:leading-[40px] text-3xl lg:text-6xl text-cyan-700 my-12  uppercase text-center"
        >
          Desenvolvimento pessoal
        </motion.h1>

        {/* First section */}
        <div className="text-lg lg:text-xl xl:text-2xl my-10 xl:my-24">
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="text-center  p-2"
          >
            O meu serviço de desenvolvimento pessoal está projetado para
            ajudá-lo a descobrir seu potencial máximo e viver uma vida mais
            significativa e gratificante.
          </motion.p>
        </div>
        <div className="h-8 w-full border-b-white border-b-4"></div>
      </motion.div>

      {/* Second section */}
      <div className="flex flex-col min-h-screen lg:w-[80vw] xl:mx-auto my-12">
        <div className="flex flex-col justify-end items-end">
          <motion.div
            initial="hidden"
            whileInView="show"
            className=" py-12 my-12  px-[6vw] mx-auto xl:m-0 w-[95vw] md:w-[90vw] xl:w-[40vw] border-[1px] border-orange-100 bg-white shadow-lg"
          >
            <div className="w-full h-full flex justify-center items-center ">
              <motion.p
                variants={fadeIn("down", "tween", 0.3, 1)}
                className=" text-justify xl:text-right xl:leading-tight p-2 text-md lg:text-lg   xl:text-xl"
              >
                Trata-se de um processo contínuo de autodescoberta, crescimento
                e aprimoramento que visa melhorar aspetos da sua vida pessoal,
                profissional, emocional e espiritual.
              </motion.p>
            </div>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("down", "tween", 0.3, 1)}
          className="xl:-my-8 z-100 mx-auto"
        >
          <Image
            src="https://plus.unsplash.com/premium_photo-1669748157807-30514e416843?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGElMjBwZXJzb25uZXxlbnwwfHwwfHx8MA%3D%3D"
            height={500}
            width={600}
            alt="Psicoterapia"
            className=" w-[95vw] md:w-[90vw] xl:w-[40vw] m-auto max-w-[500px]  border-[1px] border-orange-100 bg-white shadow-lg"
          />
        </motion.div>
        <div className="flex flex-col justify-start items-start z-1">
          <motion.div
            initial="hidden"
            whileInView="show"
            className="xl:relative py-16 my-12 xl:m-0 px-[6vw] m-auto w-[95vw] md:w-[90vw] xl:w-[40vw] border-[1px] border-orange-100 bg-white shadow-xl"
          >
            <div className=" xl:bottom-0 xl:right-0 w-full h-full flex justify-center items-center ">
              <motion.p
                variants={fadeIn("down", "tween", 0.3, 1)}
                className=" text-justify xl:text-left p-2 text-md lg:text-lg xl:leading-tight  xl:text-xl"
              >
                Neste âmbito, destaco a importância de identificar objetivos
                pessoais específicos, bem como melhorar relacionamentos, avançar
                na carreira, aumentar a autoestima ou encontrar um propósito de
                vida.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Middle section */}
      <motion.div
        initial="hidden"
        whileInView="show"
        className="max-w-[1240px] mx-auto py-16 my-12 px-[10vw] w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[65vw] text-sky-50 bg-cyan-700 border-[1px] border-orange-100 shadow-lg"
      >
        <div className="text-md lg:text-lg xl:m-10  xl:text-xl">
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="text-justify p-4"
          >
            Alio vários saberes, tais como terapia, mindfulness, meditação,
            definição de metas e desenvolvimento de habilidades sociais,
            intervindo em diferentes áreas da vida, incluindo saúde física,
            saúde mental, relacionamentos interpessoais, habilidades sociais,
            carreira, espiritualidade e bem-estar emocional.
          </motion.p>
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="text-justify p-4"
          >
            Ofereço uma abordagem personalizada, adaptada às necessidades únicas
            de cada pessoa, reconhecendo que o desenvolvimento pessoal não é uma
            solução única para todos.
          </motion.p>
        </div>
      </motion.div>
      <div className="max-w-[1240px] w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[65vw] mx-auto h-8 border-b-white border-b-4 my-12"></div>


      {/* Second Part */}
      <motion.div
        initial="hidden"
        whileInView="show"
        className="flex flex-col justify-center items-center "
      >
        {/* Title */}
        <motion.h1
          variants={fadeIn("down", "tween", 0, 1)}
          className="big-first-letter lg:leading-[40px] text-3xl lg:text-6xl text-cyan-700 mt-16  uppercase text-center"
        >
          workshops
          <br />e
        </motion.h1>
        <motion.h1
          variants={fadeIn("down", "tween", 0, 1)}
          className="big-first-letter max-w-[600px] lg:leading-[40px] text-3xl lg:text-6xl text-cyan-700 mb-16  uppercase text-center"
        >
          treinamento comportamental
        </motion.h1>
       
          <motion.div
            initial="hidden"
            whileInView="show"
            className="max-w-[1240px] m-auto my-16 pb-8 px-[10vw] w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[65vw] border-[1px] border-orange-100 bg-white shadow-lg"
          >
            {/* Title */}
            <motion.h1
              variants={fadeIn("down", "tween", 0, 1)}
              className=" text-2xl lg:text-4xl text-cyan-700 my-12 lg:my-24  text-left"
            >
              Benefícios de Participar:
            </motion.h1>
            <div className="text-md lg:text-lg xl:leading-tight  xl:text-xl">
              <motion.p
                variants={fadeIn("down", "tween", 0.2, 1)}
                className="text-justify p-4"
              >
                Acesso a estratégias comprovadas e baseadas em evidências para
                alcançar resultados tangíveis.
              </motion.p>
              <motion.p
                variants={fadeIn("down", "tween", 0.3, 1)}
                className="text-justify   p-4"
              >
                Aprendizado prático e interativo, com exercícios e discussões em
                grupo.
              </motion.p>
              <motion.p
                variants={fadeIn("down", "tween", 0.4, 1)}
                className="text-justify   p-4"
              >
                Networking e oportunidades de compartilhar experiências com
                outros participantes.
              </motion.p>
              <motion.p
                variants={fadeIn("down", "tween", 0.4, 1)}
                className="text-justify   p-4"
              >
                Suporte contínuo e recursos adicionais para consolidar o
                aprendizado e implementar mudanças duradouras.
              </motion.p>
            </div>
          </motion.div>
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            
            className="text-center text-lg lg:text-xl xl:text-2xl my-10 xl:my-24 max-w-[1240px] m-auto pb-8  w-[95vw] md:w-[90vw] lg:w-[80vw] xl:w-[65vw]"
          >
            O meu compromisso não termina quando a sessão termina; estarei aqui
            para fornecer suporte contínuo e orientação à medida que embarca
            nesta jornada de autodescoberta e crescimento pessoal.
          </motion.p>
          <Link
            href="/#contact"
            className="mb-24 p-2 text-lg shadow-md text-sky-50 shadow-gray-400   bg-cyan-700"
          >
            Marque jà com a Marta
          </Link>
        </motion.div>
    </section>
  );
};

export default Services;
