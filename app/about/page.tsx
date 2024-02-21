"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const About = () => {
  return (
    <section
      id="About"
      className="relative z-10 min-h-screen text-center text-cyan-700 "
    >
      <div className="relative w-full h-[100px] bg-cyan-700">
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
        <div
          id="contact"
          className="w-full lg:min-h-screen font-raj pb-20  text-sm lg:text-xl text-cyan-700"
        ></div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="max-w-[1240px] m-auto px-2 lg:w-[80%] "
        >
          <motion.h1
            variants={fadeIn("down", "tween", 0, 1)}
            className=" text-3xl lg:text-6xl text-cyan-700 my-12 lg:my-20 uppercase  text-center"
          >
            Sobre Marta
          </motion.h1>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
