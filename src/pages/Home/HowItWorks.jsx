import React from "react";
import {
  FaUserPlus,
  FaSearch,
  FaFileUpload,
  FaHandshake,
  FaBell,
  FaCheckCircle,
} from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserPlus className="text-4xl text-blue-500 text-center" />,
      title: "Create an Account",
      description:
        "Sign up to get started. Create your profile and explore the features of our platform.",
    },
    {
      icon: <FaSearch className="text-4xl text-green-500" />,
      title: "Search or Report",
      description:
        "Easily search for lost items or report found items with our user-friendly interface.",
    },
    {
      icon: <FaFileUpload className="text-4xl text-purple-500" />,
      title: "Add Details",
      description:
        "Provide detailed information about the lost or found item, including images and descriptions.",
    },
    {
      icon: <FaHandshake className="text-4xl text-yellow-500" />,
      title: "Connect with Others",
      description:
        "Get in touch with the owner or finder to coordinate item recovery.",
    },
    {
      icon: <FaBell className="text-4xl text-red-500" />,
      title: "Receive Updates",
      description:
        "Stay updated with notifications about new matches or responses to your reports.",
    },
    {
      icon: <FaCheckCircle className="text-4xl text-teal-500" />,
      title: "Recover Your Item",
      description:
        "Successfully recover your item or help someone find what they lost.",
    },
  ];

  return (
    <section className="max-w-screen-xl mx-auto">
      <div className="container mx-auto lg:px-2 px-4">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-bold text-center mb-8">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-base-200 shadow-md rounded-lg p-6 text-center"
            >
              <div className="mb-4 flex justify-center">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                {step.title}
              </h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
