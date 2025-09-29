import Image from "next/image";
import HomeHero from "./(components)/(homepage)/HomeHere";
import OurImpact from "./(components)/(homepage)/OurImpact";
import RecentProject from "./(components)/(homepage)/RecentProject";
import OurTeam from "./(components)/(homepage)/OurTeam";
import SupportUs from "./(components)/(homepage)/SupportUs";
import JoinUs from "./(components)/(homepage)/JoinUs";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <OurImpact />
      <RecentProject />
      {/* <OurTeam /> */}
      <div
        id="get-involved"
        className="w-full h-auto bg-white py-20 overflow-hidden p-5"
      >
        <div className="w-full h-[500px] mx-auto gap-10 max-w-7xl flex flex-col xl:flex-row items-center justify-center">
          <SupportUs />
          <JoinUs />
        </div>
      </div>
    </main>
  );
}
