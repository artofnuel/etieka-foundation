import { MotionSlideIn } from "@/app/lib/FramerAnimations";
import React from "react";

const HomeHero = () => {
  return (
    <main className="pageHero">
      <MotionSlideIn direction="bottom">
        <section className="max-w-7xl mx-auto h-full flex justify-center items-center w-full p-5">
          <div className="w-full h-full bg-white rounded-xl overflow-hidden shadow-lg relative">
            <div className="absolute w-full h-full text-background flex flex-col justify-end p-5">
              <h1 className="text-xl xl:text-7xl font-bold">
                Building Futures
                <br />
                Empowering Communities
              </h1>
              <p className="mt-3 xl:w-2/3 text-base">
                The Etieka Foundation is dedicated to providing financial aid
                and communal support to underserved communities, fostering
                sustainable development and creating lasting positive change.
              </p>
            </div>
          </div>
        </section>
      </MotionSlideIn>
    </main>
  );
};

export default HomeHero;
