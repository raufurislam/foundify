import { useContext, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../../provider/AuthProviders";
import Loading from "../loading/Loading";
import { IoArrowBack } from "react-icons/io5";
import { Helmet } from "react-helmet-async";
import { FaLocationDot } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const DetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recoveryDate, setRecoveryDate] = useState(new Date());
  const [recoveryLocation, setRecoveryLocation] = useState("");
  const [recoveryPhoto, setRecoveryPhoto] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  if (loading) return <Loading />;
  if (error) return <div className="text-red-500">Error: {error}</div>;
  if (!item) return <div className="text-gray-500">Item not found.</div>;

  // Safe Destructuring
  const {
    _id,
    title,
    description,
    category,
    contactEmail,
    contactName,
    thumbnail,
    location,
    postType,
    date,
    status,
  } = item;

  const handleSubmitRecovery = () => {
    if (!recoveryLocation || !recoveryPhoto) {
      Swal.fire("Error", "Recovery location and photo are required.", "error");
      return;
    }

    const recoveredData = {
      itemId: id,
      title,
      thumbnail,
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
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4 mt-6">
      <Helmet>
        <title>{title} - Foundify</title>
      </Helmet>

      <div className="grid grid-cols-1 items-center md:grid-cols-2 mx-auto gap-5">
        {/* Image Section */}
        <div>
          <img
            className="rounded-xl w-full h-[450px] object-cover"
            src={thumbnail}
            alt={title}
          />
        </div>

        {/* Item Description Section */}
        <div>
          {/* Title */}
          <div className="flex gap-5 items-center">
            <h2 className="lg:text-2xl md:text-xl text-lg font-bold mb-1">
              {title}
            </h2>
            <button
              className={`btn btn-outline btn-sm rounded-md ${
                postType === "Lost"
                  ? "border-blue-500 text-blue-500"
                  : "border-green-500 text-green-500"
              }`}
            >
              {postType}
            </button>
          </div>

          {/* Category */}
          <p className="mb-4 font-semibold text-sm md:text-lg">{category}</p>

          <p className="mb-4 text-sm ">{description}</p>
          <p className="mb-2 text-sm flex items-center gap-2 font-semibold">
            <FaLocationDot />
            {location}
          </p>
          <p className="mb-4 text-sm flex items-center gap-2 font-semibold">
            <FaCalendarAlt />
            {date}
          </p>

          {/* Contact Information */}
          {/* <div>
            <p className="font-semibold">Contact with {contactName}</p>
            <p></p>
            <p className="mb-2 text-sm flex items-center gap-2 font-semibold">
              <HiOutlineMail />
              {contactEmail}
            </p>
          </div> */}

          {/* Contact Information (Only Show If Not Recovered) */}
          {status !== "recovered" && (
            <div>
              <p className="font-semibold">Contact with {contactName}</p>
              <p className="mb-2 text-sm flex items-center gap-2 font-semibold">
                <HiOutlineMail />
                {contactEmail}
              </p>
            </div>
          )}

          <p className="underline underline-offset-4 font-semibold">
            {/* <strong>Status:</strong>{" "} */}
            {status === "recovered" ? "Recovered" : "Not Recovered"}
          </p>

          {status !== "recovered" && (
            <div className="flex items-center">
              <button
                className="btn btn-outline text-neutral rounded-full mt-5 mb-3"
                onClick={() => navigate(-1)}
              >
                <IoArrowBack size={16} />
              </button>
              <button
                className="btn btn-neutral text-white ml-3"
                onClick={() => setIsModalOpen(true)}
              >
                {postType === "Lost" ? "Found This!" : "This is Mine!"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Recovery Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
            <h2 className="font-bold text-lg">Recover Item</h2>

            {/* Recovery Form */}
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

            {/* User Info */}
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
