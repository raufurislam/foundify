import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../../provider/AuthProviders";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, userLoginGoogle } =
    useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPasswordError("");

    const form = new FormData(e.target);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    // Password validation
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "Password must contain at least 6 characters, an uppercase letter, a lowercase letter, a number, and a special character."
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
            toast.success("Account created successfully!");
          })
          .catch((error) => {
            console.error("Profile update error:", error);
          });
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("User already exists. Please log in.");
        } else {
          console.error(error.code, error.message);
          toast.error("An error occurred. Please try again.");
        }
      });
  };

  const handleGoogleLogin = () => {
    userLoginGoogle()
      .then((result) => {
        setUser(result.user);
        // toast.success("Google Sign-In successful!");
        navigate("/");
      })
      .catch(() => {
        toast.error("Google Sign-In Failed.");
      });
  };

  return (
    <div className="mt-6 flex justify-center items-center lg:px-2 px-4">
      <Helmet>
        <title>Register - Foundify</title>
      </Helmet>
      <div className="card bg-base-200 w-full max-w-lg shrink-0 rounded-xl py-8 md:p-10">
        <Link to="/" className="flex items-center justify-center text-center">
          <img
            src="https://i.ibb.co/5Gc9QGB/foundify-03.png"
            className="w-16"
            alt=""
          />
        </Link>
        <h2 className="lg:text-3xl md:text-2xl text-2xl mt-4 font-bold text-center">
          Register Your Account
        </h2>
        <form onSubmit={handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              name="name"
              type="text"
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              name="photo"
              type="text"
              placeholder="photo url"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              name="email"
              type="email"
              placeholder="email"
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
              placeholder="password"
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
            {passwordError && (
              <label className="label text-xs text-red-500">
                {passwordError}
              </label>
            )}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary rounded-lg btn-neutral">
              Register
            </button>
          </div>
        </form>

        {/* Google Login Button */}
        <div className="px-8 flex justify-center mb-4">
          <button
            className="btn border-green-400 w-full flex items-center justify-center"
            onClick={handleGoogleLogin}
          >
            Continue with Google <FcGoogle className="ml-2" />
          </button>
        </div>

        <p className="text-center">
          Already Have An Account?{" "}
          <Link to="/auth/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
