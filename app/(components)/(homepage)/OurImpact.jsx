"use client";
import { MotionSlideIn } from "@/app/lib/FramerAnimations";
import React from "react";
import { TbBuildingCommunity } from "react-icons/tb";
import { PiStudentFill } from "react-icons/pi";
import { MdVolunteerActivism } from "react-icons/md";

const OurImpact = () => {
  const impactData = [
    {
      title: "Communities Supported",
      value: "20+",
      icon: <TbBuildingCommunity size={30} />,
    },
    {
      title: "Students Empowered",
      value: "50+",
      icon: <PiStudentFill size={30} />,
    },
    {
      title: "Volunteers Involved",
      value: "75+",
      icon: <MdVolunteerActivism size={30} />,
    },
  ];

  return (
    <main className="w-full text-background py-20 bg-white overflow-hidden">
      <section className="p-5 max-w-7xl w-full h-auto mx-auto ">
        <MotionSlideIn direction="top">
          <h2 className="headingTexts">Our Impact</h2>
          <p className="my-3 xl:w-2/3">
            Our impact through the support of various brands and volunteers has
            enabled us to provide aid to several communities through financial
            aid and comprehensive support, fostering sustainable growth and
            positive change.
          </p>
          <section className="w-full grid grid-cols-1 xl:grid-cols-3 gap-5 mt-5">
            {impactData.map((item, index) => (
              <div
                key={index}
                className="bg-card flex justify-center items-start p-3 px-5 rounded-xl text-background flex-col gap-3 w-full h-[150px]"
              >
                <h3 className="text-lg xl:text-2xl flex items-center justify-between w-full">
                  {item.title} {item.icon}
                </h3>
                <p className="text-xl font-bold">{item.value}</p>
              </div>
            ))}
          </section>
        </MotionSlideIn>
      </section>
    </main>
  );
};

export default OurImpact;
