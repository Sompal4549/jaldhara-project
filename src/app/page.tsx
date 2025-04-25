import HomeSection from "@/components/Sections/HomeSection";
import AboutSection from "@/components/Sections/AboutUsSection";
import ProductsSection from "@/components/Sections/ProductsSection";
import WhySection from "@/components/Sections/WhySection"
import WeDeal from "@/components/Sections/WeDeal"
import Certifications from "@/components/Sections/Certifications"
import Testimonial from "@/components/Sliders/Testimonial"

export default function Home() {
  return (
    <main className="min-h-screen w-[100vw] flex flex-col items-center justify-center max-w-[100%] bg-primary overflow-hidden">
      <div className="w-full max-w-[1440px] mx-auto">
      <HomeSection />
      <AboutSection />
      <ProductsSection />
      <WhySection />
      <WeDeal />
      <Testimonial/>
      <Certifications />
      </div>
    </main>
  );
}
