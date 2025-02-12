import React from "react";
import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";

const AboutUs = () => {
  const { user } = useAuth();

  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
      <Helmet>
        <title>Foundify - About Us</title>
      </Helmet>
      <div className="bg-base-200 py-12 text-center rounded-xl">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
          About Foundify
        </h1>
        <p className="mt-4 text-xl md:text-xl max-w-2xl mx-auto">
          Connecting people to their lost belongings and making the world a more
          organized place.
        </p>
      </div>

      {/* Our Mission */}
      <section className="py-16">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Mission
          </h2>
          <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            At Foundify, our mission is to create a seamless and trustworthy
            platform where people can report lost and found items, helping them
            reconnect with what matters most. We believe in using technology to
            make the process simple, efficient, and stress-free.
          </p>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mt-4">
                Raufur Islam Nayem
              </h3>
              <p className="text-center text-gray-600 mt-2">Founder & CEO</p>
              <p className="mt-4 text-gray-600 text-center">
                Raufur is passionate about building a connected community where
                lost items can be returned to their rightful owners with ease.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mt-4">
                Jane Doe
              </h3>
              <p className="text-center text-gray-600 mt-2">Co-Founder & CTO</p>
              <p className="mt-4 text-gray-600 text-center">
                Jane leads the tech team, ensuring Foundify is powered by a
                fast, reliable, and user-friendly platform.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-center text-gray-800 mt-4">
                Mark Johnson
              </h3>
              <p className="text-center text-gray-600 mt-2">
                Head of Operations
              </p>
              <p className="mt-4 text-gray-600 text-center">
                Mark ensures that Foundify runs smoothly, helping users connect
                with lost and found items efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4">
          <h2 className="text-3xl font-semibold text-center text-gray-800">
            Our Vision
          </h2>
          <p className="mt-6 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            We envision a world where no lost item stays lost. Through Foundify,
            we aim to build a global network of people helping each other find
            what they’ve lost, fostering a culture of honesty and goodwill.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      {!user && (
        <section className="py-16 bg-blue-600 text-white text-center">
          <h2 className="text-3xl font-semibold">Join Foundify Today</h2>
          <p className="mt-4 text-lg max-w-2xl mx-auto">
            Sign up and be a part of a community dedicated to helping people
            find their lost belongings.
          </p>
          <div className="mt-6">
            <a
              href="/auth/signUp"
              className="px-6 py-3 bg-yellow-500 text-gray-800 font-semibold rounded-full hover:bg-yellow-400"
            >
              Get Started
            </a>
          </div>
        </section>
      )}
    </div>
  );
};

export default AboutUs;
