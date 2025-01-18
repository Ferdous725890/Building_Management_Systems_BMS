import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const CouponsSection = () => {
  const { data: coupons = [], isLoading } = useQuery("coupons", async () => {
    const res = await axios.get("/coupons"); // API endpoint
    return res.data;
  });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-5 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Available Coupons</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {coupons.map((coupon) => (
          <div key={coupon._id} className="p-4 bg-white shadow-md rounded-md">
            <h3 className="text-lg font-semibold">{coupon.couponCode}</h3>
            <p>{coupon.description}</p>
            <p className="text-green-500 font-bold">{coupon.discountPercentage}% Off</p>
            <p className="text-gray-500 text-sm">Valid till: {coupon.validity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CouponsSection;
