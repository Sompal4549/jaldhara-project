import type { Metadata } from "next";
import { Manrope, Syne, Inter, Poppins} from "next/font/google";
import "./globals.css";
import Header from "@/components/Navigations/Header"
import Footer from "@/components/Navigations/Footer"
const manrope = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
  display:"swap",
});

const syne = Syne({
  variable: "--font-syne-sans",
  display:"swap",
  subsets: ['latin-ext'],
  weight:['400','500','600','700','800']
});
const inter = Inter({
  variable:"--font-inter-sans",
  subsets:['latin'],
  display:"swap",
})
const poppins = Poppins({
  variable: "--font-poppins-sans",
  subsets: ['latin-ext','latin'],
  weight:['400','500','600','700','800'],
  display:"swap",
})

export const metadata: Metadata = {
  title: "Jaldhara Polytubes",
  description: "Redefining Flow, One Pipe at a Time",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable} ${syne.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
