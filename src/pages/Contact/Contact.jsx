import React from "react";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 lg:px-2">
      <Helmet>
        <title>Contact Us - All Item</title>
      </Helmet>

      {/* Hero Section */}
      <div className="bg-base-200 py-12 text-center rounded-xl px-4">
        <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="text-xl font-normal md:w-3/5 mt-2 md:mt-3 mx-auto text-slate-500">
          Have questions or need help? Reach out to us. We're here to assist
          you!
        </p>
      </div>

      {/* Contact Information */}
      {/* <section className="py-16 text-center">
        <h2 className="text-3xl font-semibold ">Get In Touch</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          Whether you have a question, suggestion, or need support, we’re here
          to help. Contact us using the form below, or reach out to us directly.
        </p>
      </section> */}

      {/* Contact Form & Details */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-4">
          {/* Contact Form */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Send Us a Message
            </h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn btn-neutral text-white"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Our Contact Information
            </h3>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Email</h4>
              <p className="text-gray-600">support@foundify.com</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">Phone</h4>
              <p className="text-gray-600">+1 (800) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800">
                Social Media
              </h4>
              <div className="flex space-x-6">
                <a
                  href="https://www.facebook.com"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Instagram
                </a>
                <a
                  href="https://www.twitter.com"
                  className="text-blue-600 hover:text-blue-500"
                >
                  Twitter
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-screen-xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold ">Find Us Here</h2>
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=...your-map-link..."
              width="600"
              height="450"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-base-200 text-center">
        <h2 className="text-3xl font-semibold">We'd Love to Hear From You</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          If you have any questions or need assistance, don’t hesitate to reach
          out. We’re always here to help you.
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

export default Contact;
