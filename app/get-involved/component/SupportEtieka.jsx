import { MotionSlideIn } from "@/app/lib/FramerAnimations";
import React from "react";

const SupportEtieka = () => {
  return (
    <main className="text-white space-y-5 w-full max-w-7xl mx-auto mt-12 pt-5">
      <MotionSlideIn direction="top">
        <h1 className="headingTexts">Get Involved</h1>
      </MotionSlideIn>
      <section className="flex flex-col xl:flex-row gap-5">
        <MotionSlideIn className="w-full xl:w-1/2 " direction="left">
          <section className="h-[300px] rounded-2xl bg-white text-background p-5 flex flex-col gap-3 items-start xl:items-end justify-center">
            <p className="headingTexts font-semibold">
              Support through Donations
            </p>
            <p className="xl:text-right">
              Your contribution can make a significant difference in the lives
              of those we serve. Every donation, no matter the size, helps us to
              continue our mission of providing financial aid and communal
              support.
            </p>
            <button className="bg-background text-white mt-3 cursor-pointer font-semibold px-5 py-2 rounded-2xl transition">
              Donate Now
            </button>
          </section>
        </MotionSlideIn>
        <MotionSlideIn className="w-full xl:w-1/2 " direction="right">
          <section className="h-[300px] rounded-2xl bg-white text-background p-5 flex flex-col gap-3 items-start justify-center">
            <p className="headingTexts font-semibold">Support as a Volunteer</p>
            <p>
              Join our team of dedicated volunteers and help us make a positive
              impact in our community. We offer a variety of opportunities to
              match your skills and interests.
            </p>
            <button className="bg-background text-white mt-3 cursor-pointer font-semibold px-5 py-2 rounded-2xl transition">
              Fill Our Form
            </button>
          </section>
        </MotionSlideIn>
      </section>
    </main>
  );
};

export default SupportEtieka;
