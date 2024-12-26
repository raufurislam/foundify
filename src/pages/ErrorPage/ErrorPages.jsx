// import { GiOwl } from "react-icons/gi";
import { Link } from "react-router-dom";
import Animation from "../../assets/lottie/Animation.json";
import Lottie from "lottie-react";

const ErrorPages = () => {
  return (
    <>
      <div className="mt-28 md:mt-1 flex flex-col items-center justify-center space-y-2">
        {/* <div className="text-9xl">
          <GiOwl size={200} />
        </div> */}
        <div>
          <Lottie className="w-[400px]" loop={true} animationData={Animation} />
        </div>
        <div>
          <h2 className="text-3xl font-bold">Page Not Found</h2>
        </div>
        <div className="text-xl">
          <p>Status: 404</p>
        </div>
        <Link to="/" className="btn btn-neutral">
          Go back to Home
        </Link>
      </div>
    </>
  );
};

export default ErrorPages;
