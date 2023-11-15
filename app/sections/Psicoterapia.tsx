import React from 'react'
import Image from "next/image";

const Psicoterapia = () => {
  return (
    <section id="psicoterapia">
    <div className="relative h-screen w-full">
      <div className="relative bg-[rgb(0,0,0,0.1)] h-1/2 w-[60%] mx-auto">
      <div className="absolute -translate-y-1/10 translate-x-60 w-100 h-200 ml-20">
          <Image
            height={400}
            width={500}
            src="https://images.unsplash.com/photo-1512406926044-c2b194f3975a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvYWNoaW5nfGVufDB8MHwwfHx8MA%3D%3D"
            alt="psicoterapia"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute translate-y-1/4 -translate-x-60 w-500 h-400 ml-20">
          <div className="flex flex-col justify-center items-center m-10 pr-40 text-xl">
           <div>Psicoterapia </div>
           <div className="p-10 ">Psicoterapia Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam beatae eos adipisci, illo repudiandae deleniti inventore similique neque ipsa quisquam harum ullam facilis eligendi sit dolorum qui distinctio quo voluptatem. </div>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default Psicoterapia