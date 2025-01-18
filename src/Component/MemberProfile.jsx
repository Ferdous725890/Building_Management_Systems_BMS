import React from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseManu/UseAuth";

const MemberProfile = () => {
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
  return (
    <div>
      <div>
        <div className="overflow-x-auto p-10">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Number</th>
                <th>User Image</th>
                <th>User Name </th>
                <th>Email </th>
                <th>Apartment_No</th>
                <th>Floor_No</th>
                <th>Rent</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {userdata.map((items, index) => (
                <tr key={items._id}>
                  {/* <th>{items.photoURL}</th> */}
                  <th>{index + 1}</th>
                  <td>
                    <div>
                        <img className="w-16 h-16 rounded-full object-cover" src={user?.photoURL} alt="" />
                    </div>
                  </td>
                  <td>{user?.displayName}</td>
                  <td>{user?.email}</td>
                  <td>{items.apartment_no}</td>
                  <td>{items.floor_no}</td>
                  <td>{items.rent}</td>
                  <td>
                    <div className="bg-orange-100 pl-2 rounded-lg text-center text-orange-500">
                      {items.status}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberProfile;
