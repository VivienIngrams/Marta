"use client";

import {TypingText} from "../components/CustomTexts";


const About = () => (
  <section id='About' className="relative z-10 md:m-40 m-2 font-normal md:text-[26px] sm:text-[20px] text-[18px] text-center text-cyan-600 h-screen">
    <div   className=" mx-auto ${styles.flexCenter} flex-col">
      <TypingText title="|Quem sou" textStyles="text-center" /> Quem sou
      </div>
  </section>
);

export default About;