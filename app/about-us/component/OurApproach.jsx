import Link from "next/link";
import React from "react";
import { FaCalendarAlt, FaMapMarkerAlt, FaRegFileAlt } from "react-icons/fa";

const milestones = [
  {
    year: "2010",
    title: "Foundation Launch",
    description: "Established the Etieka Foundation with initial programs.",
    icon: <FaCalendarAlt className="text-xl text-gray-500" />,
  },
  {
    year: "2015",
    title: "Expansion to New Regions",
    description: "Expanded operations to serve additional communities.",
    icon: <FaMapMarkerAlt className="text-xl text-gray-500" />,
  },
  {
    year: "2020",
    title: "Impact Report",
    description:
      "Published a comprehensive report highlighting our achievements and impact.",
    icon: <FaRegFileAlt className="text-xl text-gray-500" />,
  },
];

const OurApproach = () => {
  return (
    <main className="bg-white w-full h-auto py-10 p-5 text-background">
      <section className="max-w-7xl mx-auto ">
        <h2 className="font-bold text-2xl mb-2">Our Approach</h2>
        <p className="mb-8">
          We employ a holistic approach that combines financial aid with
          educational and developmental support. Our programs are designed to
          address the root causes of poverty and empower individuals to achieve
          long-term self-sufficiency. We work closely with local communities to
          ensure our initiatives are relevant and effective.
        </p>
      </section>
      <section className="max-w-7xl mx-auto ">
        <h2 className="font-bold text-xl mb-4">Milestones</h2>
        <div className="flex w-full flex-col xl:flex-row xl:h-[270px] gap-10">
          <ul className="space-y-8 relative w-full xl:w-2/3">
            {milestones.map((m, i) => (
              <li key={i} className="flex  items-start gap-4 relative">
                <div className="flex flex-col items-center">
                  {m.icon}
                  {/* {i < milestones.length - 1 && (
                    <span className="w-px h-16 bg-gray-200 block mx-auto"></span>
                  )} */}
                </div>
                <div className="p-2 pl-5 py-3 w-full bg-background rounded-2xl text-white">
                  <span className="font-semibold">
                    {m.year}: {m.title}
                  </span>
                  <br />
                  <p className="text-sm">{m.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="w-full xl:w-1/3 h-[150px] rounded-2xl group bg-background flex border-2 overflow-hidden border-background justify-center items-center relative">
            <Link
              href="/get-involved"
              className="w-3/4 px-4 h-32 flex flex-col justify-center items-center rounded-2xl group-hover:w-full group-hover:h-full bg-white group-hover:rounded-none transition-all ease-in-out duration-500"
            >
              <h3 className="font-semibold text-2xl group-hover:text-4xl  transition-all ease-in-out duration-700">
                Want to Support Us?
              </h3>
              <p className="text-lg group-hover:animate-pulse p-2 bg-background text-white mt-3 rounded-2xl px-5">
                Join us
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default OurApproach;
