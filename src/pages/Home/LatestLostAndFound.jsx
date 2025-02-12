import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ItemCard from "../AllLostAndFoundItem/ItemCard";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Loading from "../loading/Loading";

const LatestLostAndFound = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { ref, inView } = useInView({
    // triggerOnce: true, // Trigger animation only once
    threshold: 0.01, // Trigger when 20% of the element is in view
  });

  useEffect(() => {
    // Fetch the latest items from the server
    fetch(
      "https://assignment-11-server-raufur-web-10-0934.vercel.app/items?status=not_recovered&limit=8"
    ) // Fetch 6 latest items
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

  if (loading) return <Loading></Loading>;
  // if (error) return <div>Error: {error}</div>;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
      transition={{ duration: 0.5 }}
      className="max-w-screen-xl mx-auto"
    >
      <h1 className="lg:text-3xl md:text-2xl text-xl font-bold text-center mb-6">
        Latest Find & Lost Items
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:px-2 px-4">
        {items.map((item) => (
          <ItemCard key={item._id} item={item} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Link
          to="/allItem"
          className="btn btn-outline hover:btn-neutral px-6 py-2 rounded-md"
        >
          See All Items
        </Link>
      </div>
    </motion.div>
  );
};

export default LatestLostAndFound;
