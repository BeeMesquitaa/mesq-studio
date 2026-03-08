"use client";
import HeroSection from "./hero-section";
import Awards from "./awards";
import Footer from "../home/footer";
import Navigation from "@/components/common/navigation";

const StudioInject = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
      <Awards />
      <Footer />
    </div>
  );
};

export default StudioInject;
