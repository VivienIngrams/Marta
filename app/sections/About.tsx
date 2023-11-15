"use client";

import { TypingText } from "../components/CustomTexts";
import Image from "next/image";

const About = () => (
  <section
    id="About"
    className="relative z-10 font-cormorant font-normal md:text-[24px] sm:text-[20px] text-[16px] text-center text-cyan-700"
  >
      {/* Bottom - Image Strip */}
      <div className="relative w-full h-[200px]">
      {/* <Image
        className="absolute bg-fixed overflow-hidden h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1444044205806-38f3ed106c10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1400}
        height={700}
        alt="background image"
      /> */}

      {/* Image Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-20 bg-cover bg-cyan-700">
        {/* Text Overlay */}
        <div className="w-full h-full flex  font-normal items-center justify-center text-sky-100">
          <p className="text-4xl">Psicoterapia e coaching online ou presencial no Porto</p>
        </div>
      </div>
    </div>
    <div className="">
    <div className="grid lg:grid-cols-4 gap-8 py-10">
      {/* left */}
      <div className="col-span-2 w-full flex items-center justify-center ">
        <div className="pb-12 tracking-widest uppercase  text-3xl text-center">
          <TypingText title="Marta Guimarães" textStyles="text-center" />
        </div>
      </div>
      <div className="col-span-2 w-full ">
        {/* right */}
        <div className="text-left p-18 font-raleway font-light md:mr-6 m-2">
          Está na hora de iniciar uma jornada de autodescoberta e crescimento
          pessoal com a orientação especializada de Marta Guimarães. Como
          profissional comprometida, Marta integra a abordagem psicológica com
          estratégias de coaching para ajudá-lo a atingir seus objetivos e
          superar desafios.
        </div>
      </div>
    </div>
        <div className="flex flex-col w-full items-center py-8">
          <button
            type="submit"
            className=" p-2 my-8 text-md shadow-md  text-sky-100 shadow-gray-400   bg-cyan-700"
            >
            Saber mais
          </button>
        </div>
        </div>

  
  </section>
);

export default About;
