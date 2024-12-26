import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProviders";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false); // For mobile menu
  const location = useLocation(); // To detect route changes

  // Close dropdowns on route change
  useEffect(() => {
    setDropdownVisible(false);
    setMobileMenuVisible(false);
  }, [location.pathname]);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      logOut();
    }
  };

  const links = (
    <div className="flex flex-col text-left lg:flex-row lg:gap-10 gap-3 px-2 py-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium" : "text-gray-500 font-medium"
        }
        onClick={() => setMobileMenuVisible(false)} // Close mobile menu
      >
        Home
      </NavLink>
      <NavLink
        to="/allItem"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium" : "text-gray-500 font-medium"
        }
        onClick={() => setMobileMenuVisible(false)} // Close mobile menu
      >
        Lost & Found Items
      </NavLink>

      {user && user.email ? (
        <button
          onClick={() => {
            handleLogout();
            setMobileMenuVisible(false); // Close mobile menu
          }}
          className="md:hidden text-left"
        >
          Logout
        </button>
      ) : (
        <Link
          to="/auth/login"
          className="md:hidden"
          onClick={() => setMobileMenuVisible(false)} // Close mobile menu
        >
          Login
        </Link>
      )}
    </div>
  );

  const profileLinks = (
    <div className="flex flex-col text-right gap-3 px-5 py-2">
      <NavLink
        to="/addItem"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium" : "text-gray-500 font-medium"
        }
      >
        Add Lost And Found
      </NavLink>
      <NavLink
        to="/allRecover"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium" : "text-gray-500 font-medium"
        }
      >
        All Recovered Item
      </NavLink>
      <NavLink
        to="/myItems"
        className={({ isActive }) =>
          isActive ? "text-blue-500 font-medium" : "text-gray-500 font-medium"
        }
      >
        Manage My Item
      </NavLink>
    </div>
  );

  return (
    <div className="max-w-screen-xl mx-auto navbar bg-base-100">
      {/* Navbar Start */}
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
            onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          {/* Mobile version */}
          {mobileMenuVisible && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-44 p-2 shadow"
            >
              {links}
            </ul>
          )}
        </div>
        <NavLink to="/" className="btn btn-ghost text-xl px-0">
          <img
            src="https://i.ibb.co/5Gc9QGB/foundify-03.png"
            alt="Foundify Logo"
            className="w-6 object-cover"
          />
          Foundify
        </NavLink>
      </div>

      {/* Navbar Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Navbar End */}
      <div className="navbar-end relative">
        <div
          className="tooltip tooltip-left mr-5"
          data-tip={user?.displayName || "User"}
        >
          <div
            className="bg-base-200 rounded-full w-8 h-8 md:w-11 md:h-11 flex items-center justify-center cursor-pointer relative"
            onClick={() => setDropdownVisible(!dropdownVisible)}
          >
            {user && user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="object-cover rounded-full"
              />
            ) : (
              <img
                src="https://img.icons8.com/?size=80&id=ARWy_JjgohtA&format=png"
                alt="Default Avatar"
                className="w-5"
              />
            )}
            {/* Toggle Arrow */}
            <span className="absolute -bottom-2 -right-2 text-xs">
              {dropdownVisible ? (
                <IoIosArrowUp size={22} className="bg-white rounded-full" />
              ) : (
                <IoIosArrowDown size={22} className="bg-white rounded-full" />
              )}
            </span>
          </div>
        </div>

        {/* Dropdown */}
        {dropdownVisible && (
          <div className="absolute right-16 top-12 mt-2 bg-white shadow-md rounded p-2 z-20 w-52">
            {profileLinks}
          </div>
        )}

        {/* Login/Logout Button */}
        {user && user.email ? (
          <button
            onClick={handleLogout}
            className="hidden md:flex btn btn-sm md:btn-md"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="hidden md:flex btn btn-sm md:btn-md"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
