import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"; // Import useNavigate
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProviders";
import Loading from "../loading/Loading";
import { IoArrowBack } from "react-icons/io5";

const DetailsPage = () => {
  const { id } = useParams(); // Item ID from URL
  const navigate = useNavigate(); // Navigate function
  const { user } = useContext(AuthContext); // Authenticated user info
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recoveryDate, setRecoveryDate] = useState(new Date()); // DatePicker state
  const [recoveryLocation, setRecoveryLocation] = useState(""); // Recovery location
  const [recoveryPhoto, setRecoveryPhoto] = useState(""); // Recovery photo
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

  useEffect(() => {
    fetch(
      `https://assignment-11-server-raufur-web-10-0934.vercel.app/items/${id}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <Loading></Loading>;
  if (error) return <div>Error: {error}</div>;

  const handleSubmitRecovery = () => {
    if (!recoveryLocation || !recoveryPhoto) {
      Swal.fire("Error", "Recovery location and photo are required.", "error");
      return;
    }

    const recoveredData = {
      itemId: id,
      title: item.title, // Include title
      thumbnail: item.thumbnail, // Include thumbnail
      recoveredDate: recoveryDate,
      recoveredLocation: recoveryLocation,
      recoveredPhoto: recoveryPhoto,
      recoveredBy: {
        email: user.email,
        name: user.displayName,
        photo: user.photoURL,
      },
    };

    fetch(
      `https://assignment-11-server-raufur-web-10-0934.vercel.app/recoverItem`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(recoveredData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire("Success", "Item has been marked as recovered.", "success");
          setItem({ ...item, status: "recovered" });
          setIsModalOpen(false);
        } else {
          Swal.fire("Error", data.message || "Something went wrong.", "error");
        }
      });
  };

  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 mx-auto gap-5">
        <div>
          <img className="rounded-xl" src={item.thumbnail} alt={item.title} />
        </div>
        <div>
          <h1 className="text-3xl font-bold">{item.title}</h1>
          <p>{item.description}</p>
          <p>
            <strong>Post Type:</strong> {item.postType}
          </p>
          <p>
            <strong>Status:</strong> {item.status}
          </p>

          {item.status !== "recovered" && (
            <div>
              <button
                className="btn btn-primary"
                onClick={() => setIsModalOpen(true)}
              >
                {item.postType === "Lost" ? "Found This!" : "This is Mine!"}
              </button>
              <button
                className="btn btn-outline mt-5 mb-3"
                onClick={() => navigate(-1)} // Navigate to the previous page
              >
                <IoArrowBack />
                Back to Previous
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h1 className="text-3xl font-bold text-center mb-4">
              {item.title}
            </h1>

            <h2 className="font-bold text-lg">Recover Item</h2>
            <div className="form-control">
              <label className="label px-0 pb-0">Recovery Location</label>
              <input
                type="text"
                className="input input-bordered"
                placeholder="Enter recovery location"
                value={recoveryLocation}
                onChange={(e) => setRecoveryLocation(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label px-0 pb-0">Product Photo</label>
              <input
                type="url"
                className="input input-bordered"
                placeholder="Enter product photo URL to prove"
                value={recoveryPhoto}
                onChange={(e) => setRecoveryPhoto(e.target.value)}
              />
            </div>
            <div className="form-control mt-3">
              <label className="label px-0 pb-0">Recovery Date</label>
              <DatePicker
                className="input input-bordered w-full"
                selected={recoveryDate}
                onChange={(date) => setRecoveryDate(date)}
              />
            </div>
            <div className="form-control mt-3">
              <label className="label px-0 pb-0">Recovered By</label>
              <input
                type="text"
                className="input input-bordered"
                readOnly
                value={user.displayName}
              />

              <label className="label px-0 pb-0">User Email</label>
              <input
                type="text"
                className="input input-bordered mt-2"
                readOnly
                value={user.email}
              />

              <label className="label px-0 pb-0">User Photo URL</label>
              <input
                type="text"
                className="input input-bordered mt-2"
                readOnly
                value={user.photoURL}
              />
            </div>
            <div className="modal-action">
              <button
                className="btn btn-success"
                onClick={handleSubmitRecovery}
              >
                Submit
              </button>
              <button className="btn" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsPage;
