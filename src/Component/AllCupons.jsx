import React, { useState } from "react";
import Cupons from "./Cupons";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { RxCross1 } from "react-icons/rx";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2"; // Import SweetAlert

const AllCupons = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const axiosPublic = useAxiosPublic();
  const {
    data: cupons = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["cupons"],
    queryFn: async () => {
      const res = await axiosPublic.get("/cupons");
      console.log(res.data);
      return res.data;
    },
  });

  const hendelStatusChange = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to change the status of this coupon?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.patch(`/cupons/${id}`);
        Swal.fire("Updated!", "The coupon status has been changed.", "success");
        refetch();
      }
    });
  };

  const handelmodal = () => {
    setModalOpen(true);
  };

  const handeleted = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this coupon?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosPublic.delete(`/cupons/${id}`);
        Swal.fire("Deleted!", "The coupon has been deleted.", "success");
        refetch();
      }
    });
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading text-green-500 loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="p-10 bg-black text-white">
      <div className="flex justify-center items-center">
        <p className="text-xl border-b-4 pb-2 px-4 rounded-lg mb-5">
          All Cupons {cupons.length}
        </p>
      </div>
      <h1
        onClick={handelmodal}
        className="bg-blue-500 mt-5 hover:bg-blue-800 mb-5 text-xl font-bold text-center rounded-md py-[4px]"
      >
        Add Cupons
      </h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead className="text-white bg-gray-500">
            <tr>
              <th>Number</th>
              <th>Cupons</th>
              <th>Cupons Code</th>
              <th>Discount</th>
              <th>Discription</th>
              <th>Expire Date</th>
              <th>Status</th>
              <th>Change Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* All cupons table */}
            {cupons.map((cupon, index) => (
              <tr key={index} className="hover:bg-white/10 hover:border-none">
                <th>{index + 1}</th>
                <th>{cupon.cupons}</th>
                <th>{cupon.cuponscode}</th>
                <th>{cupon.discount}</th>
                <th>{cupon.Discription}</th>
                <th>{cupon.expiredate}</th>
                <th>
                  <div
                    className={
                      cupon.status === "active"
                        ? "bg-green-500 text-center rounded-md"
                        : "bg-red-500 text-center rounded-md px-1"
                    }
                  >
                    {cupon.status}
                  </div>
                </th>

                <th>
                  <button
                    onClick={() => hendelStatusChange(cupon._id)}
                    className="text-green-500"
                  >
                    Change Status
                  </button>
                </th>
                <th>
                  <div className="px-1 py-1 text-center">
                    <button onClick={() => handeleted(cupon._id)}>
                      <div className="relative group inline-block">
                        <MdDeleteForever className="text-2xl text-red-500" />
                        <span className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
                          Deleted
                        </span>
                      </div>
                    </button>
                  </div>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for adding cupons */}
      <div
        className={`${
          modalOpen ? "scale-[1] opacity-100" : "scale-[0] opacity-0"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300`}
      >
        <div className="w-[90%] lg:w-[60%] h-full pb-32 bg-white rounded-lg p-4">
          <div className="w-full flex items-end justify-end">
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all bg-black duration-300 cursor-pointer"
              onClick={() => setModalOpen(false)}
            />
          </div>

          <Cupons setModalOpen={setModalOpen}></Cupons>

          <div className="flex items-center gap-3 lg:gap-5 w-full justify-end mt-6">
            {/* <button
              className="px-4 py-2 bg-[#3B9DF8] rounded-lg text-[#ffffff]"
              onClick={() => setModalOpen(false)}
            >
              Confirm
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCupons;
// import React, { useState } from "react";
// import Cupons from "./Cupons";
// import useAxiosPublic from "../Hooks/useAxiosPublic";
// import { useQuery } from "@tanstack/react-query";
// import { RxCross1 } from "react-icons/rx";
// import { MdDeleteForever } from "react-icons/md";

// const AllCupons = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const axiosPublic = useAxiosPublic();
//   const {
//     data: cupons = [],
//     isPending,
//     refetch,
//   } = useQuery({
//     queryKey: ["cupons"],
//     queryFn: async () => {
//       const res = await axiosPublic.get("/cupons");
//       console.log(res.data);
//       return res.data;
//     },
//   });
//   const hendelStatusChange = async (id) => {
//     console.log(id);
//     const res = await axiosPublic.patch(`/cupons/${id}`);
//     console.log(res.data);
//     refetch();
//   };
//   const handelmodal = () => {
//     setModalOpen(true);
//   };

//   const handeleted = async(id) => {
//     console.log(id);
//     const res = await axiosPublic.delete(`/cupons/${id}`)
//     console.log(res.data);
//     refetch()
//   };


//   return (
//     <div className="p-10 bg-black text-white">
//       <div className="flex justify-center items-center ">
//         <p className="text-xl border-b-4 pb-2 px-4 rounded-lg mb-5">
//           {" "}
//           All Cupons {cupons.length}
//         </p>
//       </div>
//       <h1
//         onClick={handelmodal}
//         className=" bg-blue-500 mt-5 hover:bg-blue-800 mb-5 text-xl font-bold text-center rounded-md py[4px]"
//       >
//         Add Cupons
//       </h1>
//       <div className="overflow-x-auto">
//         <table className="table">
//           {/* head */}
//           <thead className="text-white bg-gray-500">
//             <tr>
//               <th>Number</th>
//               <th>Cupons</th>
//               <th>Cupons Code</th>
//               <th>Discount</th>
//               <th>Discription</th>
//               <th>Expire Date </th>
//               <th>Status</th>
//               <th>Change Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody className="">
//             {/* All cupons tabled */}
//             {cupons.map((cupon, index) => (
//               <tr key={index} className="hover:bg-white/10 hover:border-none">
//                 <th>{index + 1}</th>
//                 <th>{cupon.cupons}</th>
//                 <th>{cupon.cuponscode}</th>
//                 <th>{cupon.discount}</th>
//                 <th>{cupon.Discription}</th>
//                 <th>{cupon.expiredate}</th>
//                 <th>
//                   <div
//                     className={
//                       cupon.status === "active"
//                         ? "bg-green-500  text-center rounded-md"
//                         : "bg-red-500  text-center rounded-md px-1"
//                     }
//                   >
//                     {cupon.status}
//                   </div>
//                 </th>

//                 <th>
//                   <button
//                     onClick={() => hendelStatusChange(cupon._id)}
//                     className="text-green-500"
//                   >
//                     Change Status
//                   </button>
//                 </th>
//                 <th>
//                   <div className="px-1 py-1 text-center ">
//                     <button onClick={() => handeleted(cupon._id)}>
            
//                       <div class="relative group inline-block">
//                         <MdDeleteForever className="text-2xl text-red-500 " />

//                         <span class="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black text-white text-xm rounded py-1 px-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                           Deleted
//                         </span>
//                       </div>
//                     </button>
//                   </div>
//                 </th>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//       {/* ------------------------ */}{" "}
//       <div
//         className={`${
//           modalOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
//         } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300 `}
//       >
//         <div className="w-[90%] lg:w-[60%] h-full pb-32 bg-white rounded-lg p-4 ">
//           <div className="w-full flex items-end justify-end">
//             <RxCross1
//               className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all  bg-black  duration-300 cursor-pointer"
//               onClick={() => setModalOpen(false)}
//             />
//           </div>

//           <Cupons setModalOpen={setModalOpen}></Cupons>

//           <div className="flex items-center gap-3 lg:gap-5 w-full justify-end mt-6 ">
//             {/* <button
//               className="px-4 py-2 bg-[#3B9DF8] rounded-lg text-[#ffffff]"
//               onClick={() => setModalOpen(false)}
//             >
//               Confirm
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllCupons;
