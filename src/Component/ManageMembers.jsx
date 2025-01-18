import React from "react";
import UseAuth from "../Hooks/UseManu/UseAuth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { MdDeleteForever } from "react-icons/md";

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
  const handelmemberdeleted = (id) =>{
    console.log(id);
    const res = axiosPublic.delete(`/apartment/bookings/${id}`)
    console.log(res.data);
    refetch()

  }
  return (
    <div className="p-10">
      {membersdata.length}
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Numbers</th>

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
                  <button onClick={()=> handelmemberdeleted (member._id)} className="btn btn-ghost btn-xs">
                    {" "}
                    <MdDeleteForever className="text-xl text-red-500" />{" "}
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
