import Image from "next/image";
import React from "react";

const AboutHero = () => {
  return (
    <main className="w-full h-auto mt-20 p-5">
      <div className="space-y-5 mx-auto max-w-7xl">
        <h1 className="headingTexts">About Etieka Foundation</h1>
        <p>
          Our mission is to empower communities through financial aid and
          comprehensive support, fostering sustainable growth and positive
          change.
        </p>
      </div>

      <section className="w-full h-auto xl:h-[500px] flex flex-col xl:flex-row gap-5 my-10 mb-20 mx-auto max-w-7xl">
        <div className="w-full xl:w-2/3 h-full flex flex-col gap-5">
          <div className="bg-white text-background p-5 rounded-xl w-full h-full flex flex-col gap-5">
            <h2 className="headingTexts">Our History</h2>
            <p>
              Founded in 2010 by Sarah Etieka, the Etieka Foundation began as a
              small initiative to support local families facing economic
              hardship. Over the years, it has grown into a leading organization
              providing financial assistance, educational programs, and
              community development projects across several regions. Our journey
              is marked by a commitment to transparency, impact, and the
              well-being of those we serve.
            </p>
          </div>

          <div className="bg-white text-background p-5 rounded-xl w-full h-full flex flex-col gap-5">
            <h2 className="headingTexts">Our Approach</h2>
            <p>
              We employ a holistic approach that combines financial aid with
              educational and developmental support. Our programs are designed
              to address the root causes of poverty and empower individuals to
              achieve long-term self-sufficiency. We work closely with local
              communities to ensure our initiatives are relevant and effective.
            </p>
          </div>
        </div>
        <div className="w-full xl:w-1/3 bg-white text-background p-5 rounded-xl h-full flex flex-col gap-5">
          <h2 className="headingTexts">Our Team</h2>
          <p>
            Our team comprises dedicated professionals with diverse backgrounds
            in finance, education, and community development. We are united by a
            shared passion for making a difference and a commitment to the
            foundation's core values.
          </p>
          <div className="w-full h-full flex items-start gap-5 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 py-2">
            {[1, 2, 3, 4].map((member, i) => (
              <div
                key={i}
                className="min-w-[200px] flex-shrink-0 flex flex-col items-center"
              >
                <Image
                  src="https://placehold.co/200x200/png"
                  alt="Team Member"
                  width={120}
                  height={120}
                  className="rounded-xl size-full bg-background object-cover"
                />
              </div>
            ))}
          </div>
          <button className="text-background underline font-semibold">
            View the team
          </button>
        </div>
      </section>
    </main>
  );
};

export default AboutHero;
