import React, { useState } from "react";
import { useStripe, useElements, CardElement, Elements } from "@stripe/react-stripe-js";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import UseAuth from "../../../Hooks/UseManu/UseAuth";
import { loadStripe } from "@stripe/stripe-js";

// Stripe public key
const stripePromise = loadStripe(`${import.meta.env.VITE_PAYMENT_GETWAY_PK}`);

const CheckoutForm = ({ rent, discountedRent, onSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      Swal.fire("Error", "Stripe is not loaded properly!", "error");
      return;
    }

    setIsProcessing(true);

    // Get the client secret from the server
    const { data } = await axiosPublic.post("/payment-intent", { amount: discountedRent || rent });

    const { error, paymentIntent } = await stripe.confirmCardPayment(data.clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (error) {
      Swal.fire("Payment Failed", error.message, "error");
    } else if (paymentIntent.status === "succeeded") {
      Swal.fire("Payment Successful", "Your payment has been completed!", "success");
      onSuccess(paymentIntent);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handlePayment} className="space-y-4">
      <CardElement className="p-2 border rounded-lg bg-gray-100 text-gray-800" />
      <button
        type="submit"
        disabled={!stripe || isProcessing}
        className="btn btn-primary w-full"
      >
        {isProcessing ? "Processing..." : `Pay $${discountedRent || rent}`}
      </button>
    </form>
  );
};

const Payment = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const [coupon, setCoupon] = useState("");
  const [discountedRent, setDiscountedRent] = useState(null);

  const { data: userdata = [], isLoading, isError, refetch } = useQuery({
    queryKey: ["apartments", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment/booking/member/${user.email}`);
      return res.data;
    },
    onError: (error) => {
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to fetch data.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  const handleApplyCoupon = () => {
    const validCoupons = {
      DISCOUNT10: 10,
      DISCOUNT20: 20,
      DISCOUNT30: 30,
    };

    if (validCoupons[coupon]) {
      const discount = validCoupons[coupon];
      const rent = userdata[0]?.rent || 0;
      const newRent = rent - (rent * discount) / 100;
      setDiscountedRent(newRent);
      Swal.fire({
        title: "Coupon Applied",
        text: `You received a ${discount}% discount!`,
        icon: "success",
        confirmButtonText: "OK",
      });
    } else {
      Swal.fire({
        title: "Invalid Coupon",
        text: "The coupon code you entered is not valid.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading text-green-500 loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-10 text-white">
      <Helmet>
        <title>Dashboard || Payment</title>
      </Helmet>

      <h2 className="text-center text-2xl font-semibold mb-5">
        Member Payment Information
      </h2>

      {userdata.length > 0 && (
        <div className="max-w-lg mx-auto bg-gray-800 p-5 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-300">Member Email</label>
              <input
                type="text"
                readOnly
                value={user?.email || ""}
                className="input input-bordered w-full bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300">Floor</label>
              <input
                type="text"
                readOnly
                value={userdata[0]?.floor_no || ""}
                className="input input-bordered w-full bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300">Apartment No/Room No</label>
              <input
                type="text"
                readOnly
                value={userdata[0]?.apartment_no || ""}
                className="input input-bordered w-full bg-gray-700 text-white"
              />
            </div>
            <div>
              <label className="block text-gray-300">Rent</label>
              <input
                type="text"
                readOnly
                value={discountedRent || userdata[0]?.rent || ""}
                className="input input-bordered w-full bg-gray-700 text-white"
              />
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Enter coupon code"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="input input-bordered w-full bg-gray-700 text-white"
              />
              <button
                type="button"
                onClick={handleApplyCoupon}
                className="btn btn-success"
              >
                Apply Coupon
              </button>
            </div>
          </form>

          {/* Stripe Payment */}
          <Elements stripe={stripePromise}>
            <CheckoutForm
              rent={userdata[0]?.rent}
              discountedRent={discountedRent}
              onSuccess={(paymentIntent) => console.log(paymentIntent)}
            />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Payment;


// import React from "react";
// import { Link } from "react-router-dom";
// import useAxiosPublic from "../../../Hooks/useAxiosPublic";
// import UseAuth from "../../../Hooks/UseManu/UseAuth";
// import { useQuery } from "@tanstack/react-query";
// import { Helmet } from "react-helmet";

// const Payment = () => {

//   const { user } = UseAuth();
//   const axiosPublic = useAxiosPublic();

//   const {
//     data: userdata = [],
//     isLoading,
//     isError,


//     refetch,
//   } = useQuery({
//     queryKey: ["apartments", user?.email],
//     queryFn: async () => {
//       const res = await axiosPublic.get(
//         `/apartment/booking/member/${user.email}`
//       );
//       return res.data;
//     },
//     onError: (error) => {
//       Swal.fire({
//         title: "Error",
//         text: error.message || "Failed to fetch data.",
//         icon: "error",
//         confirmButtonText: "OK",
//       });
//     },
//   });


//   return (



    
//     <div className="p-10 text-white">
//      <div className="flex items-center justify-evenly ">
//      <div className="text-xl">
//         payment
//       </div>
//      <div>
//      <Link to={"/dashbord/paymentsuser"}>
//         <button className="btn btn-primary">Payment</button>
//       </Link>
//      </div>
//      </div>

//       <div>
//       <Helmet>
//         <title>Dashboard || Member Profile</title>
//       </Helmet>

//       <div className="overflow-x-auto p-10 text-white">
//         <h2 className="text-center text-2xl font-semibold mb-5">
//           Member Profile Information
//         </h2>
//         <table className="table">
//           {/* Table Header */}
//           <thead className="text-white bg-slate-500">
//             <tr>
//               <th>Numbers</th>
//               <th>User_Image</th>
//               <th>User Name</th>
//               <th>Email</th>
//               <th>Apartment_No</th>
//               <th>Floor_No</th>
//               <th>Rent</th>
//               <th>Status</th>
//             </tr>
//           </thead>

//           {/* Table Body */}
//           <tbody>
//             {userdata.map((items, index) => (
//               <tr className="hover:bg-white/5 border-gray-400" key={items._id}>
//                 <th>{index + 1}</th>
//                 <td>
//                   <div>
//                     <img
//                       className="w-16 h-16 rounded-full object-cover"
//                       referrerPolicy="no-referrer"
//                       src={user?.photoURL || "https://via.placeholder.com/150"}
//                       alt="User"
//                     />
//                   </div>
//                 </td>
//                 <td>{user?.displayName}</td>
//                 <td>{user?.email}</td>
//                 <td>{items.apartment_no}</td>
//                 <td>{items.floor_no}</td>
//                 <td>{items.rent}</td>
//                 <td>
//                   <div className="bg-orange-100 pl-2 rounded-lg text-center text-orange-500">
//                     {items.status}
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>



//     </div>
//   );
// };

// export default Payment;
