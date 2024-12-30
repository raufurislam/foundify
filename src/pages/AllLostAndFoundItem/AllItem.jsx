import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import Loading from "../loading/Loading";
import { IoCheckmark } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const AllItem = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterRecovered, setFilterRecovered] = useState(false);
  const [filterNotRecovered, setFilterNotRecovered] = useState(false);

  useEffect(() => {
    let query = "";
    if (filterRecovered) {
      query = "?status=recovered";
    } else if (filterNotRecovered) {
      query = "?status=not_recovered";
    }

    fetch(
      `https://assignment-11-server-raufur-web-10-0934.vercel.app/items${query}`
    )
      .then((res) => res.json())
      .then((data) => {
        setItems(
          data.filter((item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
        setLoading(false);
      });
  }, [searchQuery, filterRecovered, filterNotRecovered]);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const toggleFilterRecovered = () => {
    setFilterRecovered(true);
    setFilterNotRecovered(false);
  };

  const toggleFilterNotRecovered = () => {
    setFilterRecovered(false);
    setFilterNotRecovered(true);
  };

  const clearFilters = () => {
    setFilterRecovered(false);
    setFilterNotRecovered(false);
  };

  if (loading) return <Loading></Loading>;

  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
      <div className="bg-base-200 py-16 rounded-xl">
        <h1 className="text-center text-4xl font-semibold">
          All Lost and Found Items
        </h1>
      </div>

      {/* Search and Filters */}
      <div className="overflow-x-auto flex flex-col md:flex-row justify-center items-center gap-5 mt-4 px-4">
        <div>
          <label className="mx-auto input input-bordered flex items-center gap-2 md:w-full w-[340px]">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
        <div className="flex gap-2">
          <button
            className={`btn btn-outline rounded-full px-4 ${
              filterRecovered ? "bg-blue-500 text-white" : "btn-outline"
            }`}
            onClick={toggleFilterRecovered}
          >
            Recovered
          </button>
          <button
            className={`btn btn-outline rounded-full px-4 ${
              filterNotRecovered ? "bg-red-500 text-white" : "btn-outline"
            }`}
            onClick={toggleFilterNotRecovered}
          >
            Not Recovered
          </button>
          <button
            className="btn btn-outline rounded-full px-4"
            onClick={clearFilters}
          >
            Clear Filters
          </button>
        </div>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {items.map((item) => (
          <ItemCard key={item._id} item={item}></ItemCard>
        ))}
      </div>
    </div>
  );
};

export default AllItem;
