import Link from "next/link";

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
      <div className="max-w-[1240px] m-auto px-2 w-[80%] ">
        <div className=" pb-12 tracking-widest uppercase  text-center">
          <TypingText title="Contacto" textStyles="text-center" />
        </div>
            <p className="my-4 text-center w-full ">Marque jà a sua consulta...</p>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* left */}
          <div className="lg:col-span-2 max-w-screen lg:w-full lg:mb-20">
            <ContactForm />
          </div>
          {/* right */}
          <div className="lg:col-span-2 w-full h-full ">
            <div>
              <div className="flex flex-col justify-start -ml-6 lg:ml-16 lg:mt-20 p-3">
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
                    <a href="https://instagram.com/@martaguimaraes.psi" target="_blank">
                      <p>@martaguimaraes.psi</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Contact;
