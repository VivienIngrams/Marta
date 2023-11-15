"use client";

import { TypingText } from "../components/CustomTexts";
import Image from "next/image";

const About = () => (
  <section id="About" className="relative z-10 font-cormorant font-normal md:text-[24px] sm:text-[20px] text-[16px] text-center text-cyan-700 h-screen">
    {/* Section 1 */}
    <div className="pb-12 -mt-20 tracking-widest uppercase  text-3xl text-center">
      <TypingText title="Marta Guimarães" textStyles="text-center" />
    </div>

    {/* Section 2 */}
    <div className=" md:m-10 m-2">
      Está na hora de iniciar uma jornada de autodescoberta e crescimento pessoal com a orientação especializada de Marta Guimarães. Como profissional comprometida, Marta integra a abordagem psicológica com estratégias de coaching para ajudá-lo a atingir seus objetivos e superar desafios.
    </div>
    <div className=" md:m-10 m-2">
      Marta é uma psicóloga e coach dedicada, apaixonada por ajudar indivíduos a
      navegarem pelas complexidades da vida e alcançarem seu pleno potencial.
      Sua abordagem calorosa e empática cria um ambiente de apoio para explorar
      questões emocionais, comportamentais e desenvolvimento pessoal.
    </div>
    <div className="flex flex-col items-center">
        <button
          type="submit"
          className=" p-2 mt-4 text shadow-lg rounded-3xl font-light border-[1px] border-cyan-700"
        >
          Saber mais
        </button>
      </div>

    {/* Section 3 - Image Strip */}
    <div className="relative w-full h-[300px] mt-8">
      <Image
        className="absolute bg-fixed overflow-hidden h-full w-full object-cover"
        src="https://images.unsplash.com/photo-1444044205806-38f3ed106c10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1400}
        height={700}
        alt="background image"
      />

      {/* Image Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-20 bg-cover bg-[rgba(157,199,240,0.7)]">
        {/* Text Overlay */}
        <div className="w-full h-full flex  font-normal items-center justify-center text-cyan-700">
          <p className="text-4xl">Psicoterapia e coaching online ou presencial no Porto</p>
        </div>
      </div>
    </div>
  </section>
);

export default About;

