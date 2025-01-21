import {
    FaAddressBook,
    FaCalculator,
    FaCalendarDay,
    FaHome,
    FaList,
    FaSearch,
    FaShoppingCart,
    FaVoicemail,
  } from "react-icons/fa";
  import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
  import { NavLink, Outlet } from "react-router-dom";
  import useCats from "../../../../Hooks/UseManu/useCats";
  import useAdmin from "../../../../Hooks/useAdmin";
  import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
  import UseAuth from "../../../../Hooks/UseManu/UseAuth";
  import { useQuery } from "@tanstack/react-query";
  
  const Dashbord = () => {
    const { user } = UseAuth();
    const [cart] = useCats();
    //Todo: get is admin from the database
    const [isAdmin] = useAdmin();
    const axiospublic = useAxiosPublic();
  
    const axiosPublic = useAxiosPublic();
    const {
      data: userdata = [],
      isLoading,
      isError,
    } = useQuery({
      queryKey: [user?.email, "user"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/alluserdata/${user.email}`);
        console.log(res.data);
        console.log(user.email);
        return res.data;
      },
    });
  
    return (
      <div className="flex bg-black">
  
  
  
  
        <div className="w-64 h-screen text-white bg-orange-500">
          <ul className="menu">
            {isAdmin ? (
              <>
                <li>
                  <NavLink to={"/dashbord/adminprofile"}>
                    <FaHome></FaHome>
                    Admin Profile
                  </NavLink>
                </li>
  
                <li>
                  <NavLink to={"/dashbord/managemenber"}>
                    <FaCalendarDay></FaCalendarDay>
                    Manage Manbers
                  </NavLink>
                </li>
  
                <li>
                  <NavLink to={"/dashbord/Announcement/admin"}>
                    <FaAddressBook></FaAddressBook>
                    Announcement
                  </NavLink>
                </li>
  
                <li>
                  <NavLink to={"/dashbord/agrementRequest"}>
                    <FaCalendarDay></FaCalendarDay>
                    Agrement Request
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/dashbord/coupons"}>
                    <FaCalendarDay></FaCalendarDay>
                    Manage Coupons
                  </NavLink>
                </li>
                {/* --------------------------------------------------------------------------------- */}
  
                <li>
                  <NavLink to={"/dashbord/allusers"}>
                    <FaAddressBook></FaAddressBook>
                    All User
                  </NavLink>
                </li>
                {/* --------------------------------------------------------------------------------- */}
              </>
            ) :userdata.role === 'member'? (
           <>
             <li>
               <NavLink className={"text-white"} to={"/dashbord/member"}>
                 Member Profile
               </NavLink>
             </li>
  
             <li>
              <NavLink to={"/dashbord/carts"}>
                <FaShoppingCart></FaShoppingCart>
                My Cart
                <span className="text-blue-500">( {cart.length})</span>
              </NavLink>
            </li>
           
           
           </>
  
  
             
            ) :    <>
            <li>
              <NavLink to={"/dashbord/myprofile"}>
                <FaHome></FaHome>
                My Profile user
              </NavLink>
            </li>
            
  
            <li>
              <NavLink className={""} to={"/dashbord/announcement"}>
                Announcements
              </NavLink>
            </li>
  
            <p>-----------------------</p>
  
            <li>
              <NavLink to={"/dashbord/reservation"}>
                <FaCalendarDay></FaCalendarDay>
                Reservation
              </NavLink>
            </li>
  
           
            <li>
              <NavLink to={"/dashbord/review"}>
                <FaAddressBook></FaAddressBook>
                Review
              </NavLink>
            </li>
            <li>
              <NavLink to={"/dashbord/booking"}>
                <FaList></FaList>
                My Booking
              </NavLink>
            </li>
          </>
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
        }
            {/* //---------------------- */}
            <div className="divider "></div>
            <li>
              <NavLink to={"/"}>
                <FaHome></FaHome>
                User Home
              </NavLink>
            </li>
  
            <li>
              <NavLink to={"/order/salad"}>
                <FaVoicemail></FaVoicemail>
                Contact
              </NavLink>
            </li>
  
          
          </ul>
        </div>
  
        <div className="flex-1">
          <Outlet></Outlet>
        </div>
      </div>
    );
  };
  
  export default Dashbord;
  