import HomeSection from "@/components/Sections/HomeSection";
import PageLayout from "@/components/Ui/PageLayout";
import AboutUs from "@/components/Sections/AboutPage/AboutUs"

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
      </PageLayout>
    </>
  )
}