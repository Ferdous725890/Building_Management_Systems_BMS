import React from "react";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../../../../Hooks/UseManu/UseAuth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const MyProfile = () => {
  const { user } = UseAuth();
  const axiosPublic = useAxiosPublic();

  const {
    data: userdata = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["apartments", user?.email],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment/booking/${user.email}`);
      return res.data;
    },
    onError: (error) => {
      Swal.fire({
        title: "Error",
        text: error.message || "Failed to fetch data.",
        icon: "error",
        confirmButtonText: "OK",
      });
    },
  });

  // Show loading spinner while data is being fetched
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading text-green-500 loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Dashboard || My Profile</title>
      </Helmet>

      <div className="overflow-x-auto p-10 text-white">
        <h2 className="text-center text-2xl font-semibold mb-5">
          My Profile Information
        </h2>
        <table className="table">
          {/* Table Header */}
          <thead className="text-white bg-gray-500">
            <tr>
              <th>Numbers</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Apartment_No</th>
              <th>Floor_No</th>
              <th>Rent</th>
              <th>Status</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {userdata.map((items, index) => (
              <tr className="hover:bg-white/10" key={items._id}>
                <th>{index + 1}</th>
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
  );
};

export default MyProfile;
// import React from "react";
// import useAxiosSecure from "../../../../Hooks/UseManu/useAxiosSecure";
// import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
// import UseAuth from "../../../../Hooks/UseManu/UseAuth";
// import { ImEmbed } from "react-icons/im";
// import { Helmet } from "react-helmet";

// const MyProfile = () => {
//   const { user } = UseAuth();
//   const axiosPublic = useAxiosPublic();
//   const {
//     data: userdata = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["apartments"],
//     queryFn: async () => {
//       const res = await axiosPublic.get(`/apartment/booking/${user.email}`);
//       // console.log(res.data);
//       return res.data;
//     },
//   });
//   return (
//     <div>


//          <Helmet>
//         <title>Dashbord || My Profile</title>
//       </Helmet>
        

       


//       <div className="overflow-x-auto p-10 text-white">
//         <table className="table">
//           {/* head */}
//           <thead className="text-white bg-gray-500">
//             <tr>
//               <th>
//               Numbers
//               </th>
//               <th>User Name </th>
//               <th>Email </th>
//               <th>Apartment_No</th>
//               <th>Floor_No</th>
//               <th>Rent</th>
//               <th>Status</th>

//             </tr>
//           </thead>

//           <tbody>
//             {userdata.map((items, index) => (
//               <tr className="hover:bg-white/10" key={items._id}>
//                 {/* <th>{items.photoURL}</th> */}
//                 <th>{index + 1}</th>
//                 <td>
                 
//                     {user?.displayName}
                 
//                 </td>
//                 <td>
                 
//                     {user?.email}
                 
//                 </td>
//                 <td>{items.apartment_no}</td>
//                 <td>{items.floor_no}</td>
//                 <td>{items.rent}</td>
//                 <td ><div  className="bg-orange-100 pl-2 rounded-lg text-center text-orange-500">
//                 {items.status}
//                   </div></td>
              
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;
