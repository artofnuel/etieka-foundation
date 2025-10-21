"use client";
import { MotionSlideIn } from "@/app/lib/FramerAnimations";
import React from "react";
const ContactUs = () => {
  return (
    <MotionSlideIn direction="bottom">
      <main className="max-w-7xl mx-auto w-full h-auto pb-10">
        <section className="bg-white rounded-xl shadow p-8 flex flex-col gap-3">
          <h2 className="headingTexts text-background text-2xl font-bold">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            We'd love to hear from you! Reach out to us using the information
            below.
          </p>
          <div className="text-background flex flex-col gap-2">
            <div>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@etiekafoundation.org"
                className="text-background hover:underline"
              >
                TBD
              </a>
            </div>
            <div>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+1234567890"
                className="text-background hover:underline"
              >
                TBD
              </a>
            </div>
            <div>
              <span className="font-semibold">Address:</span>TBD
            </div>
          </div>
        </section>
      </main>
    </MotionSlideIn>
  );
};

export default ContactUs;
