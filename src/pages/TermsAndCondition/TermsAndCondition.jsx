import React from "react";
import { Helmet } from "react-helmet-async";

const TermsAndConditions = () => {
  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
      <Helmet>
        <title>Foundify - Terms & Conditions</title>
      </Helmet>

      {/* Header Section */}
      <div className="bg-base-200 py-12 text-center rounded-xl px-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
          Terms & Conditions
        </h1>
        <p className="md:text-xl font-normal md:w-3/5 mt-2 md:mt-3 mx-auto text-slate-500">
          Please read our terms carefully before using Foundify to ensure a safe
          and secure experience.
        </p>
      </div>

      {/* Terms Content */}
      <section className="py-16 bg-white">
        <div className="">
          {/* Introduction */}
          <h2 className="text-3xl font-semibold text-gray-800 text-center">
            Welcome to Foundify!
          </h2>
          <p className="lg:w-3/5 mx-auto mt-4 text-lg text-gray-600 text-center">
            By using our platform, you agree to comply with the following terms.
            These terms outline the rules and regulations for the use of our
            website and services.
          </p>

          {/* Terms List */}
          <div className="mt-12 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                1. User Responsibilities
              </h3>
              <p className="mt-2 text-gray-600">
                You must use Foundify responsibly. Any misuse, including
                fraudulent claims of lost or found items, may result in
                suspension of your account.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                2. Listing Lost & Found Items
              </h3>
              <p className="mt-2 text-gray-600">
                All lost and found item listings must be accurate and truthful.
                Misrepresentation of items may lead to account restrictions.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                3. Privacy & Data Protection
              </h3>
              <p className="mt-2 text-gray-600">
                We value your privacy. Any personal data shared on Foundify is
                protected under our Privacy Policy.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                4. Prohibited Activities
              </h3>
              <p className="mt-2 text-gray-600">
                Users must not engage in harassment, spam, or inappropriate
                content sharing. Violations will lead to account suspension.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">
                5. Liability Disclaimer
              </h3>
              <p className="mt-2 text-gray-600">
                Foundify is a platform for connecting people with lost and found
                items. We do not guarantee item recovery and are not liable for
                misrepresentation or fraudulent claims.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-base-200 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">
          Have Questions?
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          If you need further clarification, feel free to contact our support
          team.
        </p>
        <div className="mt-6">
          <a href="/contact" className="btn btn-neutral text-white">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
