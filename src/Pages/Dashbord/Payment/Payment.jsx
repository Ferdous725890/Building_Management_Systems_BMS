import React from "react";
import { Link } from "react-router-dom";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import UseAuth from "../../../Hooks/UseManu/UseAuth";
import { useQuery } from "@tanstack/react-query";

const Payment = () => {


  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: userdata = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/apartment/booking/member/${user.email}`
      );
      // console.log(res.data);
      return res.data;
    },
  });
  if (isLoading) {
    <h2>loding...............</h2>;
  }

  return (
    <div className="p-10 text-white">
      payment
      <Link to={"/dashbord/paymentsuser"}>
        <button className="btn btn-primary">Payment</button>
      </Link>

{
  userdata.length
}




    </div>
  );
};

export default Payment;
