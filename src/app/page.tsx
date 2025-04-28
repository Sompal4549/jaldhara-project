import PageLayout from "@/components/Ui/PageLayout";
import HomeSection from "@/components/Sections/HomeSection";
import AboutSection from "@/components/Sections/AboutUsSection";
import ProductsSection from "@/components/Sections/ProductsSection";
import WhySection from "@/components/Sections/WhySection";
import WeDeal from "@/components/Sections/WeDeal";
import Certifications from "@/components/Sections/Certifications";
import Testimonial from "@/components/Sliders/Testimonial";

/**
 * 
 * @returns Home Page component
 */
export default function Home() {
  const bannerData ={
    bgImage: "/homeImage.svg",
    title: "Redefining Flow, One Pipe at",
    subTitle: "a Time",
  }
  return (
    <PageLayout>
      <HomeSection data={{...bannerData, }}/>
      <AboutSection />
      <ProductsSection />
      <WhySection />
      <WeDeal />
      <Testimonial />
      <Certifications />
    </PageLayout>
  );
}
