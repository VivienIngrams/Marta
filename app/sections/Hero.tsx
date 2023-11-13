import Image from "next/image";

const Hero = () => (
  <section id="Home" className="text-black">
 
      <a
        href="/#About"
        className="flex w-full justify-center items-center flex-col absolute z-10"
      >
       Marta Guimarães
      </a>

    <div
        className="relative w-full max-h-350 overflow-hidden md:-mt-[20px] -mt-[12px]"
      >
        <Image
          src="https://images.unsplash.com/photo-1560743173-567a3b5658b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
          width={1200}
          height={500}
          alt={"Dogs"}
          className="object-cover w-full"
        />
        <a href="#services">
          <div className=" flex justify-end  -mt-[50px] pr-[20px] relative z-10">
            <Image src="/Paw.png" alt="Paw" height={70} width={70} />
          </div>
        </a>
     </div>
  </section>
);

export default Hero;