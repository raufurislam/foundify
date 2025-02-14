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
      <div className="bg-base-200 py-12 text-center rounded-xl px-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
          About Us
        </h1>
        <p className="text-xl font-normal md:w-3/5 mt-2 md:mt-3 mx-auto text-slate-500">
          Connecting people to their lost belongings and making the world a more
          organized place.
        </p>
      </div>

      {/* Our Mission */}
      <section className="lg:pt-16 pt-12">
        <div className="">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold md:font-semibold text-center mb-3">
            Our Mission
          </h2>
          <p className="md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
            At Foundify, our mission is to create a seamless and trustworthy
            platform where people can report lost and found items, helping them
            reconnect with what matters most. We believe in using technology to
            make the process simple, efficient, and stress-free.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className=" bg-white lg:pt-16 pt-12">
        <div className="">
          <h2 className="lg:text-3xl md:text-2xl text-xl font-bold md:font-semibold text-center mb-6">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-base-200 p-6 rounded-lg shadow-md">
              <img
                src="https://i.ibb.co.com/RNPS0xG/IMG-20240107-215349-956.jpg"
                alt="Team Member 1"
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold text-center text-gray-800 mt-4">
                Raufur Islam
              </h3>
              <p className="text-center text-gray-600 mt-2">Founder</p>
              <p className="mt-4 text-gray-600 text-center">
                Raufur is passionate about fostering connections and helping
                individuals find their true soulmate. With over a decade of
                experience in relationship counseling, he believes in the power
                of love and understanding.
              </p>
            </div>
            {/* Team Member 2 */}
            <div className="bg-base-200 p-6 rounded-lg shadow-md">
              <img
                src="https://t4.ftcdn.net/jpg/09/35/84/03/360_F_935840397_7miN8MVzz8BMEKPsOdqPKd0JTHZygNfv.jpg"
                alt="Team Member 2"
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold text-center text-gray-800 mt-4">
                Jane Smith
              </h3>
              <p className="text-center text-gray-600 mt-2">Co-Founder</p>
              <p className="mt-4 text-gray-600 text-center">
                Jane is dedicated to helping individuals discover the perfect
                match for long-term, meaningful relationships. She brings a deep
                understanding of human connections and strives to make Soulmate
                a welcoming space for all.
              </p>
            </div>
            {/* Team Member 3 */}
            <div className="bg-base-200 p-6 rounded-lg shadow-md">
              <img
                src="https://tiermaker.com/images/chart/chart/male-animated-cartoon-characters-912009/transparent-hiro-big-hero-6-37747465-427-378pngcrdownload.png"
                alt="Team Member 3"
                className="w-24 h-24 mx-auto bg-blue-300 rounded-full object-cover"
              />
              <h3 className="text-2xl font-semibold text-center text-gray-800 mt-4">
                Emily Johnson
              </h3>
              <p className="text-center text-gray-600 mt-2">Marketing Lead</p>
              <p className="mt-4 text-gray-600 text-center">
                Emily is passionate about bringing awareness to the platform and
                connecting people to their soulmates. With her expertise in
                marketing and outreach, she ensures Soulmate is always a click
                away for those in search of lasting love.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Vision */}
      <div className="lg:pt-16 pt-12">
        <section className=" bg-base-200 lg:py-10 py-8">
          <div className="max-w-screen-xl mx-auto px-4">
            <h2 className="lg:text-3xl md:text-2xl text-xl font-bold md:font-semibold text-center">
              Our Vision
            </h2>
            <p className="mt-3 md:text-lg text-gray-600 text-center max-w-3xl mx-auto">
              We envision a world where no lost item stays lost. Through
              Foundify, we aim to build a global network of people helping each
              other find what they’ve lost, fostering a culture of honesty and
              goodwill.
            </p>
          </div>
        </section>
      </div>

      {/* Call to Action */}
      {!user && (
        <section className=" bg-blue-600 text-white text-center">
          <h2 className="md:text-3xl text-2xl font-semibold">
            Join Foundify Today
          </h2>
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
