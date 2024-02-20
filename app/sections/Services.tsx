"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";

const Services = () => {
  return (
    <section id="Services">
      <div className=" h-screen w-[70vw] mx-auto py-28 ">
        <div className="relative w-full h-[90%] lg:w-[90%] mx-auto">
          <div className="z-1 absolute top-0 left-0 h-[60%] w-[60%] lg:w-[55%] lg:h-[65%]  ">
            <Image
              fill
              src="https://images.unsplash.com/photo-1512406926044-c2b194f3975a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvYWNoaW5nfGVufDB8MHwwfHx8MA%3D%3D"
              alt="Services"
              sizes="10vw 50vw"
              className="absolute object-cover object-center border-[1px] border-cyan-700"
            />
            <motion.div className="z-25 absolute flex justify-center items-center h-full w-full">
              <motion.h2
                variants={fadeIn("up", "tween", 0.2, 1)}
                className=" text-2xl lg:text-5xl text-cyan-700 my-10 uppercase tracking-widest"
              >
                Services
              </motion.h2>
            </motion.div>
          </div>
          <div className="absolute bottom-0 right-0 bg-white  border-cyan-700 border-[1px] w-[60%] h-[60%] lg:h-[65%] lg:w-[55%] ">
            <div className="w-full h-full flex justify-center items-center ">
              <div className="text-lg lg:m-10  lg:text-2xl">
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: false, amount: 0.25 }}
                  className="p-10 ml-6"
                >
                  <motion.p
                    variants={fadeIn("left", "tween", 0.1, 1)}
                    className="p-4"
                  >
                    Psicoterapia Relacional
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.3, 1)}
                    className="p-4"
                  >
                    Desenvolvimento Pessoal
                  </motion.p>
                  <motion.p
                    variants={fadeIn("left", "tween", 0.5, 1)}
                    className="p-4"
                  >
                    Workshops e Treinamentos Comportamentais
                  </motion.p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;