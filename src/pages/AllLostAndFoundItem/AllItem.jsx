import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

const AllItem = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
      });
  });
  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4 ">
      <div className="bg-base-200 py-16 rounded-xl">
        <h1 className="text-center text-4xl font-semibold">
          All lost and found Item
        </h1>
      </div>

      {/* Search */}
      <div>
        <label className="mx-auto mt-10 input input-bordered flex items-center gap-2 lg:w-1/2">
          <input type="text" className="grow" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default AllItem;
