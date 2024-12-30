import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProviders";
import Swal from "sweetalert2";
import empty from "../../assets/lottie/empty.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import axios from "axios";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ManageMyItems = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const axiosSecure = useAxiosSecure();

  // Fetch user-specific items
  useEffect(() => {
    if (user?.email) {
      setLoading(true);

      // normal fetch---->
      // fetch(`https://assignment-11-server-raufur-web-10-0934.vercel.app/myItems?email=${user.email}`)
      //   .then((res) => res.json())
      //   .then((data) => {
      //     setMyItems(data);
      //     setLoading(false);
      //   })
      //   .catch((err) => console.error(err));

      // using axios without hooks
      // axios
      //   .get(`https://assignment-11-server-raufur-web-10-0934.vercel.app/myItems?email=${user.email}`, {
      //     withCredentials: true,
      //   })
      //   .then((res) => setMyItems(res.data))
      //   .finally(() => setLoading(false));

      // axios with hooks
      axiosSecure
        .get(`/myItems?email=${user.email}`)
        .then((res) => setMyItems(res.data))
        .finally(() => setLoading(false));
    }
  }, [user?.email]);

  // Delete an item
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(
          `https://assignment-11-server-raufur-web-10-0934.vercel.app/items/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your item has been deleted.", "success");
              const remainingItems = myItems.filter((item) => item._id !== id);
              setMyItems(remainingItems);
            }
          })
          .catch((err) => console.error(err));
      }
    });
  };

  // Update an item
  const handleUpdate = (id) => {
    const item = myItems.find((item) => item._id === id);
    setSelectedItem(item); // Set the selected item for modal
  };

  const handleSaveUpdate = (updatedData) => {
    fetch(
      `https://assignment-11-server-raufur-web-10-0934.vercel.app/items/${selectedItem._id}`,
      {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire("Updated!", "Your item has been updated.", "success");
          const updatedItems = myItems.map((item) =>
            item._id === selectedItem._id ? { ...item, ...updatedData } : item
          );
          setMyItems(updatedItems);
          setSelectedItem(null); // Close the modal
        }
      })
      .catch((err) => console.error(err));
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
      {/* ....................................... */}
      {/* <div className="bg-base-200 py-16 rounded-xl">
        <h1 className="text-center text-4xl font-semibold">Manage My Items</h1>
      </div> */}
      {/* ....................................... */}
      <div className="bg-base-200 py-16 rounded-xl">
        <h1 className="text-center text-4xl font-semibold">Manage My Items</h1>
      </div>
      {myItems.length === 0 ? (
        <div className="max-w-screen-lg mx-auto text-center grid grid-cols-1 md:grid-cols-2 mt-12 items-center justify-between gap-5">
          <div className="md:ml-12">
            <Lottie className="w-[400px]" loop={true} animationData={empty} />
          </div>
          <div className="md:text-left text-center mt-5 md:mt-0">
            <p className="text-2xl text-gray-600">
              <span className="font-semibold text-2xl">No items found!</span>{" "}
              <br />
              <span className="text-xl">Start adding lost or found items.</span>
            </p>
            <Link to="/addItem" className="btn btn-primary mt-3">
              Add Lost & Found
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-12">
          {/* Desktop Version */}
          <div className="hidden md:block">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Thumbnail</th>
                  <th>Title </th>
                  <th>Post Type</th>
                  <th>Location</th>
                  <th>Date Submitted</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myItems.map((item, index) => (
                  <tr key={item._id} className="hover:bg-base-200">
                    <td>{index + 1}</td>
                    <td>
                      <img
                        src={item.thumbnail}
                        alt=""
                        className="h-24 w-36 object-cover"
                      />
                    </td>
                    <td className="font-medium">{item.title}</td>
                    <td>{item.postType}</td>
                    {/* <td>{item.category}</td> */}
                    <td>{item.location}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td className="text-right flex justify-end gap-2 mt-8">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-error btn-sm"
                      >
                        Delete
                      </button>
                      <button
                        onClick={() => handleUpdate(item._id)}
                        className="btn btn-primary btn-sm"
                      >
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Version */}
          <div className="block md:hidden space-y-4">
            {myItems.map((item, index) => (
              <div
                key={item._id}
                className="bg-base-300 shadow-md rounded-lg p-4"
              >
                <div className="mb-2">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full h-44 object-cover rounded-lg"
                  />
                </div>
                <div className="mt-4 mb-2 font-bold text-xl">#{index + 1}</div>
                <div className="mb-2">
                  <span className="font-bold">Title:</span> {item.title}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Type:</span> {item.postType}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Category:</span> {item.category}
                </div>
                <div className="mb-2">
                  <span className="font-bold">Location:</span> {item.location}
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleUpdate(item._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Update Modal */}
          {selectedItem && (
            <div className="modal modal-open">
              <div className="modal-box">
                <h3 className="font-bold text-lg">Update Item</h3>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    const updatedData = {
                      title: e.target.title.value,
                      thumbnail: e.target.thumbnail.value,
                      postType: e.target.postType.value,
                      category: e.target.category.value,
                      location: e.target.location.value,
                    };
                    handleSaveUpdate(updatedData);
                  }}
                >
                  <div className="form-control">
                    <label className="label">Title</label>
                    <input
                      type="text"
                      name="title"
                      defaultValue={selectedItem.title}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Thumbnail</label>
                    <input
                      type="url"
                      name="thumbnail"
                      defaultValue={selectedItem.thumbnail}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Post Type</label>
                    <select
                      name="postType"
                      defaultValue={selectedItem.postType}
                      className="select select-bordered"
                    >
                      <option>Lost</option>
                      <option>Found</option>
                    </select>
                  </div>
                  <div className="form-control">
                    <label className="label">Category</label>
                    <input
                      type="text"
                      name="category"
                      defaultValue={selectedItem.category}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">Location</label>
                    <input
                      type="text"
                      name="location"
                      defaultValue={selectedItem.location}
                      className="input input-bordered"
                    />
                  </div>
                  <div className="modal-action">
                    <button type="submit" className="btn btn-primary">
                      Save
                    </button>
                    <button
                      type="button"
                      className="btn"
                      onClick={() => setSelectedItem(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ManageMyItems;
