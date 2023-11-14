import Hero from "./sections/Hero";
import About from "./sections/About";
import Psicoterapia from "./sections/Psicoterapia";
import Coaching from "./sections/Coaching";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Page = () => (
  <div className="bg-[#b3d9ff] font-gilda text-cyan-700 overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Psicoterapia />
    <Coaching />
    <Contact />
    <Footer />
  </div>
);

export default Page;
