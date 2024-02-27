"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/motion";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill, BsInstagram } from "react-icons/bs";
import { TypingText } from "../components/CustomTexts";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div
      id="contact"
      className="w-full lg:min-h-screen font-raj pb-20  text-sm lg:text-xl text-cyan-700"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="max-w-[1240px] m-auto px-2 lg:w-[80%] "
      >
        <h1
          // variants={fadeIn("down", "tween", 0, 1)}
          className=" text-3xl lg:text-6xl text-cyan-700 my-12 lg:my-20 uppercase big-first-letter text-center"
        >
          Contacto
        </h1>

        <div className="md:grid md:grid-cols-2 lg:mx-12 m-auto">
          <motion.div
            variants={fadeIn("right", "tween", 0, 0.7)}
            className="p-2 md:h-[20vh] lg:h-[30vh] flex md:justify-start text-justify"
          >
            <div>
              Estou ansiosa por trabalhar consigo e ajudar a criar uma jornada
              de autodescoberta e transformação.
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("right", "tween", 0, 0.7)}
            className="p-2 md:h-[20vh] lg:h-[30vh] flex flex-col md:justify-end text-justify"
          >
            <div>
              Não hesite em entrar em contacto para agendar uma consulta ou para
              obter mais informações sobre os serviços que disponibilizo.
            </div>
          </motion.div>
        </div>
        <p className="my-12 text-center w-full text-lg lg:text-xl font-bold uppercase">
          Marque jà a sua consulta...
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* left */}
          <div className="lg:col-span-2 max-w-screen lg:w-full lg:mb-20">
            <ContactForm />
          </div>
          {/* right */}
          <div className="lg:col-span-2 w-full h-full ">
            <div>
              <div className="flex flex-col justify-start  lg:ml-16 lg:mt-20 p-3">
                <div className="flex my-3">
                  <div className="rounded-full border-[1px] border-cyan-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                    <a href="mailto:martaguimaraes@gmail.com" target="_blank">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className=" py-2 cursor-pointer hover:scale-105 ease-in duration-300 my-2">
                    <a href="mailto:martaguimaraes@gmail.com" target="_blank">
                      <p>martavgui@gmail.com</p>
                    </a>
                  </div>
                </div>
                <div className="flex my-3">
                  <div className="rounded-full border-[1px] border-cyan-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                    <Link href="/#contact">
                      <BsTelephoneFill />
                    </Link>
                  </div>
                  <div className=" py-2 cursor-pointer hover:scale-105 ease-in duration-300 my-2">
                    <a href="https://web.whatsapp.com" target="_blank">
                      <p>+351 914 723 959</p>
                    </a>
                  </div>
                </div>
                <div className="flex my-3">
                  <div className="rounded-full border-[1px] border-cyan-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                    <a
                      href="https://instagram.com/martaguimaraes.psi"
                      target="_blank"
                    >
                      <BsInstagram />
                    </a>
                  </div>
                  <div className=" py-2 cursor-pointer hover:scale-105 ease-in duration-300 my-2">
                    <a
                      href="https://instagram.com/@martaguimaraes.psi"
                      target="_blank"
                    >
                      <p>@martaguimaraes.psi</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
