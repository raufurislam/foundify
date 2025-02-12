import React from "react";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
      <Helmet>
        <title>All Item - Contact Us</title>
      </Helmet>
      <div className="bg-base-200 py-12 text-center rounded-xl">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
          Our Story & Mission
        </h1>
        <p className="mt-4 text-xl md:text-xl max-w-2xl mx-auto">
          Learn about our journey, our values, and how we're making lost and
          found easier for everyone.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
