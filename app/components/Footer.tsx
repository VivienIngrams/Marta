import React from "react";

import Image from "next/image";
import { BsInstagram } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="flex flex-col items-center pt-12">
        <div className=" flex space-x-4">
          <a
            target="_blank"
            href="https://www.instagram.com/"
            rel="noopener noreferrer"
          >
            <BsInstagram size={25} color="#0d9488" />
          </a>
        </div>
        <a
          href="/#Contact"
          className="mb-2 flex flex-col items-center uppercase leading-10 text-cyan-700 space-x-2 text-sm "
        >
          Marque jà uma consulta
        </a>
      </div>
    </footer>
  );
};

export default Footer;
