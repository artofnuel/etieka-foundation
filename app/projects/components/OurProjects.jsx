import React from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaBookOpen,
  FaBox,
  FaHeart,
  FaLeaf,
} from "react-icons/fa";

const financialAid = [
  {
    icon: <FaGraduationCap className="text-2xl " />,
    title: "Undergraduate Scholarships",
    desc: "Scholarships for higher education",
  },
  {
    icon: <FaBriefcase className="text-2xl " />,
    title: "Vocational Training Grants",
    desc: "Grants for vocational training",
  },
  {
    icon: <FaBookOpen className="text-2xl " />,
    title: "Educational Resource Support",
    desc: "Support for educational resources",
  },
];

const communityProjects = [
  {
    icon: <FaBox className="text-2xl " />,
    title: "Food Security Initiatives",
    desc: "Food assistance programs",
  },
  {
    icon: <FaHeart className="text-2xl " />,
    title: "Healthcare Access Projects",
    desc: "Healthcare access improvements",
  },
  {
    icon: <FaLeaf className="text-2xl " />,
    title: "Environmental Sustainability Projects",
    desc: "Environmental sustainability efforts",
  },
];

const OurProjects = () => {
  return (
    <main className="max-w-7xl mx-auto w-full h-auto mt-20 p-5">
      <h1 className="headingTexts mb-2">Our Projects</h1>
      <p className="mb-8 text-white">
        Explore the initiatives driving positive change in our community.
      </p>

      {/* Financial Aid Section */}
      <section className="mb-10">
        <h2 className="headingTexts mb-2">Financial Aid</h2>
        <p className="mb-6 text-white">
          Our financial aid program provides crucial support to students and
          families facing economic challenges. We offer scholarships, grants,
          and resources to help individuals pursue their educational goals and
          achieve financial stability.
        </p>
        <ul className="space-y-4 mb-6">
          {financialAid.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-gray-50 rounded-2xl p-4"
            >
              <div className="size-12 flex justify-center items-center bg-background text-white rounded-xl">
                {item.icon}
              </div>
              <div>
                <div className="text-background font-semibold">
                  {item.title}
                </div>
                <div className="text-background text-sm">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
        <button className="bg-white text-background cursor-pointer font-semibold px-5 py-2 rounded-2xl transition">
          Apply Now
        </button>
      </section>

      {/* Community Projects Section */}
      <section className="mb-4">
        <h2 className="text-xl font-bold mb-2">Community Projects</h2>
        <p className="mb-6 text-white+">
          Our community projects focus on improving the quality of life for
          residents through various initiatives. We address critical needs such
          as food security, healthcare access, and environmental sustainability.
        </p>
        <ul className="space-y-4 mb-6">
          {communityProjects.map((item, idx) => (
            <li
              key={idx}
              className="flex items-center gap-4 bg-gray-50 rounded-lg p-4"
            >
              <div className="size-12 flex justify-center items-center bg-background text-white rounded-xl">
                {item.icon}
              </div>
              635
              <div>
                <div className="font-semibold text-background">
                  {item.title}
                </div>
                <div className="text-background text-sm">{item.desc}</div>
              </div>
            </li>
          ))}
        </ul>
        <button className="bg-white text-background cursor-pointer font-semibold px-5 py-2 rounded-2xl transition">
          Support a Project
        </button>
      </section>
    </main>
  );
};

export default OurProjects;
