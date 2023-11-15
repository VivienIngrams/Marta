import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Quicksand, Cormorant_Garamond, } from "next/font/google";

const quicksand = Quicksand({
  weight: ["400"],
  variable: "--font-quicksand",
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
        className={`min-h-screen w-[100%] ${quicksand.variable} ${cormorant.variable} bg-[rgb(203,224,246)]`}
      >
        <Navbar />
        <main className="">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
