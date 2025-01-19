import React from "react";
import UseAuth from "../Hooks/UseManu/UseAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever, MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { CiCircleRemove } from "react-icons/ci";

const ManageMembers = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();
  const {
    refetch,
    data: membersdata = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment/bookings`);
      // console.log(res.data);
      return res.data;
    },
  });
  const handelmemberdeleted = (id) => {
    console.log(id);
    const res = axiosPublic.delete(`/apartment/bookings/${id}`);
    console.log(res.data);
    refetch();
  };
  return (
    <div className="p-5 text-white">
      <div className="flex justify-center items-center ">
        <p className="text-xl border-b-4 pb-2 px-4 rounded-lg mb-5">
          {" "}
          All Members {membersdata.length}
        </p>
      </div>
      <div className="overflow-x-auto ">
        <table className="table">
          {/* head */}
          <thead className="bg-gray-500">
            <tr className="text-white">
              <th className="">Numbers</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {membersdata.map((member, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{member.userName}</td>
                <td>{member.useremail}</td>
                <td>{member.status}</td>
                <th>
                  <button
                    onClick={() => handelmemberdeleted(member._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    {" "}
                    <div class="relative group inline-block">
                      <MdOutlinePersonRemoveAlt1 className="text-2xl text-red-500 " />

                      <span class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Remove
                      </span>
                    </div>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default ManageMembers;
