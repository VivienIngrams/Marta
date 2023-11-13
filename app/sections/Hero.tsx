import Image from "next/image";

const Hero = () => (
  <section id="Home" className="text-cyan-600">
 
      <a
        href="/#About"
        className="flex w-full justify-center items-center flex-col absolute z-10"
      >
       Marta Guimarães
      </a>

    <div
        className="relative w-full max-h-350 overflow-hidden md:-mt-[20px] -mt-[12px]"
      >
        <a href="#services">
          <div className=" flex justify-end  -mt-[50px] pr-[20px] relative z-10">
          
          </div>
        </a>
     </div>
  </section>
);

export default Hero;