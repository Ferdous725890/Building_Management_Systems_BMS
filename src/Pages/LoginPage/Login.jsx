import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import React, { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Login = () => {
  const captchRef = useRef();
  const { signin } = useContext(AuthContext);
  const [disabled, setDisabled] = useState(true);
  const location = useLocation();
  const from = location?.state?.pathname || "/";
  const navigate =  useNavigate()

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signin(email, password)
      .then((result) => {
        const user = result.user;
navigate('/')
      })
      .catch((error) => {
        console.error("Login error:", error);
      });
  };

  // const handleValidateCaptcha = () => {
  //   const userCaptchaValue = captchRef.current.value;
  //   if (validateCaptcha(userCaptchaValue)) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // };

  return (
    <>
      <Helmet>
        <title>BMS || Login</title>
      </Helmet>
      <div className="hero  min-h-screen ">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-white/10 backdrop-blur-3xl  w-[800px] border">
            <form onSubmit={handelLogin} className="card-body px-20">
            <div className="flex justify-center items-center">
           <h1 className="text-3xl  text-white font-bold border-b-4 px-5 pb-2 rounded-lg">Signup!</h1>
           </div>
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

              <div className="form-control">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <input
                  ref={captchRef}
                  type="text"
                  name="captcha"
                  placeholder="Type the captcha above"
                  className="input input-bordered"
                
                />
                {/* <button
                  type="button"
                  onClick={handleValidateCaptcha}
                  className="border rounded-md hover:bg-white/20 btn-xs mt-2 mt-2"
                >
                  Validate
                </button> */}
              </div>

              <div className="form-control mt-6">
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={false}
                >
                  Login
                </button>
              </div>
            </form>

           <div className="px-16">
           <p className="ml-8">
              <small>
                New here?{" "}
                <Link to={"/signup"}>
                  {" "}
                  <span className="text-blue-500 ">
                    Create another Account
                  </span>{" "}
                </Link>
              </small>
            </p>
            <div className="pb-5">
              <SocialLogin></SocialLogin>
            </div>
           </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
