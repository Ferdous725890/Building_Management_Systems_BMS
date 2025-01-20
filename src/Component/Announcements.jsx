import React from "react";
import UseAuth from "../Hooks/UseManu/UseAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const Announcements = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    data: announcementdata = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/admin/announcements`);
      // console.log(res.data);
      return res.data;
    },
  });
  return (
    <div className="p-10 text-white">
      <h2 className="text-2xl mb-5">
        Announcements ({announcementdata.length})
      </h2>
      {announcementdata.map((data) => (
        <>
          <div className="border mb-10 p-5 rounded-lg">
            <h1 className="text-xl">{data.title}</h1>
            <p>{data.description}</p>
          </div>
        </>
      ))}
    </div>
  );
};

export default Announcements;
