"use client";

import Link from "next/link";
import { TypingText } from "../components/CustomTexts";

const About = () => (
  <section
    id="About"
    className="relative z-10  font-normal lg:text-lg text-sm text-center text-cyan-700 "
  >
    <div className="relative w-full h-[200px] bg-cyan-700">
      <div className="absolute -bottom-[1px] left-0 w-full overflow-hidden">
        <svg
          className="relative block h-[20px] lg:h-[40px] w-full"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            fill="rgb(203,224,246)"
            stroke="none"
          ></path>
        </svg>
      </div>
      {/* Text Overlay */}
      <div className="w-full h-full flex font-ubuntu items-center justify-center text-sky-100">
        <p className="lg:text-3xl">
          Psicoterapia e coaching online ou presencial no Porto
        </p>
      </div>
    </div>
    <div className="h-[80%]">
      <div className="grid lg:grid-cols-4 gap-8 py-10 md:max-w-[80%] mx-auto">
        {/* left */}
        <div className="col-span-2 w-full flex flex-col items-center justify-center ">
          <div className="lg:pb-12 tracking-widest uppercase  text-4xl text-center">
            <TypingText title="Marta Guimarães" textStyles="text-center" />
          </div>
          <div className="flex flex-col w-full items-center">
        <Link
          href="/about"
          className=" p-2 text-sm shadow-md font-ubuntu  text-sky-100 shadow-gray-400   bg-cyan-700"
        >
          Saber mais
        </Link>
      </div>
        </div>
        <div className="col-span-2 w-full ">
          {/* right */}
          <div className="text-left lg:text-lg font-ubuntu lg:py-16 tracking-widest lg:mr-16 m-4">
            Está na hora de iniciar uma jornada de autodescoberta e crescimento
            pessoal com a orientação especializada de Marta Guimarães. Como
            profissional comprometida, Marta integra a abordagem psicológica com
            estratégias de coaching para ajudá-lo a atingir seus objetivos e
            superar desafios.
          </div>
        </div>
      </div>
      
    </div>
  </section>
);

export default About;
