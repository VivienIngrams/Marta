import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Ubuntu, Cormorant_Garamond, } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
  preload: false,
});
const cormorant = Cormorant_Garamond({
  weight: ["700"],
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
        className={`min-h-screen w-[100%] ${ubuntu.variable} ${cormorant.variable} bg-[rgb(203,224,246)]`}
      >
        <Navbar />
        <main className="bg-[rgb(203,224,246)] font-ubuntu text-cyan-700 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
