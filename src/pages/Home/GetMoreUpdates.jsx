import React from "react";
import { FaEnvelope, FaBell } from "react-icons/fa";

const GetMoreUpdates = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Stay Updated with the Latest News
          </h2>
          <p className="text-gray-600 mt-4">
            Subscribe to our newsletter and never miss an update about lost and
            found items!
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <FaBell className="text-5xl text-teal-500 animate-pulse" />
              <h3 className="text-xl font-semibold text-gray-700">
                Get Notified Instantly
              </h3>
            </div>
            <form className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-teal-500"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              <FaEnvelope className="inline text-teal-500 mr-2" />
              We'll never spam you or share your email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetMoreUpdates;
