import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
  const { _id, title, thumbnail, location, postType, date, status } = item;

  return (
    <div className="rounded-xl pb-5 shadow-lg bg-base-200 lg:hover:scale-105 transition duration-300">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-52 object-cover rounded-md mb-4"
      />

      <div className="px-5">
        {/* Title */}
        <h2 className="text-lg font-bold mb-2">{title}</h2>

        {/* Post Type */}
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Post Type:</span> {postType}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-semibold">Location:</span> {location}
        </p>

        {/* Date */}
        <p className="text-sm text-gray-600 mb-4">
          <span className="font-semibold">Date:</span> {date}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <Link
            to={`/item/${_id}`}
            className="inline-block text-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            View Details
          </Link>
          {status === "recovered" ? (
            <button
              disabled
              className="inline-block text-center px-4 py-2 bg-green-500 text-white rounded-md cursor-not-allowed"
            >
              Recovered
            </button>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
