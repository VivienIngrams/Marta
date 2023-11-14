import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex flex-col items-center -my-10 bg-cyan-700 font-gilda text-[#B3D9FF]">
        <div className="flex flex-row justify-center items-center space-x-5">
          <p className="hidden md:block md:ml-20">+351 965 421 000</p>
          <Image
            src="/Logo-dark.png"
            alt="Logo"
            width={200}
            height={200}
            className="-pt-5 overflow-hidden"
          />
          <div className="flex flex-col items-start justify-center">
            <p className="py-2 md:hidden">+351 965 421 000</p>
            <a
              href="mailto:martaguimaraes@gmail.com"
              className="py-2"
              target="_blank"
            >
              martaguimaraes@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
