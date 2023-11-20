import React from "react";
import Image from "next/image";
import Link
 from "next/link";

const Coaching = () => {
  return (
    <section id="Coaching">

    <div className="">
      {/* Unsplash image */}
      <div className="w-full" style={{ backgroundPosition: 'center bottom' }}>
        <Image
          className="absolute top-0 left-0   bg-fixed bg-center bg-cover h-1/2 w-full "
          src="https://images.unsplash.com/uploads/14122810486321888a497/1b0cc699?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hY2hpbmd8ZW58MHwwfDB8fHww"
          width={1400}
          height={700}
          alt="background image"
        />
        <div className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-[rgb(179,217,255,0.6)]" />

        {/* Ooverlay */}
        <div className="relative top-0 left-0 w-full min-h-screen flex items-center justify-center">
          <div className="-translate-y-1/3">
            <h1>Coaching</h1>
          </div>
        </div>
      </div >
    </div>
  </section>

  );
};

export default Coaching;
