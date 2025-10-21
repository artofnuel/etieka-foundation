"use client";
import React from "react";
import OurProjects from "./components/OurProjects";
import { MotionSlideIn } from "../lib/FramerAnimations";

const page = () => {
  return (
    <main>
      <MotionSlideIn direction="bottom">
        <OurProjects />
      </MotionSlideIn>
    </main>
  );
};

export default page;
