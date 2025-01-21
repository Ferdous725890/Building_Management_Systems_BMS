import React from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import CuponCard from "./CuponCard";

const CuponsClient = () => {
  const axiosPublic = useAxiosPublic();
  const {
    data: cuponsdata = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cupons"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/cupons`);
      // console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="text-white mt-10 container mx-auto w-11/12">
      <h2 className="text-center  text-4xl mb-10">
        {" "}
        Total Cupons {cuponsdata.length}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      {cuponsdata.map((cupon) => (
        <CuponCard cupon={cupon} key={cupon._id}></CuponCard>
      ))}
      </div>
    </div>
  );
};

export default CuponsClient;
