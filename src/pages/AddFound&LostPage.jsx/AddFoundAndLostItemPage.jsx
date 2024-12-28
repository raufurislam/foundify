import React, { useState, useContext } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProviders";
import Swal from "sweetalert2";

const AddFoundAndLostItemPage = () => {
  const { user } = useContext(AuthContext); // Get logged-in user data
  const [date, setDate] = useState(new Date()); // Manage date input

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

    fetch("http://localhost:5000/items", {
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
      <div className="bg-base-200 py-16 rounded-xl">
        <h1 className="text-center text-4xl font-semibold">
          Add Lost And Found Section
        </h1>
      </div>
      <div className="max-w-screen-xl my-4 py-8 rounded-xl">
        <h1 className="text-3xl font-bold mb-6 w-2/5">
          Let’s work together to bring peace of mind to those who’ve lost
          something special.
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Post Type */}
          <div>
            <label className="block font-medium mb-1">Post Type</label>
            <select
              name="postType"
              className="w-full border rounded-lg px-3 py-2"
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

          {/* Date */}
          <div>
            <label className="block font-medium mb-1">Date</label>
            <DatePicker
              selected={date}
              onChange={(selectedDate) => setDate(selectedDate)}
              maxDate={new Date()} // Disable future dates
              dateFormat="yyyy-MM-dd" // Display format
              className="w-full border rounded-lg px-3 py-2"
              required
            />
          </div>

          {/* Contact Info */}
          <div>
            <label className="block font-medium mb-1">
              Contact Information
            </label>
            <input
              type="text"
              value={user?.displayName || "Anonymous"}
              disabled
              className="w-full border rounded-lg px-3 py-2 bg-gray-100"
            />
            <input
              type="email"
              value={user?.email || "N/A"}
              disabled
              className="w-full border rounded-lg px-3 py-2 bg-gray-100 mt-2"
            />
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddFoundAndLostItemPage;
