import { MotionSlideIn } from "@/app/lib/FramerAnimations";
import React from "react";

const JoinUs = () => {
  return (
    <MotionSlideIn direction="top">
      <main className="w-full bg-background/50 h-full rounded-xl">
        <section className="p-5 flex flex-col items-start gap-5 justify-center w-full h-full">
          <h5 className="text-2xl xl:text-7xl font-bold">Join Etieka</h5>
          <p className="text-base font-medium">
            Do you want aid as a Volunteer?
            <br /> Every bit of assistance helps.
          </p>
          <button className="w-full xl:w-fit hover:bg-background transition-all duration-300 ease-in-out bg-white rounded-xl p-3 px-5 text-background font-bold mt-10 hover:text-white">
            Join Us
          </button>
        </section>
      </main>
    </MotionSlideIn>
  );
};

export default JoinUs;
