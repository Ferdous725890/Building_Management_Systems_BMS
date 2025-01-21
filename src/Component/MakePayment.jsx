import React from "react";
import UseAuth from "../Hooks/UseManu/UseAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const MakePayment = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: userdata = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment/booking/${user.email}`);
      // console.log(res.data);
      return res.data;
    },
  });

  return (
    <div className="p-10 text-white">
      {user?.displayName}
      {user?.email}
      <div>
        {userdata.map((items) => (
          <>
            <p>{items.apartment_no}</p>
            <p>{items.floor_no}</p>
            <p>{items.rent}</p>
          </>
        ))}
      </div>
    </div>
  );
};

export default MakePayment;
