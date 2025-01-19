import React from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseManu/UseAuth";

import { MdDeleteForever, MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";

const AgrementRequest = () => {
  const axiousepulich = useAxiosPublic();
  const { user } = UseAuth();
  const { refetch, data: allAgrementRequest = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiousepulich.get(`/apartment/booking`);

      return res.data;
    },
  });

  const handelupdateRequest = async (id) => {
    const res = await axiousepulich.patch(`/apartment/booking/${id}`);
    console.log(res.data);
    refetch();
  };

  const handeldeleted = async (id) => {
    console.log(id);
    const res = await axiousepulich.delete(`/apartment/booking/${id}`);
    console.log(res.data);
    refetch();
  };

  return (
    <div className="p-10 text-white">
      <div className="flex justify-center items-center ">
        <p className="text-xl border-b-4 pb-2 px-4 rounded-lg mb-5 text-white">
          {" "}
          Agreement Requests {allAgrementRequest.length}
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-white bg-gray-500">
              <th>Number</th>
              <th>User_Name</th>
              <th>User_Email</th>
              <th>Block_Name</th>
              <th>Floor_No</th>
              <th>Room_No</th>
              <th>Rent</th>
              <th>Status</th>
              <th>Action</th>
              <th>Accept Request</th>
            
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
                      {/* <MdDeleteForever className="text-2xl text-red-500" /> */}
                      <div class="relative group inline-block">
                        <MdOutlinePersonRemoveAlt1 className="text-2xl text-red-500 " />

                        <span class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Reject
                        </span>
                      </div>
                    </button>
                  </div>
                </td>
                {/* Accept button */}
                <td>
                  <div className=" rounded-lg px-1 py-1 text-center ">
                    <button onClick={() => handelupdateRequest(request._id)}>
                    <div class="relative group inline-block">
                    <IoIosCheckmarkCircle  className="text-2xl text-green-500"/>

                        <span class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        Accept 
                        </span>
                      </div>
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
