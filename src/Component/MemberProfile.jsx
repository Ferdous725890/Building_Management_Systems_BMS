import React from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseManu/UseAuth";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const MemberProfile = () => {
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
      const res = await axiosPublic.get(
        `/apartment/booking/member/${user.email}`
      );
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

  // Show loading spinner if data is being fetched
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
        <title>Dashboard || Member Profile</title>
      </Helmet>

      <div className="overflow-x-auto p-10 text-white">
        <h2 className="text-center text-2xl font-semibold mb-5">
          Member Profile Information
        </h2>
        <table className="table">
          {/* Table Header */}
          <thead className="text-white bg-slate-500">
            <tr>
              <th>Number</th>
              <th>User_Image</th>
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
              <tr className="hover:bg-white/5 border-gray-400" key={items._id}>
                <th>{index + 1}</th>
                <td>
                  <div>
                    <img
                      className="w-16 h-16 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                      src={user?.photoURL || "https://via.placeholder.com/150"}
                      alt="User"
                    />
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
  );
};

export default MemberProfile;
// import React from "react";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import UseAuth from "../Hooks/UseManu/UseAuth";
// import { Helmet } from "react-helmet";

// const MemberProfile = () => {
//   const { user } = UseAuth();
//   const axiosPublic = useAxiosPublic();
//   const {
//     data: userdata = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["apartments"],
//     queryFn: async () => {
//       const res = await axiosPublic.get(
//         `/apartment/booking/member/${user.email}`
//       );
//       // console.log(res.data);
//       return res.data;
//     },
//   });
//   if (isLoading) {
//     <h2>loding...............</h2>;
//   }
//   return (
//     <div>


//          <Helmet>
//         <title>Dashbord || My Profile</title>
//       </Helmet>
        

     
//       <div>
//         <div className="overflow-x-auto p-10 text-white">
//           <table className="table">
//             {/* head */}
//             <thead className="text-white bg-slate-500">
//               <tr>
//                 <th>Numbers</th>
//                 <th>User_Image</th>
//                 <th>User Name </th>
//                 <th>Email </th>
//                 <th>Apartment_No</th>
//                 <th>Floor_No</th>
//                 <th>Rent</th>
//                 <th>Status</th>
//               </tr>
//             </thead>

//             <tbody>
//               {userdata.map((items, index) => (
//                 <tr  className="hover:bg-white/5 border-gray-400  " key={items._id}>
//                   {/* <th>{items.photoURL}</th> */}
//                   <th>{index + 1}</th>
//                   <td>
//                     <div>
//                       <img

//                         className="w-16 h-16 rounded-full object-cover"
//                         referrerPolicy="no-referance"
//                         src={user?.photoURL}
//                         alt=""
//                       />
//                     </div>
//                   </td>
//                   <td>{user?.displayName}</td>
//                   <td>{user?.email}</td>
//                   <td>{items.apartment_no}</td>
//                   <td>{items.floor_no}</td>
//                   <td>{items.rent}</td>
//                   <td>
//                     <div className="bg-orange-100 pl-2 rounded-lg text-center text-orange-500">
//                       {items.status}
//                     </div>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MemberProfile;
