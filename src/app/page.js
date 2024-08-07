import CourseOfferedSection from "@/components/CourseOfferedSection";
import DeptInfo from "@/components/DeptInfo";
import DeptLogo from "@/components/DeptLogo";
import Footer from "@/components/Footer";
import HodMessage from "@/components/HodMessage";
import Toppers from "@/components/Toppers";
import HomePage from "@/app/HomePage/page";
import References from "@/components/References";
import HorizontalScrollCarousel from "@/components/HorizontalScrollCarousel";
import Acadamics from "./acadamics/page";
import LenisScroll from "@/components/LenisScroll";
// import About from "@/components/aboutUs/page";

export default function Home() {
  return (
    <LenisScroll>
      <main>
      <HomePage />
      <DeptInfo />
        <DeptLogo />
        <HorizontalScrollCarousel />
      <HodMessage />
        <Toppers />
      <References />
        <Footer />
    </main>
    </LenisScroll>
  );
}
