import Hero from "./sections/Hero";
import About from "./sections/About";
import Psicoterapia from "./sections/Psicoterapia";
import Coaching from "./sections/Coaching";
import Contact from "./sections/Contact";

const Page = () => (
  <div className="bg-[#b3d9ff] font-gilda text-cyan-600 overflow-hidden">
    <Hero />
    <About />
    <Psicoterapia />
    <Coaching />
    <Contact />
  </div>
);

export default Page;
