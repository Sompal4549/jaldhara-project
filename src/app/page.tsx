import Image from "next/image";
import HomeSection from "@/components/Sections/HomeSection"
export default function Home() {
  return (
    <main className="min-h-screen w-[100vw] flex flex-col items-center justify-center max-w-[100%] overflow-hidden">
      <HomeSection />
      <h1 className="text-5xl font-heading font-inter-sans text-white mb-6">
        Welcome to My Themed App
      </h1>

      <p className="text-white font-manrope-sans mb-10 text-center max-w-xl">
        This is a custom themed Next.js app using TailwindCSS. Typography, colors, and spacing are all customized!
      </p>
      <p className="text-white font-poppins-sans mb-10 text-center max-w-xl">
        This is a custom themed Next.js app using TailwindCSS. Typography, colors, and spacing are all customized!
      </p>
      <button className="bg-primary text-white px-6 py-3 rounded-2xl hover:bg-secondary transition font-syne-sans">
        Get Started
      </button>
      <Image alt="file icon" src="./file.svg" width={100} height={50} />
    </main>
  );
}
