import HomeSection from "@/components/Sections/HomeSection";
import PageLayout from "@/components/Ui/PageLayout";
import AboutUs from "@/components/Sections/AboutPage/AboutUs"
import { Metadata } from "next";
import OurStory from "@/components/Sections/AboutPage/OurStory"
export const metadata: Metadata = {
  title: "About Jaldhara Polytubes",
  description: "We are pioneering the future of piping solutions in an era defined by precision, sustainability, and innovation. Our approach blends cutting-edge technology, eco-conscious practices, and unparalleled durability to shape the next generation of infrastructure.",
};

export default function About() {
  const bannerData = {
    bgImage: "/connecting-pipes.svg",
    title: "Jaldhara Polytubes",
    subTitle: "",
    mainTitle: "About",
    bottom: true,
    description: "Discover our legacy...",
  };

  return (
    <>
      <PageLayout>
        <HomeSection data={bannerData} />
        <AboutUs/>
        <OurStory />
      </PageLayout>
    </>
  )
}