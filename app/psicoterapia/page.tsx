"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const Psicoterapia = () => {
  return (
    <section
      id="Psicoterapia"
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
          className="max-w-[400px] lg:leading-[40px] text-3xl lg:text-6xl text-cyan-700 my-12  uppercase text-center"
        >
          Psicoterapia relacional
        </motion.h1>
        <div>
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="text-justify  p-2"
          >
            A psicoterapia relacional é uma abordagem terapêutica que destaca a
            importância das relações interpessoais na promoção do bem-estar
            mental e emocional. Em meu consultório, reconheço que as conexões
            que estabelecemos com os outros desempenham um papel crucial no
            desenvolvimento pessoal e na saúde psicológica.
          </motion.p>
          <motion.p
            variants={fadeIn("down", "tween", 0.3, 1)}
            className="text-justify  p-2"
          >
            Como psicólogo especializado em psicoterapia relacional, trabalho em
            parceria com você, oferecendo um ambiente seguro e empático para
            explorar como os relacionamentos passados e presentes moldam sua
            jornada emocional.
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
            Marque uma consulta
          </Link>
        </motion.div>
        <div className="h-8 w-full border-b-white border-b-4 mx-[10vw]"></div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        className="max-w-[1240px] m-auto py-12 my-12 px-[10vw] w-[95vw] md:w-[90vw] lg:w-[80vw] border-[1px] border-orange-100 bg-white shadow-lg"
      >
        <div>
          <motion.p
            variants={fadeIn("down", "tween", 0.3, 1)}
            className="text-justify lg:text-left p-2"
          >
            No ambito da psicoterapia relacional, incentivo uma profunda
            compreensão das emoções, estilos de comunicação e padrões de apego,
            visando promover a autoconsciência e cultivar relacionamentos mais
            saudáveis. O meu compromisso é proporcionar uma experiência
            terapêutica holística e transformadora.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("down", "tween", 0.3, 1)}
        className="text-justify lg:text-left p-2"
      >
        <Image
          src="https://images.unsplash.com/photo-1512406926044-c2b194f3975a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvYWNoaW5nfGVufDB8MHwwfHx8MA%3D%3D"
          height={500}
          width={600}
          alt="Psicoterapia"
          className=" w-[95vw] md:w-[90vw] lg:w-[80vw] m-auto"
        />
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        className="max-w-[1240px] m-auto py-12 my-12 px-[10vw] w-[95vw] md:w-[90vw] lg:w-[80vw] border-[1px] border-orange-100 bg-white shadow-lg"
      >
        <div>
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="text-justify lg:text-left p-2"
          >
            Seja para lidar com desafios emocionais ou melhorar as suas
            habilidades de relacionamento, os meus serviços de psicoterapia
            relacional estão aqui para ajudar a construir conexões mais
            gratificantes consigo mesmo e com os outros. Explore a jornada rumo
            ao crescimento pessoal e à saúde mental comigo.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        whileInView="show"
        className="max-w-[1240px] m-auto  my-[40px] px-[10vw] w-[95vw] md:w-[90vw] lg:w-[80vw]"
      >
        <div>
          <motion.p
            variants={fadeIn("down", "tween", 0.2, 1)}
            className="text-justify lg:text-left p-4 text-sky-50 bg-cyan-700 border-[1px] border-orange-100 shadow-lg"
          >
            Aqui estão alguns exemplos de áreas em que a Psicoterapia Relacional
            pode ser particularmente eficaz:
          </motion.p>
          <div className="md:grid md:grid-cols-2">
            <div></div>
            <motion.ul
              initial="hidden"
              whileInView="show"
              className="pl-8 md:p-0"
            >
              <motion.li
                variants={fadeIn("right", "tween", 0.2, 1)}
                className="text-left p-2 "
              >
                Depressão
              </motion.li>
              <motion.li
                variants={fadeIn("right", "tween", 0.4, 1)}
                className="text-left p-2 "
              >
                Ansiedade
              </motion.li>
              <motion.li
                variants={fadeIn("right", "tween", 0.6, 1)}
                className="text-left p-2 "
              >
                Fobias
              </motion.li>
              <motion.li
                variants={fadeIn("right", "tween", 0.8, 1)}
                className="text-left p-2 "
              >
                Redução de Stress em todas as áreas da sua vida (ex. trabalho,
                familiar, conjugal, etc.)
              </motion.li>
              <motion.li
                variants={fadeIn("right", "tween", 1, 1)}
                className="text-left p-2 "
              >
                Eventos traumáticos
              </motion.li>
              <motion.li
                variants={fadeIn("right", "tween", 1.2, 1)}
                className="text-left p-2 "
              >
                Desenvolvimento Emocional
              </motion.li>
              <motion.li
                variants={fadeIn("right", "tween", 1.4, 1)}
                className="text-left p-2 "
              >
                Distúrbios alimentares
              </motion.li>
              <motion.li
                variants={fadeIn("right", "tween", 1.6, 1)}
                className="text-left p-2 "
              >
                Períodos de Transição
              </motion.li>
              <motion.li
                variants={fadeIn("right", "tween", 1.8, 1)}
                className="text-left p-2 "
              >
                Crescimento e desenvolvimento pessoal
              </motion.li>
              <motion.li
                variants={fadeIn("right", "tween", 2, 1)}
                className="text-left p-2 "
              >
                Questões existenciais
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={fadeIn("down", "tween", 0.6, 1)}
        className="flex flex-col w-full items-center "
      >
        <Link
          href="/#contact"
          className="mb-24 p-2 text-lg shadow-md text-sky-50 shadow-gray-400   bg-cyan-700"
        >
          Conctactar a Marta
        </Link>
      </motion.div>
    </section>
  );
};

export default Psicoterapia;
