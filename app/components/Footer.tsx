import React from "react";
import Image from "next/image";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="relative h-[100px] w-full">
      <div className="absolute max-w-full -top-4 lg:-top-8 left-0 w-full overflow-hidden ">
        <svg
          className="relative block max-w-full h-[20px] lg:h-[40px] w-full"
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 230"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(14, 116, 144, 1)" offset="0%"></stop>
              <stop stopColor="rgba(227, 237, 246, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity:1 }}
            fill="url(#sw-gradient-0)"
            d="M0,161L48,149.5C96,138,192,115,288,88.2C384,61,480,31,576,49.8C672,69,768,138,864,145.7C960,153,1056,100,1152,72.8C1248,46,1344,46,1440,42.2C1536,38,1632,31,1728,30.7C1824,31,1920,38,2016,69C2112,100,2208,153,2304,168.7C2400,184,2496,161,2592,134.2C2688,107,2784,77,2880,53.7C2976,31,3072,15,3168,34.5C3264,54,3360,107,3456,138C3552,169,3648,176,3744,153.3C3840,130,3936,77,4032,49.8C4128,23,4224,23,4320,53.7C4416,84,4512,146,4608,153.3C4704,161,4800,115,4896,115C4992,115,5088,161,5184,172.5C5280,184,5376,161,5472,161C5568,161,5664,184,5760,172.5C5856,161,5952,115,6048,107.3C6144,100,6240,130,6336,153.3C6432,176,6528,192,6624,184C6720,176,6816,146,6864,130.3L6912,115L6912,230L6864,230C6816,230,6720,230,6624,230C6528,230,6432,230,6336,230C6240,230,6144,230,6048,230C5952,230,5856,230,5760,230C5664,230,5568,230,5472,230C5376,230,5280,230,5184,230C5088,230,4992,230,4896,230C4800,230,4704,230,4608,230C4512,230,4416,230,4320,230C4224,230,4128,230,4032,230C3936,230,3840,230,3744,230C3648,230,3552,230,3456,230C3360,230,3264,230,3168,230C3072,230,2976,230,2880,230C2784,230,2688,230,2592,230C2496,230,2400,230,2304,230C2208,230,2112,230,2016,230C1920,230,1824,230,1728,230C1632,230,1536,230,1440,230C1344,230,1248,230,1152,230C1056,230,960,230,864,230C768,230,672,230,576,230C480,230,384,230,288,230C192,230,96,230,48,230L0,230Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-1" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(14, 116, 144, 1)" offset="0%"></stop>
              <stop stopColor="rgba(227, 237, 246, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 50px)", opacity: 0.9 }}
            fill="url(#sw-gradient-1)"
            d="M0,184L48,157.2C96,130,192,77,288,72.8C384,69,480,115,576,130.3C672,146,768,130,864,103.5C960,77,1056,38,1152,42.2C1248,46,1344,92,1440,99.7C1536,107,1632,77,1728,69C1824,61,1920,77,2016,99.7C2112,123,2208,153,2304,141.8C2400,130,2496,77,2592,76.7C2688,77,2784,130,2880,141.8C2976,153,3072,123,3168,99.7C3264,77,3360,61,3456,65.2C3552,69,3648,92,3744,88.2C3840,84,3936,54,4032,49.8C4128,46,4224,69,4320,92C4416,115,4512,138,4608,157.2C4704,176,4800,192,4896,184C4992,176,5088,146,5184,122.7C5280,100,5376,84,5472,92C5568,100,5664,130,5760,145.7C5856,161,5952,161,6048,149.5C6144,138,6240,115,6336,118.8C6432,123,6528,153,6624,138C6720,123,6816,61,6864,30.7L6912,0L6912,230L6864,230C6816,230,6720,230,6624,230C6528,230,6432,230,6336,230C6240,230,6144,230,6048,230C5952,230,5856,230,5760,230C5664,230,5568,230,5472,230C5376,230,5280,230,5184,230C5088,230,4992,230,4896,230C4800,230,4704,230,4608,230C4512,230,4416,230,4320,230C4224,230,4128,230,4032,230C3936,230,3840,230,3744,230C3648,230,3552,230,3456,230C3360,230,3264,230,3168,230C3072,230,2976,230,2880,230C2784,230,2688,230,2592,230C2496,230,2400,230,2304,230C2208,230,2112,230,2016,230C1920,230,1824,230,1728,230C1632,230,1536,230,1440,230C1344,230,1248,230,1152,230C1056,230,960,230,864,230C768,230,672,230,576,230C480,230,384,230,288,230C192,230,96,230,48,230L0,230Z"
          ></path>
          <defs>
            <linearGradient id="sw-gradient-2" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(14, 116, 144, 1)" offset="0%"></stop>
              <stop stopColor="rgba(14, 116, 144, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 100px)", opacity:0.8 }}
            fill="url(#sw-gradient-2)"
            d="M0,23L48,30.7C96,38,192,54,288,72.8C384,92,480,115,576,111.2C672,107,768,77,864,69C960,61,1056,77,1152,69C1248,61,1344,31,1440,30.7C1536,31,1632,61,1728,72.8C1824,84,1920,77,2016,69C2112,61,2208,54,2304,49.8C2400,46,2496,46,2592,65.2C2688,84,2784,123,2880,134.2C2976,146,3072,130,3168,134.2C3264,138,3360,161,3456,157.2C3552,153,3648,123,3744,107.3C3840,92,3936,92,4032,99.7C4128,107,4224,123,4320,115C4416,107,4512,77,4608,80.5C4704,84,4800,123,4896,134.2C4992,146,5088,130,5184,111.2C5280,92,5376,69,5472,49.8C5568,31,5664,15,5760,19.2C5856,23,5952,46,6048,65.2C6144,84,6240,100,6336,95.8C6432,92,6528,69,6624,57.5C6720,46,6816,46,6864,46L6912,46L6912,230L6864,230C6816,230,6720,230,6624,230C6528,230,6432,230,6336,230C6240,230,6144,230,6048,230C5952,230,5856,230,5760,230C5664,230,5568,230,5472,230C5376,230,5280,230,5184,230C5088,230,4992,230,4896,230C4800,230,4704,230,4608,230C4512,230,4416,230,4320,230C4224,230,4128,230,4032,230C3936,230,3840,230,3744,230C3648,230,3552,230,3456,230C3360,230,3264,230,3168,230C3072,230,2976,230,2880,230C2784,230,2688,230,2592,230C2496,230,2400,230,2304,230C2208,230,2112,230,2016,230C1920,230,1824,230,1728,230C1632,230,1536,230,1440,230C1344,230,1248,230,1152,230C1056,230,960,230,864,230C768,230,672,230,576,230C480,230,384,230,288,230C192,230,96,230,48,230L0,230Z"
          ></path>
        </svg>
      </div>
      <div className=" flex flex-col items-center -my-10 bg-cyan-700 font-marcellus font-light text-xs lg:text-xl text-sky-50">
        <Image
          src="/NewLogoDark.png"
          alt="Logo"
          width={250}
          height={100}
          className="pt-2 object-cover overflow-hidden h-[90px] w-[300px]"
        />

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
