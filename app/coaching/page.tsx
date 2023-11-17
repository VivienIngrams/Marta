import React from "react";
import Image from "next/image";

const Coaching = () => {
  return (
    <section id="Coaching">
       <div className="relative">
   
      <div className="w-full" style={{ backgroundPosition: 'center bottom' }}>
        <Image
          className="absolute -top-35 left-0 right-0 bottom-0 min-h-screen bg-fixed bg-center bg-cover h-full w-full "
          src="https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hY2hpbmd8ZW58MHwwfDB8fHww"
          height={500}
          width={600}
          alt="Coaching"
        />
        <div className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-[rgb(179,217,255,0.6)]" />
<div className="h-screen w-full"></div>

        
      </div >
    </div>
     
    </section>
  );
};

export default Coaching;
