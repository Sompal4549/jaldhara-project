import HomeSection from "@/components/Sections/HomeSection";
import PageLayout from "@/components/Ui/PageLayout";

export default function About() {
  const bannerData = {
    bgImage: "/images/connecting-pipes.svg",
    title: "Jaldhara Polytubes",
    subTitle: "",
    mainTitle: "About",
    bottom: true,
    des: "Discover our legacy...",
  };

  return (
    <>
      <PageLayout>
        <HomeSection data={bannerData} />
      </PageLayout>
    </>
  )
}