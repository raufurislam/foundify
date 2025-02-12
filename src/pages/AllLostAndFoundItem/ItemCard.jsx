import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
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

  // Limit description to 20 words
  const limitedDescription =
    description.split(" ").slice(0, 20).join(" ") +
    (description.split(" ").length > 20 ? "..." : "");

  return (
    <div className="rounded-xl pb-5 shadow-lg bg-base-200 lg:hover:scale-105 transition duration-300 flex flex-col h-full">
      {/* Thumbnail */}
      <img
        src={thumbnail}
        alt={title}
        className="w-full h-52 object-cover rounded-t-xl mb-4"
      />

      <div className="px-4 flex flex-col flex-grow">
        {/* Title */}
        <div className="flex justify-between items-center">
          <h2 className="font-bold mb-2">{title}</h2>
          <button
            className={`btn btn-outline btn-xs rounded-md ${
              postType === "Lost"
                ? "border-blue-500 text-blue-500"
                : "border-green-500 text-green-500"
            }`}
          >
            {postType}
          </button>
        </div>

        {/* Description (limited to 20 words) */}
        <p className="text-sm text-gray-600 mb-4 flex-grow">
          {limitedDescription}
        </p>

        {/* Action Buttons & Date (aligned properly) */}
        <div className="mt-auto flex justify-between items-center">
          {/* Dynamically show "Recovered" or Date in the same place */}
          <p className="text-sm font-bold text-gray-600">
            {status === "recovered" ? "Recovered" : date}
          </p>

          {/* View Details Button */}
          <Link
            to={`/item/${_id}`}
            className="text-center btn btn-md btn-neutral"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
