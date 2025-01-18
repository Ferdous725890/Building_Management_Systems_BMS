import React from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseManu/UseAuth";

import { MdDeleteForever } from "react-icons/md";

const AgrementRequest = () => {
  const axiousepulich = useAxiosPublic();
  const { user } = UseAuth();
  const { refetch, data: allAgrementRequest = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiousepulich.get(`/apartment/booking`);
      // console.log(res.data);
      return res.data;
    },
  });

  //update user // Member
  const handelupdateRequest = async (id) => {
    const res = await axiousepulich.patch(`/apartment/booking/${id}`);
    console.log(res.data);
    refetch()
  };

  const handeldeleted = async (id) => {
    console.log(id);
    const res = await axiousepulich.delete(`/apartment/booking/${id}`);
    console.log(res.data);
    refetch();
  };

  return (
    <div className="p-10">
      {allAgrementRequest.length}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>User_Name</th>
              <th>User_Email</th>
              <th>Block Name</th>
              <th>Floor Name</th>
              <th>Apartment Name</th>
              <th>Rent</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allAgrementRequest.map((request, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{request.userName}</td>
                <td>{request.email}</td>
                <td>{request.block_name}</td>
                <td>{request.floor_no}</td>
                <td>{request.apartment_no}</td>
                <td>{request.rent}</td>
                <td>
                  <div
                    className={
                      request.status === "pending"
                        ? `                 
                    bg-yellow-500 px-1 py-1 rounded-lg text-center`
                        : "bg-green-500 px-1 py-1 rounded-lg text-center"
                    }
                  >
                    {request.status}
                  </div>
                </td>

                {/* Deleted button */}
                <td>
                  <div className="px-1 py-1 text-center ">
                    <button onClick={() => handeldeleted(request._id)}>
                      <MdDeleteForever className="text-2xl text-red-500" />
                    </button>
                  </div>
                </td>
                {/* Accept button */}
                <td>
                  <div className="bg-green-500 rounded-lg px-1 py-1 text-center ">
                    <button onClick={() => handelupdateRequest(request._id)}>
                      Accept Request
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AgrementRequest;
