import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams(); // Get item ID from URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    fetch(`http://localhost:5000/items/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setItem(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  // Show error message if API call fails
  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  // Show loading message while fetching data
  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  const { title, description, location, postType, thumbnail, date } = item;

  return (
    <div className="max-w-screen-md mx-auto mt-10 p-4 border rounded-lg shadow-lg">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-60 object-cover rounded-md mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{title}</h1>

      {/* Post Type */}
      <p className="text-lg mb-2">
        <span className="font-semibold">Post Type:</span> {postType}
      </p>

      {/* Location */}
      <p className="text-lg mb-2">
        <span className="font-semibold">Location:</span> {location}
      </p>

      {/* Date */}
      <p className="text-lg mb-4">
        <span className="font-semibold">Date:</span>{" "}
        {new Date(date).toDateString()}
      </p>

      {/* Description */}
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default DetailsPage;
