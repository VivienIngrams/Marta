import React from "react";
import Image from "next/image";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className=" flex flex-col items-center -my-10 bg-cyan-700 font-marcellus font-light text-xs lg:text-2xl text-sky-100">
        <div className="flex flex-row justify-center items-center space-x-2 lg:space-x-10">
          <p className="hidden lg:block lg:ml-20">+351 965 421 000</p>
          <Image
            src="/Logo.png"
            alt="Logo"
            width={330}
            height={250}
            className="-pt-5 overflow-hidden h-[120px] w-[140px] lg:h-[200px] lg:w-[230px]"
          />
          <div className="flex flex-col items-start justify-center p-1">
            <p className="py-2 lg:hidden">+351 965 421 000</p>
            <a
              href="mailto:martaguimaraes@gmail.com"
              className="py-2"
              target="_blank"
            >
              martaguimaraes@gmail.com
            </a>
          </div>
        </div>
      <div className="flex justify-between -mt-5 w-full ">
        <Link href="/">
          <div className="rounded-full  p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            <HiOutlineChevronDoubleUp />
          </div>
        </Link>
        <Link href="/">
          <div className="rounded-full p-2 cursor-pointer hover:scale-105 ease-in duration-300">
            <HiOutlineChevronDoubleUp />
          </div>
        </Link>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
