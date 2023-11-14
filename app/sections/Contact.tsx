import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsTelephoneFill, BsInstagram } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { TypingText } from "../components/CustomTexts";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  return (
    <div
      id="Contact"
      className="w-full lg:min-h-screen font-raj py-20 text-cyan-700"
    >
      <div className="max-w-[1240px] m-auto px-2 w-full">
        <div className=" pb-12 tracking-widest uppercase font-poiret font-bold text-3xl text-center">
          <TypingText title="|Contacto" textStyles="text-center" />
        </div>
        <div className="grid lg:grid-cols-4 gap-8">
          {/* left */}
          <div className="col-span-2 w-full ">
            <ContactForm />
          </div>
          {/* right */}
          <div className="col-span-2  w-full h-full ">
            <div className="m-4">
              <p className="pt-1 font-pt font-bold text-md">
                Psicoterapia e coaching
              </p>
              <p className="pt-6 font-pt">Online e presencial no Porto</p>
            </div>
            <div>
              <div className="flex flex-col  p-3">
                <div className="flex m-4">
                  <div className="rounded-full border-[1px] border-cyan-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                    <a href="mailto:martaguimaraes@gmail.com" target="_blank">
                      <AiOutlineMail />
                    </a>
                  </div>
                  <div className=" p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                    <a href="mailto:martaguimaraes@gmail.com" target="_blank">
                      <p>martaguimaraes@gmail.com</p>
                    </a>
                  </div>
                </div>
                <div className="flex m-4">
                  <div className="rounded-full border-[1px] border-cyan-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                    <Link href="/#contact">
                      <BsTelephoneFill />
                    </Link>
                  </div>
                  <div className=" p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                    <a href="https://web.whatsapp.com" target="_blank">
                      <p>+ 351 695 432 100</p>
                    </a>
                  </div>
                </div>
                <div className="flex m-4">
                  <div className="rounded-full border-[1px] border-cyan-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                    <a
                      href="https://instagram.com/@martaguimaraes.psi"
                      target="_blank"
                    >
                      <BsInstagram />
                    </a>
                  </div>
                  <div className=" p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
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
