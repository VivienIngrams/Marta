import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TypingText } from "../components/CustomTexts";

const Psicoterapia = () => {
  return (
    <section id="psicoterapia">
        <div className="flex justify-center m-20">
        <TypingText title="Meus serviços" textStyles="text-center" />
        </div>
      <div className="relative h-screen lg:h-[80vh] w-full">
        <div className="relative bg-[rgb(0,0,0,0.1)] h-screen lg:h-1/2 w-[80%] lg:w-[60%] max-w-[900px] max-h-[400px] mx-auto my-40 lg:my-10">
          <div className="absolute -translate-y-[140px] lg:translate-y-[100px] lg:translate-x-[500px]  w-100 h-200 lg:ml-20">
            <Image
              height={400}
              width={500}
              src="https://images.unsplash.com/photo-1512406926044-c2b194f3975a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvYWNoaW5nfGVufDB8MHwwfHx8MA%3D%3D"
              alt="psicoterapia"
              className="object-cover object-center scale-110 lg:scale-100 "
            />
          </div>
          <div className="absolute translate-y-1/6 lg:mr-[60px] ">
            <div className="flex flex-col justify-center items-center lg:m-10 lg:pr-[180px] lg:text-xl">
              <div className="text-4xl">Psicoterapia </div>
              <div className="p-10 ">
                Psicoterapia Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Magnam beatae eos adipisci, illo repudiandae deleniti
                inventore similique neque ipsa quisquam harum ullam facilis
                eligendi sit dolorum qui distinctio quo voluptatem.{" "}
              </div>
            <div className="flex flex-col w-full items-center">
              <Link
                href="/about"
                className=" p-2 text-md shadow-md  text-sky-100 shadow-gray-400   bg-cyan-700"
              >
                Saber mais
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Psicoterapia;
