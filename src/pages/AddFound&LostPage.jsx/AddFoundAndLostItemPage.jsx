import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProviders";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AddFoundAndLostItemPage = () => {
  const { user } = useContext(AuthContext); // Get logged-in user data
  const [date, setDate] = useState(new Date()); // Manage date input
  const navigate = useNavigate(); // Moved to top level

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target; // Reference to the form
    const formData = new FormData(form);
    const formDataObject = Object.fromEntries(formData.entries());
    formDataObject.contactName = user?.displayName || "Anonymous";
    formDataObject.contactEmail = user?.email || "N/A";

    // Adjust date to GMT+6 and format to YYYY-MM-DD
    const adjustedDate = new Date(date.getTime() + 6 * 60 * 60 * 1000); // Add 6 hours for GMT+6
    const formattedDate = adjustedDate.toISOString().split("T")[0]; // Extract YYYY-MM-DD

    // Add formatted date to the form data
    formDataObject.date = formattedDate;

    fetch("https://assignment-11-server-raufur-web-10-0934.vercel.app/items", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formDataObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // Show success alert
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Item Successfully Added!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset(); // Reset the form fields
          setDate(new Date()); // Reset the date picker
          navigate("/myItems"); // Navigate after success
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: "Error adding item!",
            text: "Item could not be added. Please try again.",
            showConfirmButton: true,
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          position: "top-center",
          icon: "error",
          title: "Error adding item!",
          text: "Something went wrong. Please try again later.",
          showConfirmButton: true,
        });
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
      <Helmet>
        <title>Add Item - Foundify</title>
      </Helmet>

      {/* headings */}
      <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
        <Helmet>
          <title>All Item - Contact Us</title>
        </Helmet>
        <div className="bg-base-200 py-12 text-center rounded-xl px-2">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
            Report a Lost or Found Item
          </h1>
          <p className="mt-2  md:text-xl lg:max-w-2xl mx-auto">
            Help reunite lost items with their owners or report an item you've
            found. Fill in the details to make a difference!
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 items-center mt-12">
        {/* design part */}
        <div className="">
          {/* <h2 className="text-3xl font-semibold">Let us know</h2> */}
          <img
            className="w-full md:w-1/2 lg:w-full mx-auto object-cover"
            src="https://i.ibb.co.com/zHQHbFNb/a.png"
            alt=""
          />
        </div>

        {/* Form  */}
        <div className="max-w-screen-xl rounded-xl">
          <h1 className="lg:text-3xl md:text-2xl text-xl font-bold mb-6 ">
            Add item
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-5">
              {/* Post Type */}
              <div>
                <label className="block font-medium mb-1 w-full">
                  Post Type
                </label>
                <select
                  name="postType"
                  className="w-full border rounded-lg px-3 py-2 "
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select lost or found
                  </option>
                  <option value="Lost">Lost</option>
                  <option value="Found">Found</option>
                </select>
              </div>

              {/* Category */}
              <div>
                <label className="block font-medium mb-1">Category</label>
                <select
                  name="category"
                  className="w-full border rounded-lg px-3 py-2"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Category
                  </option>
                  <option value="Pets">Pets</option>
                  <option value="Documents">Documents</option>
                  <option value="Gadgets">Gadgets</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Jewelry">Jewelry</option>
                  <option value="Others">Others</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Title */}
              <div>
                <label className="block font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  placeholder="Enter the title"
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>
              {/* Thumbnail */}
              <div>
                <label className="block font-medium mb-1">Thumbnail URL</label>
                <input
                  type="url"
                  name="thumbnail"
                  placeholder="Enter a thumbnail URL"
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="block font-medium mb-1">Description</label>
              <textarea
                name="description"
                className="w-full border rounded-lg px-3 py-2"
                rows="4"
                required
                placeholder="Write the description here."
              ></textarea>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {/* Date */}
              <div>
                <label className="block font-medium mb-1">Date</label>
                <DatePicker
                  selected={date}
                  onChange={(selectedDate) => setDate(selectedDate)}
                  maxDate={new Date()} // Disable future dates
                  dateFormat="yyyy-MM-dd" // Display format
                  className="border rounded-lg px-3 py-2"
                  required
                />
              </div>
              {/* Location */}
              <div>
                <label className="block font-medium mb-1">Location</label>
                <input
                  type="text"
                  name="location"
                  className="w-full border rounded-lg px-3 py-2"
                  required
                  placeholder="Enter the location"
                />
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <label className="block font-medium mb-1">
                Contact Information
              </label>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <input
                    type="text"
                    value={user?.displayName || "Anonymous"}
                    disabled
                    className="w-full border rounded-lg px-3 py-2 bg-gray-100"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    value={user?.email || "N/A"}
                    disabled
                    className="w-full border rounded-lg px-3 py-2 bg-gray-100 "
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="form-control mt-6">
              <button className="md:w-28 mt-2 text-white btn btn-neutral">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFoundAndLostItemPage;
