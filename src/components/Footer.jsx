import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GrFacebookOption } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-screen-xl mx-auto lg:px-2 px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Section 1: About */}
        <div>
          <h2 className="text-xl font-bold mb-4">About WhereIsIt</h2>
          <p className="text-gray-400">
            WhereIsIt is a platform to help people find and recover lost items.
            Post your lost or found items, connect with others, and help build a
            community where everyone cares.
          </p>
          <p className="mt-4">
            <span className="font-semibold">Contact Us:</span>{" "}
            support@whereisit.com
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/add-item" className="text-gray-400 hover:text-white">
                Add Lost/Found Item
              </a>
            </li>
            <li>
              <a href="/my-items" className="text-gray-400 hover:text-white">
                Manage My Items
              </a>
            </li>
            <li>
              <a
                href="/all-recovered"
                className="text-gray-400 hover:text-white"
              >
                Recovered Items
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Follow Us */}
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <p className="text-gray-400 mb-4">
            Stay connected and updated on our latest features and community
            stories.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://facebook.com"
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-600"
            >
              <GrFacebookOption />
            </a>
            <a
              href="https://twitter.com"
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-400"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://instagram.com"
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-pink-500"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center hover:bg-blue-700"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-gray-400">
        <p>&copy; 2024 WhereIsIt. All rights reserved.</p>
        <p className="mt-2">
          Designed and developed with ❤️ by{" "}
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Your Name
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
