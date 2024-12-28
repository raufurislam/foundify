import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProviders";
import Swal from "sweetalert2";
import { div } from "motion/react-client";

const ManageMyItems = () => {
  const { user } = useContext(AuthContext);
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch user-specific items
  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/myItems?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          setMyItems(data);
          setLoading(false);
        })
        .catch((err) => console.error(err));
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
        fetch(`http://localhost:5000/items/${id}`, {
          method: "DELETE",
        })
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

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage My Items</h1>
      {myItems.length === 0 ? (
        <div className="text-center">
          <p className="text-xl text-gray-600">
            No items found! Start adding lost or found items.
          </p>
        </div>
      ) : (
        // this is table
        <div>
          <div className="hidden md:block">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Post Type</th>
                  <th>Category</th>
                  <th>Location</th>
                  <th>Date Submitted</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {myItems.map((item, index) => (
                  <tr key={item._id} className="hover:bg-base-300">
                    <td>{index + 1}</td>
                    <td className="font-medium">{item.title}</td>
                    <td>{item.postType}</td>
                    <td>{item.category}</td>
                    <td>{item.location}</td>
                    <td>{new Date(item.date).toLocaleDateString()}</td>
                    <td className="text-right flex justify-end gap-2 mt-6">
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn btn-error btn-sm"
                      >
                        Delete
                      </button>
                      <button className="btn btn-primary btn-sm">Update</button>
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
                  {/* <span className="font-bold">Title:</span> */}
                </div>
                <div className="mt-4 mb-2 font-bold text-xl">
                  <span className="">#</span> {index + 1}
                </div>
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
                <div className="flex flex-col md:flex-row gap-2 mt-4">
                  <button
                    className="btn btn-sm btn-primary w-full"
                    onClick={() => handleUpdate(item._id)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-sm btn-error w-full"
                    onClick={() => handleDelete(item._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageMyItems;
