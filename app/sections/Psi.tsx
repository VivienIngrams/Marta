"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Psi = () => {
  return (
    <section id="Psi">
      <div className="h-[130vh] xs:h-[110vh] md:h-screen lg:w-[90vw] mx-auto my-8 ">
        <div className="relative h-full w-full lg:w-[90%] mx-auto">
          <div className="absolute top-0 left-0 bg-white  border-orange-100 border-[1px] w-[90%] h-[75%] xl:h-[75%] xl:w-[60%] ">
            <div className=" w-full h-full flex justify-center items-center ">
              <div className=" xl:m-10 text-md lg:text-lg xl:text-xl">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className=" p-10 "
                >
                  <motion.h1
                    variants={fadeIn("left", "tween", 0.1, 1)}
                    className="uppercase text-3xl xl:text-3xl p-2 xl:p-4 big-first-letter"
                  >
                    Psicoterapia
                  </motion.h1>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.3, 1)}
                    className="p-2 xl:p-4  text-justify leading-tight "
                  >
                    A minha abordagem psicoterapêutica visa criar um ambiente
                    acolhedor, onde juntos, com base numa relação segura,
                    podemos explorar questões pessoais e desenvolver estratégias
                    eficazes para superar desafios.
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.5, 1)}
                    className="p-2 xl:p-4 text-justify  leading-tight "
                  >
                    Quer esteja em busca de crescimento pessoal ou esteja a
                    enfrentar dificuldades específicas, estou aqui para oferecer
                    suporte e orientação.
                  </motion.p>
                  <motion.div
                    variants={fadeIn("left", "tween", 0.7, 1)}
                    className="flex flex-col  items-start p-2 xl:p-4"
                  >
                    <Link
                      href="/about"
                      className=" p-2 text-lg shadow-md text-sky-50 shadow-gray-400   bg-cyan-700"
                    >
                      Saber mais
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-0 right-0 h-[30%] w-[90%] xl:w-[45%] xl:h-[45%] min-h-[200px] max-w-[600px] mb-12">
            <Image
              fill
              src="https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hY2hpbmd8ZW58MHwwfDB8fHww"
              alt="Psicoterapia"
              sizes="10vw 50vw"
              className=" md:absolute object-cover object-center border-[1px] border-orange-100"
            />
          </div>
        </div>
      </div>
      <div className="h-4 border-b-white border-b-4 mx-[10vw]"/>

    </section>
  );
};

export default Psi;
