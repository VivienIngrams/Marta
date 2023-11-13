import "./globals.css";
import { PT_Sans, Poiret_One, Gilda_Display } from "next/font/google";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const backgroundImg = "https://images.unsplash.com/photo-1536514498073-50e69d39c6cf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVhY2VmdWx8ZW58MHx8MHx8fDA%3D";


const pt = PT_Sans({
  weight: ["400"],
  variable: "--font-pt-sans",
  subsets: ["latin"],
  preload: false,
});
const poiret = Poiret_One({
  weight: ["400"],
  variable: "--font-poiret-one",
  subsets: ["latin"],
  preload: false,
});
const gilda = Gilda_Display({ 
  weight: ["400"],
  variable: "--font-gilda-display",
  subsets: ["latin"],
  preload: false,
});

export const metadata = {
  title: "Marta Guimarães",
  description: "Psicoterapia e Coaching",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen ${pt.variable} ${gilda.variable} ${poiret.variable} bg-[#b3d9ff]`}
      >
        <Navbar />
        <Image
          className="absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-fixed bg-center bg-cover h-full w-full "
          src={backgroundImg}
          width={1000}
          height={1500}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full min-h-screen bg-cover  bg-[rgba(0,0,0,0.5)] h-full"></div>
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}