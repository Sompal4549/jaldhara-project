import HomeSection from "@/components/Sections/HomeSection";
import AboutSection from "@/components/Sections/AboutUsSection";
import ProductsSection from "@/components/Sections/ProductsSection";
import WhySection from "@/components/Sections/WhySection"
import WeDeal from "@/components/Sections/WeDeal"
import Certifications from "@/components/Sections/Certifications"
export default function Home() {
  return (
    <main className="min-h-screen w-[100vw] flex flex-col items-center justify-center max-w-[100%] overflow-hidden">
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <WhySection />
      <WeDeal />
      <Certifications />
    </main>
  );
}
