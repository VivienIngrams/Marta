import Image from "next/image";
import Link from "next/link";

const Hero = () => (
  <section id="Hero" className="relative text-cyan-600 sm:py-16 xs:py-8 py-12">
    <div className="lg:w-[80%] w-[100%] mx-auto relative">
      {/* Unsplash image */}
      <div className="flex items-center justify-center">
        <div className="relative">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1562874724-b33411b38141?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aGFybW9ueXxlbnwwfHwwfHx8Mg%3D%3D"
            width={500}
            height={300}
            alt="background image"
          />

          {/* Logo overlay */}
          <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link href="/">
              <Image src="/Logo-removebg.png" alt="Logo" width={400} height={400} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
