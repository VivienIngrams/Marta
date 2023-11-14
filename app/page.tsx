import Hero from "./sections/Hero";
import About from "./sections/About";
import Psicoterapia from "./sections/Psicoterapia";
import Coaching from "./sections/Coaching";
import Contact from "./sections/Contact";

const Page = () => (
  <div className="bg-[rgb(203,224,246)] font-gilda text-cyan-700 ">
    <Hero />
    <About />
    <Psicoterapia />
    <Coaching />
    <Contact />
  </div>
);

export default Page;
