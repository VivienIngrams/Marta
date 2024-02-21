"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Psi = () => {
  return (
    <section id="Psi">
      <div className="h-[130vh] xs:h-[110vh] md:h-screen lg:w-[70vw] mx-auto py-8 ">
        <div className="relative h-full w-full lg:w-[90%] mx-auto">
          <div className="absolute top-0 left-0 bg-white  border-cyan-700 border-[1px] w-[90%] h-[75%] lg:h-[75%] lg:w-[60%] ">
            <div className=" w-full h-full flex justify-center items-center ">
              <div className=" xl:m-10  xl:text-2xl">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className=" p-10 "
                >
                  <motion.h1
                    variants={fadeIn("left", "tween", 0.1, 1)}
                    className="uppercase text-xl md:text-2xl xl:text-3xl p-2 xl:p-4"
                  >
                    Psicoterapia
                  </motion.h1>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.3, 1)}
                    className="p-2 xl:p-4 text-base  leading-tight "
                  >
                    A minha abordagem psicoterapêutica visa criar um ambiente
                    acolhedor, onde juntos, com base numa relação segura,
                    podemos explorar questões pessoais e desenvolver estratégias
                    eficazes para superar desafios.
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.5, 1)}
                    className="p-2 xl:p-4 text-base  leading-tight "
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
                      className=" p-2 text-base shadow-md text-sky-50 shadow-gray-400   bg-cyan-700"
                    >
                      Saber mais
                    </Link>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
          <div className=" absolute bottom-0 right-0 h-[30%] w-[90%] md:w-[45%] md:h-[45%]  ">
            <Image
              fill
              src="https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hY2hpbmd8ZW58MHwwfDB8fHww"
              alt="Psicoterapia"
              sizes="10vw 50vw"
              className=" md:absolute object-cover object-center border-[1px] border-cyan-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
{
  /* <div className=" lg:h-[90vh] w-full h-screen">
        <div className=" border-b-white border-4 mx-[10vw]">
          <div className="relative  border-cyan-700 border-[1px]">
            <Image
              height={400}
              width={500}
              src="https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hY2hpbmd8ZW58MHwwfDB8fHww"
              alt="Psi"
              className="object-cover object-center  lg:scale-100 "
            />
          </div>
          <div className="bg-white lg:h-1/2 w-[80%] lg:w-[60%] max-w-[900px] max-h-[400px] mx-auto my-20 lg:my-10">
            <div className="absolute lg:-translate-y-1/10 lg:translate-x-60 h-100 w-200 lg:ml-20 lg:mr-10">
              <div className="flex flex-col justify-center items-center lg:m-10 lg:pr-40 lg:text-xl">
                <motion.div>
                  {" "}
                  <motion.h2
                    variants={fadeIn("up", "tween", 0.2, 1)}
                    className="my-[8px] text-2xl uppercase font-cormorant"
                  >
                    Psi
                  </motion.h2>
                </motion.div>
                <div className="p-10">
                  Psi Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Magnam, illo repudiandae deleniti inventore similique neque
                  ipsa quisquam harum ullam facilis eligendi sit dolorum qui
                  distinctio quo voluptatem.{" "}
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div> */
}

export default Psi;
