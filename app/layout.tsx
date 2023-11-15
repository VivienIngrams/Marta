import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { PT_Sans, Cormorant_Garamond, } from "next/font/google";

const pt = PT_Sans({
  weight: ["400"],
  variable: "--font-pt-sans",
  subsets: ["latin"],
  preload: false,
});
const cormorant = Cormorant_Garamond({
  weight: ["400"],
  variable: "--font-cormorant-garamond",
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
        className={`min-h-screen w-[100%] ${pt.variable} ${cormorant.variable} bg-[#b3d9ff]`}
      >
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
