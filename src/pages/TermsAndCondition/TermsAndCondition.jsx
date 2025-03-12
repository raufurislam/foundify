import React from "react";
import { Helmet } from "react-helmet-async";
import {
  FaUserShield,
  FaListUl,
  FaLock,
  FaBan,
  FaExclamationTriangle,
  FaPhoneAlt,
} from "react-icons/fa";

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
      {/* Terms Cards */}
      {/* Terms Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FaUserShield className="text-3xl text-blue-600 mr-4" />
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800">
              1. User Responsibilities
            </h3>
          </div>
          <p className="text-gray-600">
            You must use Foundify responsibly. Any misuse, including fraudulent
            claims of lost or found items, may result in suspension or
            termination of your account.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FaListUl className="text-3xl text-blue-600 mr-4" />
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800">
              2. Listing Lost & Found Items
            </h3>
          </div>
          <p className="text-gray-600">
            All lost and found item listings must be accurate and truthful.
            Misrepresentation or false information will lead to immediate
            account restrictions or suspension.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FaLock className="text-3xl text-blue-600 mr-4" />
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800">
              3. Privacy & Data Protection
            </h3>
          </div>
          <p className="text-gray-600">
            We value your privacy. Any personal data shared on Foundify is
            securely stored and protected under our{" "}
            <a href="/privacy-policy" className="text-blue-600">
              Privacy Policy
            </a>
            .
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FaBan className="text-3xl text-blue-600 mr-4" />
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800">
              4. Prohibited Activities
            </h3>
          </div>
          <p className="text-gray-600">
            Users must not engage in harassment, spamming, or sharing
            inappropriate content. Violations of this policy will result in
            account suspension or termination.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FaExclamationTriangle className="text-3xl text-blue-600 mr-4" />
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800">
              5. Liability Disclaimer
            </h3>
          </div>
          <p className="text-gray-600">
            Foundify serves as a platform for connecting individuals with lost
            and found items. We do not guarantee item recovery and are not
            responsible for any misrepresentation or fraudulent claims.
          </p>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl shadow-lg">
          <div className="flex items-center mb-4">
            <FaPhoneAlt className="text-3xl text-blue-600 mr-4" />
            <h3 className="lg:text-2xl md:text-xl text-lg font-semibold text-gray-800">
              6. Contact Us
            </h3>
          </div>
          <p className="text-gray-600">
            If you have any questions or concerns, feel free to reach out to our
            support team for assistance.
          </p>
        </div>
      </div>
      {/* Call to Action */}
      <section className="py-16 bg-base-200 text-center">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold md:font-semibold text-center mb-6">
          Have Questions?
        </h2>
        <p className="mt-4 md:text-lg text-gray-600 max-w-2xl mx-auto">
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
