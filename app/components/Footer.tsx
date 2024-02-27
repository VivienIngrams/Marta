import React from "react";
import Image from "next/image";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="relative flex flex-col items-center -my-10 bg-cyan-700 font-marcellus font-light text-xs lg:text-xl text-sky-50">
      <div className="absolute -top-[2px] left-0 w-full overflow-hidden">
  <svg
    className="relative block h-[20px] lg:h-[40px] w-full transform rotate-180"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1200 120"
    preserveAspectRatio="none"
  >
    <path
      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
      fill="rgb(14 116 144)"
      stroke="none"
    ></path>
    <path
      d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
      fill="rgb(227,237,246)" 
      stroke="none"
    ></path>
  </svg>
</div>

        {/* <div className="flex flex-row justify-center items-center space-x-2 lg:space-x-10"> */}
          {/* <p className="hidden lg:block lg:ml-20">+351 965 421 000</p> */}
          <Image
            src="/NewLogoDark.png"
            alt="Logo"
            width={250}
            height={100}
            className="pt-6 object-cover overflow-hidden h-[100px] w-[340px] lg:h-[120px] lg:w-[400px]"
          />
          {/* <div className="flex flex-col items-start justify-center p-1">
            <p className="py-2 lg:hidden">+351 914 723 959</p>
            <a
              href="mailto:martaguimaraes@gmail.com"
              className="py-2"
              target="_blank"
            >
              martavgui@gmail.com
            </a>
          </div> */}
        {/* </div> */}
      <div className=" z-0 flex justify-between -mt-5 w-full ">
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
