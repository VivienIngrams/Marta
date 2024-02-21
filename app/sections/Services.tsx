"use client";

import React from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Services = () => {
  return (
    <section id="Services">
      <div className="h-screen w-screen xl:w-[80vw] mx-auto py-20 ">
        <div className="relative h-full lg:w-[90%] md:mx-auto">
          <div className="absolute bottom-0 right-0 bg-white border-[1px] border-cyan-700 w-[90%] h-[65%] xl:h-[68%] xl:w-[53%] ">
            <div className="w-full h-full flex justify-center items-center ">
              <div className="text-md lg:text-lg xl:m-10  xl:text-xl">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="p-10 ml-8"
                >
                   <motion.h1
                    variants={fadeIn("left", "tween", 0.1, 1)}
                    className="uppercase text-3xl xl:text-3xl p-2 xl:p-4"
                  >
                    Serviços
                  </motion.h1>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.1, 1)}
                    className="p-2 xl:p-4"
                  >
                    Psicoterapia Relacional
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.3, 1)}
                    className="p-2 xl:p-4"
                  >
                    Desenvolvimento Pessoal
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.5, 1)}
                    className="p-2 xl:p-4 leading-tight"
                  >
                    Workshops e Treinamentos Comportamentais
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
          <div className=" absolute top-0 left-0 h-[40%] w-[90%] xl:w-[53%] xl:h-[68%] max-w-[600px] ">
            <Image
              fill
              src="https://images.unsplash.com/photo-1512406926044-c2b194f3975a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvYWNoaW5nfGVufDB8MHwwfHx8MA%3D%3D"
              alt="Services"
              sizes="10vw 50vw"
              className="md:absolute object-cover object-center border-[1px] border-cyan-700"
            />
            {/* <motion.div className="z-25 absolute flex justify-center items-center h-full w-full">
              <motion.h2
                variants={fadeIn("up", "tween", 0.2, 1)}
                className=" text-3xl xl:text-4xl text-sky-50 my-10 uppercase"
              >
                Serviços
              </motion.h2>
            </motion.div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
