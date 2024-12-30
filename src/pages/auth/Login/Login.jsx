import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../../provider/AuthProviders";

const Login = () => {
  const { userLogin, userLoginGoogle, setUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    userLogin(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state || "/");
        toast.success("Account Login successfully!");
      })
      .catch(() => {
        toast.error("Invalid email or password.");
      });
  };

  const handleGoogleLogin = () => {
    userLoginGoogle()
      .then((result) => {
        setUser(result.user);
        // console.log(result);
        navigate(location?.state || "/");
        toast.success("Account Login successfully!");
      })
      .catch(() => {
        toast.error("Google Sign-In Failed.");
      });
  };

  return (
    <div className="mt-8 flex justify-center items-center lg:px-2 px-4">
      <div className="card bg-base-200 w-full max-w-lg shrink-0 rounded-xl py-8 md:p-10">
        <h2 className="lg:text-3xl md:text-2xl text-2xl font-bold text-center">
          Login to Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="relative form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-[60px] transform -translate-y-1/2 btn btn-xs"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Redirects to Forgot Password page*/}
          <div>
            <label className="label">
              <Link
                to="/auth/forgot-password"
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary rounded-lg btn-neutral"
            >
              Login
            </button>
          </div>
        </form>
        <div className="px-8 flex justify-center mb-4">
          <button
            className="btn border-green-400 w-full flex items-center justify-center"
            onClick={handleGoogleLogin}
          >
            Continue with Google <FcGoogle className="ml-2" />
          </button>
        </div>
        <p className="text-center">
          Don’t Have an Account?{" "}
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
