import { MotionSlideIn } from "@/app/lib/FramerAnimations";
import React from "react";

const RecentProject = () => {
  const projectData = [
    {
      title: "Building a School",
      description:
        "Constructing a new school building to provide access to quality education for children in a remote village.",
      image: "",
    },
    {
      title: "Methodist Church Repairs",
      description:
        "Constructing a new school building to provide access to quality education for children in a remote village.",
      image: "",
    },
    {
      title: "Palm Tree Plantaintion",
      description:
        "Constructing a new school building to provide access to quality education for children in a remote village.",
      image: "",
    },
  ];
  return (
    <main className="w-full max-w-7xl mx-auto text-white py-20 p-5 overflow-hidden">
      <MotionSlideIn direction="bottom">
        <h4 className="headingTexts">Recent Projects</h4>
        <section className="mt-8 grid grid-cols-1 xl:grid-cols-3 w-full h-auto gap-5">
          {projectData.map((project, index) => (
            <div
              className="w-full h-auto rounded-xl overflow-hidden bg-white"
              key={index}
            >
              <div className="w-full h-[300px] bg-background border-2 border-white rounded-t-xl"></div>
              <div className="p-2 text-background">
                <p className="text-lg font-semibold">{project.title}</p>
                <p className="text-sm mt-2 line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </section>
      </MotionSlideIn>
    </main>
  );
};

export default RecentProject;
