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
import { NavLink, Outlet } from "react-router-dom";
import useCats from "../../../../Hooks/UseManu/useCats";
import useAdmin from "../../../../Hooks/useAdmin";

const Dashbord = () => {
  const [cart] = useCats();
  //Todo: get is admin from the database
  const [isAdmin] = useAdmin();
  // const isAdmin = true
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
                <NavLink to={"/dashbord/manageitems"}>
                  <FaShoppingCart></FaShoppingCart>
                  Mange Booking
                </NavLink>
              </li>
              <li>
                <NavLink to={"/dashbord/allusers"}>
                  <FaAddressBook></FaAddressBook>
                  All User
                </NavLink>
              </li>
{/* --------------------------------------------------------------------------------- */}
             
            </>
          ) : (
            <>
              <li>
                <NavLink to={"/dashbord/myprofile"}>
                  <FaHome></FaHome>
                  My Profile
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
                <NavLink to={"/dashbord/carts"}>
                  <FaShoppingCart></FaShoppingCart>
                  My Cart
                  <span className="text-blue-500">( {cart.length})</span>
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
          )}
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

          {/* member informaton */}
          <p>member information</p>
          <li>
            <NavLink className={"text-red-500 "} to={"/dashbord/member"}>
              Member Profile
            </NavLink>
          </li>
          {/* <li>
            <NavLink className={"text-red-500 "} to={"/dashbord/member"}>
            Make payment
            </NavLink>
          </li>
          <li>
            <NavLink className={"text-red-500 "} to={"/dashbord/member"}>
            Payment History
            </NavLink>
          </li>
          */}
          {/* <li>
            <NavLink className={"text-red-500 "} to={"/dashbord/announcement"}>
            Announcements
            </NavLink>
          </li>  */}
        </ul>
      </div>

      <div></div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>









      
    </div>
  );
};

export default Dashbord;
