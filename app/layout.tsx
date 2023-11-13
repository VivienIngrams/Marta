import "./globals.css";
import { PT_Sans, Poiret_One, Gilda_Display } from "next/font/google";
import Image from "next/image";

const backgroundImg = "/images/background.jpg";


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
        className={`min-h-screen bg-[#ded8ca] ${pt.variable} ${gilda.variable} ${poiret.variable}`}
      >
        <Image
          className="absolute top-0 left-0 right-0 bottom-0 min-h-screen bg-fixed bg-center bg-cover h-full w-full "
          src={backgroundImg}
          width={1000}
          height={1500}
          alt=""
        />
        <div className="absolute top-0 left-0 w-full min-h-screen bg-cover  bg-[rgba(0,0,0,0.5)] h-full"></div>
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}