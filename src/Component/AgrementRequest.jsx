import React, { useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import UseAuth from "../Hooks/UseManu/UseAuth";
import { MdDeleteForever, MdOutlinePersonRemoveAlt1 } from "react-icons/md";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AgreementRequest = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = UseAuth();
  const [loading, setLoading] = useState(false);

  const { refetch, data: allAgreementRequest = [] } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment/booking`);
      return res.data;
    },
  });


  const handleMember = async (email) => {
    setLoading(true);
    try {
      const res = await axiosPublic.patch(`/user/admin/${email}`);
      if (res.status === 200) {
        Swal.fire({
          title: "Member Added!",
          text: `User with email ${email} is now a member!`,
          icon: "success",
          confirmButtonText: "OK",
        });
        refetch();
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateRequest = async (request) => {
  
    setLoading(true);
    try {
      const res = await axiosPublic.patch(`/apartment/booking/${request._id}`);
      if (res.status === 200) {
        Swal.fire({
          title: "Request Accepted!",
          text: `You have accepted the request for ${request.userName}.`,
          icon: "success",
          confirmButtonText: "OK",
        });
        refetch();
     
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    setLoading(true);
    try {
      const res = await axiosPublic.delete(`/apartment/booking/${id}`);
      if (res.status === 200) {
        Swal.fire({
          title: "Request Rejected!",
          text: "You have successfully rejected the request.",
          icon: "success",
          confirmButtonText: "OK",
        });
        refetch();
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: error.message,
        icon: "error",
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
    }
  };

 

  return (
    <>
      <Helmet>
        <title>Dashboard || Agreement Requests</title>
      </Helmet>

      <div className="p-10 text-white bg-black">
        <div className="flex justify-center items-center">
          <p className="text-xl border-b-4 pb-2 px-4 rounded-lg mb-5 text-white">
            Agreement Requests {allAgreementRequest.length}
          </p>
        </div>

        {loading && (
          <div className="flex justify-center mb-4">
            <span className="loading text-green-500 loading-bars loading-lg"></span>
          </div>
        )}

        <div className="overflow-x-auto overflow-x-scroll">
          <table className="table">
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
                <th>Make Member</th>
              </tr>
            </thead>
            <tbody>
              {allAgreementRequest.map((request, index) => (
                <tr key={index}>
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
                          ? "bg-yellow-500 px-1 py-1 rounded-lg text-center"
                          : "bg-green-500 px-1 py-1 rounded-lg text-center"
                      }
                    >
                      {request.status}
                    </div>
                  </td>

                  <td>
                    <div className="px-1 py-1 text-center">
                      <button onClick={() => handleDelete(request._id)}>
                        <div className="relative group inline-block">
                          <MdOutlinePersonRemoveAlt1 className="text-2xl text-red-500" />
                          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            Reject
                          </span>
                        </div>
                      </button>
                    </div>
                  </td>

                  <td>
                    <div className="rounded-lg px-1 py-1 text-center">
                      <button onClick={() => handleUpdateRequest(request)}>
                        <div className="relative group inline-block">
                          <IoIosCheckmarkCircle className="text-2xl text-green-500" />
                          <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                            Accept
                          </span>
                        </div>
                      </button>
                    </div>
                  </td>

                  <td>
                    <button onClick={() => handleMember(request.email)}>Member</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AgreementRequest;



// import React, { useState } from "react";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import UseAuth from "../Hooks/UseManu/UseAuth";
// import { MdDeleteForever, MdOutlinePersonRemoveAlt1 } from "react-icons/md";
// import { IoIosCheckmarkCircle } from "react-icons/io";
// import { Helmet } from "react-helmet";
// import Swal from "sweetalert2";

// const AgreementRequest = () => {
//   const axiosPublic = useAxiosPublic();
//   const { user } = UseAuth();
//   const [loading, setLoading] = useState(false);

//   const { refetch, data: allAgreementRequest = [] } = useQuery({
//     queryKey: ["apartments"],
//     queryFn: async () => {
//       const res = await axiosPublic.get(`/apartment/booking`);
//       return res.data;
//     },
//   });


//   const handleMember = async (email) => {
//     setLoading(true);
//     try {
//       const res = await axiosPublic.patch(`/user/admin/${email}`);
//       if (res.status === 200) {
//         Swal.fire({
//           title: "Member Added!",
//           text: `User with email ${email} is now a member!`,
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//         refetch();
//       }
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: error.message,
//         icon: "error",
//         confirmButtonText: "Try Again",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleUpdateRequest = async (request) => {
//     setLoading(true);
//     try {
//       const res = await axiosPublic.patch(`/apartment/booking/${request._id}`);
//       if (res.status === 200) {
//         Swal.fire({
//           title: "Request Accepted!",
//           text: `You have accepted the request for ${request.userName}.`,
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//         refetch();
     
//       }
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: error.message,
//         icon: "error",
//         confirmButtonText: "Try Again",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleDelete = async (id) => {
//     setLoading(true);
//     try {
//       const res = await axiosPublic.delete(`/apartment/booking/${id}`);
//       if (res.status === 200) {
//         Swal.fire({
//           title: "Request Rejected!",
//           text: "You have successfully rejected the request.",
//           icon: "success",
//           confirmButtonText: "OK",
//         });
//         refetch();
//       }
//     } catch (error) {
//       Swal.fire({
//         title: "Error!",
//         text: error.message,
//         icon: "error",
//         confirmButtonText: "Try Again",
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

 

//   return (
//     <>
//       <Helmet>
//         <title>Dashboard || Agreement Requests</title>
//       </Helmet>

//       <div className="p-10 text-white bg-black">
//         <div className="flex justify-center items-center">
//           <p className="text-xl border-b-4 pb-2 px-4 rounded-lg mb-5 text-white">
//             Agreement Requests {allAgreementRequest.length}
//           </p>
//         </div>

//         {loading && (
//           <div className="flex justify-center mb-4">
//             <span className="loading text-green-500 loading-bars loading-lg"></span>
//           </div>
//         )}

//         <div className="overflow-x-auto">
//           <table className="table">
//             <thead>
//               <tr className="text-white bg-gray-500">
//                 <th>Number</th>
//                 <th>User_Name</th>
//                 <th>User_Email</th>
//                 <th>Block_Name</th>
//                 <th>Floor_No</th>
//                 <th>Room_No</th>
//                 <th>Rent</th>
//                 <th>Status</th>
//                 <th>Action</th>
//                 <th>Accept Request</th>
//                 <th>Make Member</th>
//               </tr>
//             </thead>
//             <tbody>
//               {allAgreementRequest.map((request, index) => (
//                 <tr key={index}>
//                   <td>{index + 1}</td>
//                   <td>{request.userName}</td>
//                   <td>{request.email}</td>
//                   <td>{request.block_name}</td>
//                   <td>{request.floor_no}</td>
//                   <td>{request.apartment_no}</td>
//                   <td>{request.rent}</td>

//                   <td>
//                     <div
//                       className={
//                         request.status === "pending"
//                           ? "bg-yellow-500 px-1 py-1 rounded-lg text-center"
//                           : "bg-green-500 px-1 py-1 rounded-lg text-center"
//                       }
//                     >
//                       {request.status}
//                     </div>
//                   </td>

//                   <td>
//                     <div className="px-1 py-1 text-center">
//                       <button onClick={() => handleDelete(request._id)}>
//                         <div className="relative group inline-block">
//                           <MdOutlinePersonRemoveAlt1 className="text-2xl text-red-500" />
//                           <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                             Reject
//                           </span>
//                         </div>
//                       </button>
//                     </div>
//                   </td>

//                   <td>
//                     <div className="rounded-lg px-1 py-1 text-center">
//                       <button onClick={() => handleUpdateRequest(request)}>
//                         <div className="relative group inline-block">
//                           <IoIosCheckmarkCircle className="text-2xl text-green-500" />
//                           <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-sm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                             Accept
//                           </span>
//                         </div>
//                       </button>
//                     </div>
//                   </td>

//                   <td>
//                     <button onClick={() => handleMember(request.email)}>Member</button>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AgreementRequest;



