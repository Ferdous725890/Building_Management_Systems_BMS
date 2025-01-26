import React, { useState, useEffect } from "react";
import {
  FaAddressBook,
  FaCalendarDay,
  FaHome,
  FaList,
  FaShoppingCart,
  FaVoicemail,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import useCats from "../../../../Hooks/UseManu/useCats";
import useAdmin from "../../../../Hooks/useAdmin";
import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import UseAuth from "../../../../Hooks/UseManu/UseAuth";
import { useQuery } from "@tanstack/react-query";

const Dashbord = () => {
  const { user } = UseAuth();
  const [cart] = useCats();
  const [isAdmin] = useAdmin();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const { data: userdata = [] } = useQuery({
    queryKey: [user?.email, "user"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/alluserdata/${user.email}`);
      return res.data;
    },
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Navigate based on role
  useEffect(() => {
    if (isAdmin) {
      navigate("/dashbord/adminprofile");
    } else if (userdata.role === "member") {
      navigate("/dashbord/member");
    } else {
      navigate("/dashbord/myprofile");
    }
  }, [isAdmin, userdata.role, navigate]);

  return (
    <div className="flex bg-black min-h-[100vh] min-w-[100vh]">
      {/* Sidebar Toggle Button */}
      <button
        className="text-white p-3 bg-orange-500 fixed z-50 top-4 left-4 rounded-full md:hidden"
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>


        {/* Sidebar */}
        <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white/10 text-white transform transition-transform duration-300 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        <ul className="menu">
          {isAdmin ? (
            <>
              <li>
                <NavLink to={"/dashbord/adminprofile"}>
                  <FaHome /> Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/managemenber"}>
                  <FaCalendarDay /> Manage Members
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/Announcement/admin"}>
                  <FaAddressBook /> Announcement
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/agrementRequest"}>
                  <FaCalendarDay /> Agreement Request
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/coupons"}>
                  <FaCalendarDay /> Manage Coupons
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/allusers"}>
                  <FaAddressBook /> All Users
                </NavLink>
              </li>
            </>
          ) : userdata.role === "member" ? (
            <>
              <li>
                <NavLink to={"/dashbord/member"}>Member Profile</NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/payments"}>Payment</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashbord/myprofile"}>
                  <FaHome /> User Profile
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/announcement"}>Announcements</NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome /> User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contactme"}>
              <FaVoicemail /> Contact
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>
              <FaVoicemail /> About
            </NavLink>
          </li>
        </ul>
      </div>


      {/* Main Content */}
      <div className="flex-1 ml-0 md:">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashbord;



// import React, { useState } from "react";
// import {
//   FaAddressBook,
//   FaCalendarDay,
//   FaHome,
//   FaList,
//   FaShoppingCart,
//   FaVoicemail,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import useCats from "../../../../Hooks/UseManu/useCats";
// import useAdmin from "../../../../Hooks/useAdmin";
// import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
// import UseAuth from "../../../../Hooks/UseManu/UseAuth";
// import { useQuery } from "@tanstack/react-query";

// const Dashbord = () => {
//   const { user } = UseAuth();
//   const [cart] = useCats();
//   const [isAdmin] = useAdmin();
//   const axiosPublic = useAxiosPublic();
//   const navigate = useNavigate()

//   const { data: userdata = [] } = useQuery({
//     queryKey: [user?.email, "user"],
//     queryFn: async () => {
//       const res = await axiosPublic.get(`/alluserdata/${user.email}`);
//       // console.log(res.data);
//       return res.data;
//     },
//   });
//   console.log(userdata);


//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };




//   return (
//     // min-h-[100vh] min-w-[100vh]
//     <div className="flex bg-black min-h-[100vh] min-w-[100vh]">
//       {/* Sidebar Toggle Button */}
//       <button
//         className="text-white p-3 bg-orange-500 fixed z-50 top-4 left-4 rounded-full md:hidden"
//         onClick={toggleSidebar}
//       >
//         {isSidebarOpen ? <FaTimes /> : <FaBars />}
//       </button>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 h-screen w-64 bg-orange-500 text-white transform transition-transform duration-300 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } md:translate-x-0 md:relative`}
//       >
//         <ul className="menu">
//           {isAdmin ? (
//             <>
//           <li>
//                 <NavLink to={"/dashbord/adminprofile"}>
//                   <FaHome /> Admin Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/dashbord/managemenber"}>
//                   <FaCalendarDay /> Manage Members
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/dashbord/Announcement/admin"}>
//                   <FaAddressBook /> Announcement
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/dashbord/agrementRequest"}>
//                   <FaCalendarDay /> Agreement Request
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/dashbord/coupons"}>
//                   <FaCalendarDay /> Manage Coupons
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/dashbord/allusers"}>
//                   <FaAddressBook /> All Users
//                 </NavLink>
//               </li>
//             </>
//           ) : userdata.role === "member" ? (

//             <>
//               <li>
//                 <NavLink to={"/dashbord/member"}>Member Profile</NavLink>
//               </li>
            
//               <li>
//                 <NavLink to={"/dashbord/payments"}>Payment</NavLink>
//               </li>
            
//             </>
//           ) : (
//             <>
//               <li>
//                 <NavLink to={"/dashbord/myprofile"}>
//                   <FaHome />user Profile
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink to={"/dashbord/announcement"}>Announcements</NavLink>
//               </li>
//             </>
//           )}
//           <div className="divider"></div>
//           <li>
//             <NavLink to={"/"}>
//               <FaHome /> User Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to={"/order/salad"}>
//               <FaVoicemail /> Contact
//             </NavLink>
//           </li>
//         </ul>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 ml-0 md:">
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default Dashbord;

