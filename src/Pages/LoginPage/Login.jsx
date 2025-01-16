import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  const captchRef = useRef(); // Ref for the captcha input field
  const { signin } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true); // Disable submit button initially
  const location = useLocation()
  const from = location?.state?.pathname || "/";
  console.log("stated in the location login page" , location?.state);
  // Load the captcha engine on component mount
  useEffect(() => {
    loadCaptchaEnginge(6); // Generate a 6-character captcha
  }, []);

  // Handle form submission
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    console.log("Login details:", { email, password });

    signin(email, password)
      .then((result) => {
        const user = result.user;
        console.log("Login successful:", user);
        
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  // Validate captcha input
  const handleValidateCaptcha = () => {
    const userCaptchaValue = captchRef.current.value; // Get value from input field
    if (validateCaptcha(userCaptchaValue)) {
      setDisabled(false); // Enable the button if captcha is valid
      console.log("Captcha validated successfully");
    } else {
      setDisabled(true); // Disable the button if captcha is invalid
      console.log("Captcha validation failed");
    }
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl font-bold">Login now!</h1>
           
          </div>
          <div className="card bg-base-100 w-full w-[900px] shadow-2xl">
            <form onSubmit={handelLogin} className="card-body">
              {/* Email Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* Password Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              {/* Captcha Section */}
              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate /> {/* Renders the captcha canvas */}
                </label>
                <input
                  ref={captchRef} // Connect the ref to this input
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="input input-bordered"
                  required
                />
                <button
                  type="button"
                  onClick={handleValidateCaptcha} // Validate the captcha on button click
                  className="btn btn-outline btn-xs mt-2"
                >
                  Validate
                </button>
              </div>

              {/* Submit Button */}
              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={false} // Disable the button based on captcha validation
                >
                  Login
                </button>
              </div>
            </form>

            {/* Link to Signup Page */}
            <p className="px-5">
              <small>
                New here? <Link to={"/signup"}> <span className="text-blue-500">Create another Account</span> </Link>
              </small>
            </p>
          <div className="pb-5">
          <SocialLogin></SocialLogin>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
