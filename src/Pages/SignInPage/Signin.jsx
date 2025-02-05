import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SocialLogin from "../../SocialLogin/SocialLogin";

const Signin = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { creteduser, updatedUserProfile } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(false);

  const onSubmit = (data) => {
    setLoading(true);
    creteduser(data.email, data.password)
      .then((result) => {
        const logetedUser = result.user;
        updatedUserProfile(data.name, data.photoURL);
        const userinfo = {
          name: data.name,
          email: data.email,
          role: "user",
        };
        axiosPublic.post("/users", userinfo).then((res) => {
          if (res.data.insertedId) {
            reset();
            Swal.fire({
              title: "Signup Successful!",
              text: "Welcome to the platform.",
              icon: "success",
              confirmButtonText: "Okay",
            });
            navigate("/");
          }
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: error.message,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <Helmet>
        <title>BMS || Signup</title>
      </Helmet>
      <div className="hero  min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left"></div>
          <div className="card bg-white/10 border  w-[900px]  shadow-2xl pb-10">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="flex justify-center items-center">
                <h1 className="text-3xl  text-white font-bold border-b-4 px-5 pb-2 rounded-lg">
                  Signup!
                </h1>
              </div>
              <div className=" grid gap-5 grid-cols-2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="name"
                    placeholder="Name"
                    className="input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo Url</span>
                  </label>
                  <input
                    {...register("photoURL", { required: true })}
                    type="url"
                    placeholder="Photo URL"
                    className="input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="Email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">This field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 5,
                    maxLength: 20,
                    pattern:
                       /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]*[a-z]).{6}/,
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required</p>
                )}
                 {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    password must have one uppercase one lowercase one number
                    one special character{" "}
                  </p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">Password must have at least 5 characters</p>
                )}
                {errors.password?.type === "maxLength" && (
                  <p className="text-red-500">Password must not exceed 20 characters</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" disabled={loading}>
                  {loading ? (
                    <span className="loading text-green-500 loading-bars loading-lg"></span>
                  ) : (
                    "Signup"
                  )}
                </button>
              </div>
            </form>
            <div className="px-5 ">
              <Link
                className="bg-orange-100 text-center w-full text-sm"
                to="/login"
              >
                Already have an account? <span className="text-blue-500">Login</span>
              </Link>
            </div>

            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signin;






// import React, { useContext } from "react";
// import { Helmet } from "react-helmet";
// import { useForm } from "react-hook-form";
// import { Link, Links, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Provider/Authprovider";
// import { Result } from "postcss";
// import Swal from "sweetalert2";
// import useAxiosPublic from "../../Hooks/useAxiosPublic";
// import SocialLogin from "../../SocialLogin/SocialLogin";

// const Signin = () => {
//   const {
//     register,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm();
//   const navigated = useNavigate();
//   const { creteduser, updatedUserProfile } = useContext(AuthContext);
//   const axiosPublic = useAxiosPublic();

//   const onSubmit = (data) => {
//     // console.log(data);
//     creteduser(data.email, data.password).then((result) => {
//       const logetedUser = result.user;
//       // console.log(logetedUser);
//       updatedUserProfile(data.name, data.photoURL);
//       const userinfo = {
//         name: data.name,
//         email: data.email,
//         role: "user",
//       };
//       axiosPublic.post("/users", userinfo).then((res) => {
//         // console.log(res.data, 'user data added')
//         if (res.data.insertedId) {
//           reset();
//           Swal.fire({
//             title: "Drag me!",
//             icon: "success",
//             draggable: true,
//           });
//           navigated("/");
//         }
//       });
//     });
//   };

//   return (
//     <>
//       <Helmet>
//         <title>BMS || Signup</title>
//       </Helmet>
//       <div className="hero  min-h-screen">
//         <div className="hero-content flex-col ">
//           <div className="text-center lg:text-left"></div>
//           <div className="card bg-white/10 border  w-[900px]  shadow-2xl pb-10">
//             <form onSubmit={handleSubmit(onSubmit)} className="card-body">
//               <div className="flex justify-center items-center">
//                 <h1 className="text-3xl  text-white font-bold border-b-4 px-5 pb-2 rounded-lg">
//                   Signup!
//                 </h1>
//               </div>
//               <div className=" grid gap-5 grid-cols-2">
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Name</span>
//                   </label>
//                   <input
//                     {...register("name", { required: true })}
//                     type="name"
//                     placeholder="Name"
//                     className="input input-bordered"
//                   />
//                   {errors.name && (
//                     <span className="text-red-500">This field is required</span>
//                   )}
//                 </div>
//                 <div className="form-control">
//                   <label className="label">
//                     <span className="label-text">Photo Url</span>
//                   </label>
//                   <input
//                     {...register("photoURL", { required: true })}
//                     type="naphotoURLme"
//                     placeholder="photoURL"
//                     className="input input-bordered"
//                   />
//                   {errors.photoURL && (
//                     <span className="text-red-500">This field is required</span>
//                   )}
//                 </div>
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                   type="email"
//                   {...register("email", { required: true })}
//                   name="email"
//                   placeholder="email"
//                   className="input input-bordered"
//                 />
//                 {errors.email && (
//                   <span className="text-red-500">This field is required</span>
//                 )}
//               </div>
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                   type="password"
//                   name="password"
//                   {...register("password", {
//                     required: true,
//                     minLength: 5,
//                     maxLength: 20,
                    // pattern:
                    //   /(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}/,
//                   })}
//                   placeholder="password"
//                   className="input input-bordered"
//                 />
//                 {errors.password?.type === "required" && (
//                   <p className="text-red-500">
//                     password must be 6 character required{" "}
//                   </p>
//                 )}
//                 {errors.password?.type === "minLength" && (
//                   <p className="text-red-500">
//                     password must have 6 character{" "}
//                   </p>
//                 )}
//                 {errors.password?.type === "maxLength" && (
//                   <p className="text-red-500">password must be 20 character </p>
//                 )}
//                 {/* {errors.password?.type === "pattern" && (
//                   <p className="text-red-500">
//                     password must have one uppercase one lowercase one number
//                     one special character{" "}
//                   </p>
//                 )} */}
//                 {errors.password && (
//                   <span className="text-red-500">
//                     password must be 6 character required
//                   </span>
//                 )}

//                 <label className="label">
//                   <a href="#" className="label-text-alt link link-hover">
//                     Forgot password?
//                   </a>
//                 </label>
//               </div>
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary">signup</button>
//               </div>
//             </form>
//             <div className="px-5 ">
//               <Link
//                 className=" bg-orange-100 text-center w-full text-sm"
//                 to="/login"
//               >
//                 Alredy have a Account{" "}
//                 <span className="text-blue-500">Login</span>
//               </Link>
//             </div>

//             <SocialLogin></SocialLogin>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Signin;
