import React from "react";
import SupportEtieka from "./component/SupportEtieka";
import ContactUs from "./component/ContactUs";

const page = () => {
  return (
    <main className="w-full h-auto space-y-5 p-5">
      <SupportEtieka />
      <ContactUs />
    </main>
  );
};

export default page;
