import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProviders";
import recoverEmpty from "../../assets/lottie/recover_empty.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import Loading from "../loading/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const AllRecoveredItemsPage = () => {
  const { user } = useContext(AuthContext);
  const [recoveredItems, setRecoveredItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isCardLayout, setIsCardLayout] = useState(false); // State to toggle layout

  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    axiosSecure
      .get(`/recoveredItems?email=${user.email}`)
      .then((res) => setRecoveredItems(res.data))
      .finally(() => setLoading(false));
  }, [user.email]);

  if (loading) return <Loading></Loading>;

  return (
    <div className="max-w-screen-xl mx-auto lg:px-2 px-4">
      <Helmet>
        <title>All Recovered - Foundify</title>
      </Helmet>
      <div className="bg-base-200 py-12 text-center rounded-xl">
        <h1 className="lg:text-3xl md:text-2xl text-xl font-bold">
          Successfully Recovered Items
        </h1>
        <p className="mt-4 text-xl md:text-xl max-w-2xl mx-auto">
          These lost items have been found and reunited with their owners. Check
          out our success stories!
        </p>
      </div>

      <div className="hidden md:block text-right mt-4">
        <button
          onClick={() => setIsCardLayout(!isCardLayout)}
          className="btn btn-primary"
        >
          {isCardLayout ? "Switch to Table Layout" : "Switch to Card Layout"}
        </button>
      </div>

      {recoveredItems.length === 0 ? (
        <div className="max-w-screen-lg mx-auto text-center grid grid-cols-1 md:grid-cols-2 mt-12 items-center justify-between gap-5">
          <div className="md:ml-12">
            <Lottie
              className="w-[300px] md:[400px] mx-auto"
              loop={true}
              animationData={recoverEmpty}
            />
          </div>
          <div className="md:text-left text-center mt-1 md:mt-0">
            <p className="text-2xl text-gray-600">
              <span className="font-semibold text-2xl">
                No recovered items found!
              </span>
              <br />
              <span className="text-xl">Check back later for updates.</span>
            </p>
            <Link to="/" className="btn btn-neutral text-white mt-5">
              Go back to Home page
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-12">
          {isCardLayout ? (
            // Card layout for md and lg
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recoveredItems.map((item, index) => (
                <div
                  key={item._id}
                  className="rounded-xl pb-5 shadow-lg bg-base-200 lg:hover:scale-105 transition duration-300"
                >
                  <div className="w-full rounded-md">
                    <img
                      src={item.thumbnail}
                      alt=""
                      className="w-full h-44 object-cover rounded-lg"
                    />
                  </div>
                  <div className="px-4">
                    <div className="mt-4 mb-2 font-bold text-xl">
                      #{index + 1}
                    </div>
                    <div className="mb-2">
                      <span className="font-bold">Title:</span> {item.title}
                    </div>
                    <div className="mb-2">
                      <span className="font-bold">Date:</span>{" "}
                      {new Date(item.recoveredDate).toDateString()}
                    </div>
                    <div className="mb-2">
                      <span className="font-bold">Recovered By:</span>{" "}
                      {item.recoveredBy.name}
                    </div>
                    <div className="mb-2">
                      <span className="font-bold">Location:</span>{" "}
                      {item.recoveredLocation}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Table layout for md and lg
            <div className="hidden md:block">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th>Date</th>
                    <th>Recovered By</th>
                    <th>Location</th>
                  </tr>
                </thead>
                <tbody>
                  {recoveredItems.map((item, index) => (
                    <tr key={item._id} className="hover:bg-base-200">
                      <td>{index + 1}</td>
                      <td>
                        <img
                          src={item.thumbnail}
                          alt=""
                          className="h-24 w-36 object-cover"
                        />
                      </td>
                      <td className="font-medium">{item.title}</td>
                      <td>{new Date(item.recoveredDate).toDateString()}</td>
                      <td>{item.recoveredBy.name}</td>
                      <td>{item.recoveredLocation}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* Mobile Version */}
          <div className="block md:hidden space-y-4">
            {recoveredItems.map((item, index) => (
              <div
                key={item._id}
                className="rounded-xl pb-5 shadow-lg bg-base-200 lg:hover:scale-105 transition duration-300"
              >
                <div className="w-full rounded-md">
                  <img
                    src={item.thumbnail}
                    alt=""
                    className="w-full h-44 object-cover rounded-lg"
                  />
                </div>
                <div className="px-4">
                  <div className="mt-4 mb-2 font-bold text-xl">
                    #{index + 1}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Title:</span> {item.title}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Date:</span>{" "}
                    {new Date(item.recoveredDate).toDateString()}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Recovered By:</span>{" "}
                    {item.recoveredBy.name}
                  </div>
                  <div className="mb-2">
                    <span className="font-bold">Location:</span>{" "}
                    {item.recoveredLocation}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllRecoveredItemsPage;
