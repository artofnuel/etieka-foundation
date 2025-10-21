"use client";
import { MotionSlideIn } from "@/app/lib/FramerAnimations";
import React from "react";

const SupportUs = () => {
  return (
    <MotionSlideIn direction="bottom">
      <main className="w-full bg-background/50 h-full rounded-xl">
        <section className="p-5 flex flex-col xl:items-end gap-5 justify-center w-full h-full">
          <h5 className="text-2xl xl:text-7xl font-bold">Support Etieka</h5>
          <p className="text-base font-medium xl:text-right">
            Your support can help us reach more communities
            <br className="hidden xl:block" /> and create a brighter future for
            those in need.
          </p>
          <button className="w-full xl:w-fit hover:bg-background transition-all duration-300 ease-in-out bg-white rounded-xl p-3 px-5 text-background font-bold mt-10 hover:text-white">
            Support Us
          </button>
        </section>
      </main>
    </MotionSlideIn>
  );
};

export default SupportUs;
