import React from "react";
import { Helmet } from "react-helmet-async";

const TermsAndCondition = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
      <Helmet>
        <title>All Item - Contact Us</title>
      </Helmet>
      <div className="bg-base-200 py-12 text-center rounded-xl">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
          Terms & Conditions
        </h1>
        <p className="mt-4 text-xl md:text-xl max-w-2xl mx-auto">
          Understand the rules and guidelines for using our platform to ensure a
          safe and fair experience.
        </p>
      </div>
    </div>
  );
};

export default TermsAndCondition;
