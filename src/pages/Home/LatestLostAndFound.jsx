import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../AllLostAndFoundItem/ItemCard";

const LatestLostAndFound = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch the latest items from the server
    fetch("http://localhost:5000/items?status=not_recovered&limit=6") // Fetch 6 latest items
      .then((res) => res.json())
      .then((data) => {
        setItems(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="my-8 max-w-screen-xl mx-auto">
      <h1 className="text-3xl font-semibold text-center mb-6">
        Latest Find & Lost Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link to="/allItem" className="btn btn-primary px-6 py-2 rounded-md">
          See All Items
        </Link>
      </div>
    </div>
  );
};

export default LatestLostAndFound;
