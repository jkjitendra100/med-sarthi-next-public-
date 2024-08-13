import HeroSection from "@/myConponents/landingPage/HeroSection";
import Section2 from "@/myConponents/landingPage/Section2";
import Section3 from "@/myConponents/landingPage/Section3";
import Section4 from "@/myConponents/landingPage/Section4";
import Section5 from "@/myConponents/landingPage/Section5";
import Section6 from "@/myConponents/landingPage/Section6";
import setupLocatorUI from "@locator/runtime";

export default function Home() {
  if (process.env.NODE_ENV === "development") {
    setupLocatorUI();
  }

  return (
    <div>
      <HeroSection />
      {/* Most searched specialist */}
      <Section4 />
      {/* Common symptoms */}
      <Section5 />
      {/* General Physician */}
      <Section6 />
      {/* Best hospitals */}
      <Section2 />
      {/* Best doctors */}
      <Section3 />
    </div>
  );
}
