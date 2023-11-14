import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { PT_Sans, Poiret_One, Gilda_Display } from "next/font/google";

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
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
