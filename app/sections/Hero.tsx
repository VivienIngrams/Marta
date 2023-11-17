import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <section id="Hero" className="">
    <div className="">
      {/* Unsplash image */}
      <div className="w-full" style={{ backgroundPosition: 'center bottom' }}>
        <Image
          className="absolute -top-35 left-0 right-0 bottom-0 min-h-screen bg-fixed bg-center bg-cover h-full w-full "
          src="https://images.unsplash.com/photo-1444044205806-38f3ed106c10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={1400}
          height={700}
          alt="background image"
        />
        <div className="absolute top-0 left-0 w-full min-h-screen bg-cover bg-[rgb(179,217,255,0.6)]" />

        {/* Logo overlay */}
        <div className="relative top-0 left-0 w-full min-h-screen flex items-center justify-center">
          <div className="-translate-y-1/3">
            <Link href="/">
              <Image
                src="/Logo-removebg.png"
                alt="Logo"
                width={300}
                height={300}
              />
            </Link>
          </div>
        </div>
      </div >
    </div>
  </section>
);

export default Hero;
