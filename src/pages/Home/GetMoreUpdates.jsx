import React from "react";
import { FaEnvelope, FaBell } from "react-icons/fa";

const GetMoreUpdates = () => {
  return (
    <section className="max-w-screen-xl mx-auto lg:px-2 px-4 ">
      <div className="container mx-auto lg:px-2 px-4 bg-base-200 rounded-xl py-10">
        <div className="text-center mb-12">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold">
            Stay Updated with the Latest News
          </h2>
          <p className="text-gray-600 mt-2">
            Subscribe to our newsletter and never miss an update about lost and
            found items!
          </p>
        </div>
        <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <FaBell className="text-5xl text-blue-500 animate-pulse" />
              <h3 className="text-xl font-semibold text-gray-700">
                Get Notified Instantly
              </h3>
            </div>
            <form className="flex flex-col sm:flex-row items-center gap-4 w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full px-4 py-3 border rounded-md focus:ring-2 focus:ring-teal-500"
              />
              <button type="submit" className="btn btn-neutral text-white">
                Subscribe
              </button>
            </form>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              <FaEnvelope className="inline mr-2 " />
              We'll never spam you or share your email.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetMoreUpdates;
