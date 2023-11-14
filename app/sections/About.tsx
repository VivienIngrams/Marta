"use client";

import { TypingText } from "../components/CustomTexts";

const About = () => (
  <section
    id="About"
    className="relative z-10 md:m-20 m-2 font-normal md:text-[26px] sm:text-[20px] text-[18px] text-center text-cyan-700 h-screen"
  >
    <div className=" pb-12 -mt-20 tracking-widest uppercase font-poiret font-bold text-3xl text-center">
      <TypingText title="|Quem sou" textStyles="text-center" />
    </div>
    <div className="font-gilda">
      Está na hora de iniciar uma jornada de autodescoberta e crescimento
      pessoal com a orientação especializada de Marta Guimarães. Como
      profissional comprometida, Marta integra a abordagem psicológica com
      estratégias de coaching para ajudá-lo a atingir seus objetivos e superar
      desafios.
    </div>
    <div className="font-gilda">
      Marta é uma psicóloga e coach dedicada, apaixonada por ajudar indivíduos a
      navegarem pelas complexidades da vida e alcançarem seu pleno potencial.
      Sua abordagem calorosa e empática cria um ambiente de apoio para explorar
      questões emocionais, comportamentais e desenvolvimento pessoal.
    </div>
  </section>
);

export default About;
