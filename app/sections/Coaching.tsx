import Image from "next/image";
import React from "react";
import Link from "next/link";

const Coaching = () => {
  return (
    <section id="Coaching">
      <div className="relative h-screen lg:h-[80vh] w-full">
        <div className="relative bg-[rgb(0,0,0,0.1)] h-screen lg:h-1/2 w-[80%] lg:w-[60%] max-w-[900px] max-h-[400px] mx-auto my-20 lg:my-10">
          <div className="absolute -translate-y-[140px] -translate-x-[40px] lg:translate-y-[100px] lg:-translate-x-[250px] w-100 h-200 ml-20">
            <Image
              height={400}
              width={500}
              src="https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hY2hpbmd8ZW58MHwwfDB8fHww"
              alt="coaching"
              className="object-cover object-center scale-[1.5] lg:scale-100 "
            />
          </div>
          <div className="absolute lg:-translate-y-1/10 lg:translate-x-60 h-100 w-200 lg:ml-20 lg:mr-10">
            <div className="flex flex-col justify-center items-center lg:m-10 lg:pr-40 lg:text-xl">
              <div className=" text-4xl">Coaching </div>
              <div className="p-10 ">
                Coaching Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Magnam, illo repudiandae deleniti
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

export default Coaching;
