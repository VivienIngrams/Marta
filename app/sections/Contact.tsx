import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill, BsInstagram } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { TypingText } from "../components/CustomTexts";

const Contact: React.FC = () => {
  return (
    <div
      id="Contact"
      className="w-full lg:h-screen font-raj py-20 text-cyan-700"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <div className=" pb-12 tracking-widest uppercase font-poiret font-bold text-3xl text-center">
          <TypingText title="|Contacto" textStyles="text-center" />
        </div>
        {/* left */}
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full ">
            <div className="relative  hover:scale-105 ease-in duration-300">
              <p>Get in touch</p>
            </div>
            <div className="m-4 lg:my-12">
              <p className="pt-1 font-pt font-bold text-md">
                Psicoterapia e coaching
              </p>
              <p className="pt-6 font-pt">Online e presencial no Porto</p>
            </div>
            <div>
              <div className="flex items-center justify-start p-3">
                <div className="rounded-full border-[1px] border-cyan-700 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                  <a href="mailto:martaguimaraes@gmail.com" target="_blank">
                    <AiOutlineMail />
                  </a>
                </div>
                <div className="rounded-full border-[1px] border-cyan-700 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                  <Link href="/#contact">
                    <BsFillPersonLinesFill />
                  </Link>
                </div>
                <div className="rounded-full border-[1px] border-cyan-700 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
                  <BsInstagram  />
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="col-span-3 w-full ">
            <div className="p-6 text-cyan-700">Contact Form</div>
          </div>
        </div>
        <div className="flex justify-center py-2 ">
          <Link href="/">
            <div className="rounded-full border-[1px] border-cyan-700 p-2 cursor-pointer hover:scale-105 ease-in duration-300 m-2">
              <HiOutlineChevronDoubleUp />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
