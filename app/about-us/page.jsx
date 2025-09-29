import React from "react";
import AboutHero from "./component/AboutHero";
import OurApproach from "./component/OurApproach";
import { MotionSlideIn } from "../lib/FramerAnimations";

const page = () => {
  return (
    <main>
      <MotionSlideIn direction="bottom">
        <AboutHero />
      </MotionSlideIn>
      <MotionSlideIn direction="top">
        <OurApproach />
      </MotionSlideIn>
    </main>
  );
};

export default page;
