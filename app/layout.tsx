import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Ubuntu, Marcellus } from "next/font/google";

const ubuntu = Ubuntu({
  weight: ["300"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
  preload: false,
});
const marcellus = Marcellus({
  weight: ["400"],
  variable: "--font-marcellus",
  subsets: ["latin"],
  preload: false,
});


export const metadata = {
  title: "Marta Guimarães",
  description: "Psicoterapia relacional online e presencial no Porto",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-[100%] ${ubuntu.variable} ${marcellus.variable} bg-[rgb(227,237,246)]`}
      >
        <Navbar />
        <main className=" font-marcellus text-cyan-700 ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
