// import React, { useContext, useState, useEffect } from "react";
// import { Link, NavLink, useLocation } from "react-router-dom";
// import { AuthContext } from "../provider/AuthProviders";
// import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
// import Swal from "sweetalert2";

// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext);
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   const [mobileMenuVisible, setMobileMenuVisible] = useState(false); // For mobile menu
//   const location = useLocation(); // To detect route changes

//   // Close dropdowns on route change
//   useEffect(() => {
//     setDropdownVisible(false);
//     setMobileMenuVisible(false);
//   }, [location.pathname]);

//   const handleLogout = () => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You will be logged out of your account.",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, log out!",
//     }).then((result) => {
//       if (result.isConfirmed) {
//         logOut();
//         Swal.fire(
//           "Logged Out!",
//           "You have been successfully logged out.",
//           "success"
//         );
//       }
//     });
//   };

//   const links = (
//     <div className="flex flex-col text-left lg:flex-row lg:gap-10 gap-3 px-2 py-2">
//       <NavLink
//         to="/"
//         className={({ isActive }) =>
//           isActive
//             ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
//             : "text-slate-700 hover:text-blue-700 font-medium"
//         }
//         onClick={() => setMobileMenuVisible(false)} // Close mobile menu
//       >
//         Home
//       </NavLink>
//       <NavLink
//         to="/allItem"
//         className={({ isActive }) =>
//           isActive
//             ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
//             : "text-slate-700 hover:text-blue-700 font-medium"
//         }
//         onClick={() => setMobileMenuVisible(false)} // Close mobile menu
//       >
//         Lost & Found Items
//       </NavLink>
//       <NavLink
//         to="/terms"
//         className={({ isActive }) =>
//           isActive
//             ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
//             : "text-slate-700 hover:text-blue-700 font-medium"
//         }
//         onClick={() => setMobileMenuVisible(false)} // Close mobile menu
//       >
//         terms
//       </NavLink>
//       <NavLink
//         to="/about"
//         className={({ isActive }) =>
//           isActive
//             ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
//             : "text-slate-700 hover:text-blue-700 font-medium"
//         }
//         onClick={() => setMobileMenuVisible(false)} // Close mobile menu
//       >
//         About Us
//       </NavLink>
//       <NavLink
//         to="/contact"
//         className={({ isActive }) =>
//           isActive
//             ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
//             : "text-slate-700 hover:text-blue-700 font-medium"
//         }
//         onClick={() => setMobileMenuVisible(false)} // Close mobile menu
//       >
//         Contact us
//       </NavLink>

//       {/* {user && user.email ? (
//         <button
//           onClick={() => {
//             handleLogout();
//             setMobileMenuVisible(false); // Close mobile menu
//           }}
//           className="md:hidden text-left"
//         >
//           Logout
//         </button>
//       ) : (
//         <Link
//           to="/auth/login"
//           className="md:hidden"
//           onClick={() => setMobileMenuVisible(false)} // Close mobile menu
//         >
//           Login
//         </Link>
//       )} */}
//     </div>
//   );

//   const profileLinks = (
//     <div className="flex flex-col text-left gap-3 px-5 py-2">
//       <NavLink
//         to="/addItem"
//         className={({ isActive }) =>
//           isActive ? "text-blue-500 font-medium" : "text-gray-500 font-medium"
//         }
//       >
//         Add Lost And Found
//       </NavLink>
//       <NavLink
//         to="/allRecover"
//         className={({ isActive }) =>
//           isActive ? "text-blue-500 font-medium" : "text-gray-500 font-medium"
//         }
//       >
//         All Recovered Item
//       </NavLink>
//       <NavLink
//         to="/myItems"
//         className={({ isActive }) =>
//           isActive ? "text-blue-500 font-medium" : "text-gray-500 font-medium"
//         }
//       >
//         Manage My Item
//       </NavLink>
//       {/* Logout Button (only when logged in) */}
//       <button
//         onClick={handleLogout}
//         className="text-gray-500 font-medium text-left"
//       >
//         Logout{" "}
//       </button>
//     </div>
//   );

//   return (
//     <div className="fixed top-0 w-full z-50 bg-white/60 shadow-sm backdrop-blur-md transition-all duration-300">
//       <div className="max-w-screen-xl mx-auto navbar lg:px-2 px-4">
//         {/* Navbar Start */}
//         <div className="navbar-start">
//           <div className="dropdown">
//             <button
//               tabIndex={0}
//               className="btn btn-ghost pl-0 lg:hidden"
//               onClick={() => setMobileMenuVisible(!mobileMenuVisible)}
//             >
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </button>
//             {/* Mobile version */}
//             {mobileMenuVisible && (
//               <ul
//                 tabIndex={0}
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-44 p-2 shadow z-50"
//               >
//                 {links}
//               </ul>
//             )}
//           </div>
//           <NavLink to="/" className="btn btn-ghost text-xl px-0">
//             <img
//               src="https://i.ibb.co/5Gc9QGB/foundify-03.png"
//               alt="Foundify Logo"
//               className="w-6 object-cover"
//             />
//             Foundify
//           </NavLink>
//         </div>

//         {/* Navbar Center */}
//         <div className="navbar-center hidden lg:flex">
//           <ul className="menu menu-horizontal px-1">{links}</ul>
//         </div>

//         {/* Navbar End */}
//         {/* Navbar End */}
//         <div className="navbar-end flex items-center ml-auto pr-0 relative">
//           {user && user.email ? ( // Only show profile section when user is logged in
//             <>
//               {/* Profile Avatar + Dropdown Toggle */}
//               <div
//                 className="tooltip tooltip-left mr-2"
//                 data-tip={user?.displayName || "User"}
//               >
//                 <div
//                   className="bg-base-200 rounded-full w-8 h-8 md:w-11 md:h-11 flex items-center justify-center cursor-pointer relative"
//                   onClick={() => setDropdownVisible(!dropdownVisible)}
//                 >
//                   {user.photoURL ? (
//                     <img
//                       src={user.photoURL}
//                       alt="Profile"
//                       className="object-cover rounded-full w-full h-full"
//                     />
//                   ) : (
//                     <img
//                       src="https://img.icons8.com/?size=80&id=ARWy_JjgohtA&format=png"
//                       alt="Default Avatar"
//                       className="w-5"
//                     />
//                   )}

//                   {/* Toggle Arrow */}
//                   <span className="absolute text-neutral -bottom-2 -right-2 text-xs">
//                     {dropdownVisible ? (
//                       <IoIosArrowUp
//                         size={22}
//                         className="bg-base-200 border rounded-full"
//                       />
//                     ) : (
//                       <IoIosArrowDown
//                         size={22}
//                         className="bg-base-200 rounded-full"
//                       />
//                     )}
//                   </span>
//                 </div>
//               </div>

//               {/* Dropdown */}
//               {dropdownVisible && (
//                 <div className="absolute right-0 md:top-12 top-10 mt-2 bg-white shadow-md rounded p-2 z-20 w-52">
//                   {profileLinks}
//                 </div>
//               )}
//             </>
//           ) : (
//             // Show Login button if no user is logged in
//             <Link to="/auth/login" className="btn btn-neutral btn-sm md:btn-md">
//               Login
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import React, { useContext, useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AuthContext } from "../provider/AuthProviders";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const location = useLocation();

  // Close dropdowns on route change
  useEffect(() => {
    setDropdownVisible(false);
    setMobileMenuVisible(false);
  }, [location.pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownVisible &&
        !event.target.closest(".profile-dropdown") // Ensures click is outside the dropdown
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownVisible]);

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out of your account.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut();
        Swal.fire(
          "Logged Out!",
          "You have been successfully logged out.",
          "success"
        );
      }
    });
  };

  const links = (
    <div className="flex flex-col text-left lg:flex-row lg:gap-10 gap-3 px-2 py-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
            : "text-slate-700 hover:text-blue-700 font-medium"
        }
        onClick={() => setMobileMenuVisible(false)} // Close mobile menu
      >
        Home
      </NavLink>
      <NavLink
        to="/allItem"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
            : "text-slate-700 hover:text-blue-700 font-medium"
        }
        onClick={() => setMobileMenuVisible(false)} // Close mobile menu
      >
        Lost & Found Items
      </NavLink>
      <NavLink
        to="/terms"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
            : "text-slate-700 hover:text-blue-700 font-medium"
        }
        onClick={() => setMobileMenuVisible(false)} // Close mobile menu
      >
        terms
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
            : "text-slate-700 hover:text-blue-700 font-medium"
        }
        onClick={() => setMobileMenuVisible(false)} // Close mobile menu
      >
        About Us
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "text-blue-500 font-medium underline-offset-4 underline lg:no-underline lg:border-blue-500 lg:border-b-2"
            : "text-slate-700 hover:text-blue-700 font-medium"
        }
        onClick={() => setMobileMenuVisible(false)} // Close mobile menu
      >
        Contact us
      </NavLink>

      {/* {user && user.email ? (
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
          )} */}
    </div>
  );

  const profileLinks = (
    <div className="flex flex-col text-left gap-3 px-5 py-2">
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
      {/* Logout Button (only when logged in) */}
      <button
        onClick={handleLogout}
        className="text-gray-500 font-medium text-left"
      >
        Logout{" "}
      </button>
    </div>
  );

  return (
    <div className="fixed top-0 w-full z-50 bg-white/80 shadow-sm backdrop-blur-xl transition-all duration-300">
      <div className="max-w-screen-xl mx-auto navbar lg:px-2 px-4">
        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost pl-0 lg:hidden"
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
            {mobileMenuVisible && (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-44 p-2 shadow z-50"
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
        <div className="navbar-end flex items-center ml-auto pr-0 relative">
          {user && user.email ? (
            <div className="profile-dropdown relative">
              <div
                className="bg-base-200 rounded-full w-8 h-8 md:w-11 md:h-11 flex items-center justify-center cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  setDropdownVisible(!dropdownVisible);
                }}
              >
                <img
                  src={
                    user.photoURL ||
                    "https://img.icons8.com/?size=80&id=ARWy_JjgohtA&format=png"
                  }
                  alt="Profile"
                  className="object-cover rounded-full w-full h-full"
                />
                <span className="absolute text-neutral -bottom-2 -right-2 text-xs">
                  {dropdownVisible ? (
                    <IoIosArrowUp
                      size={22}
                      className="bg-base-200 border rounded-full"
                    />
                  ) : (
                    <IoIosArrowDown
                      size={22}
                      className="bg-base-200 rounded-full"
                    />
                  )}
                </span>
              </div>
              {dropdownVisible && (
                <div className="absolute right-0 md:top-12 top-10 mt-2 bg-white shadow-md rounded p-2 z-20 w-52">
                  {profileLinks}
                </div>
              )}
            </div>
          ) : (
            <Link to="/auth/login" className="btn btn-neutral btn-sm md:btn-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
