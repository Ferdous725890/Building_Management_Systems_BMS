import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/Authprovider";
import { TiShoppingCart } from "react-icons/ti";
import useCats from "../../Hooks/UseManu/useCats";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCats();
  const handelLogout = () => {
    logOut();
  };

  const navOptions = (
    <>
      <Link
        className="border ml-5 px-2 py-1 rounded-md text-white font-semibold "
        to={"/"}
      >
        Home
      </Link>

      <Link
        className="border ml-5 px-2 py-1 rounded-md text-white font-semibold "
        to={"/apartment"}
      >
        Apartment
      </Link>
      <Link
        className="border ml-5 px-2 py-1 rounded-md text-white font-semibold "
        to={"/about"}
      >
        About Our Building
      </Link>

      <Link
        className="border ml-5 px-2 py-1 rounded-md text-white font-semibold "
        to={"/contactme"}
      >
        Contact Me
      </Link>
    </>
  );
  return (
    <>
      <div className="border-red-500 z-50">
        <div className="fixed items-center justify-center left-0 right-0 z-10 bg-white/10  backdrop-blur-3xl ">
          <div className="navbar container mx-auto w-11/12  ">
            <div className="navbar-start">
              <div className="dropdown">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm bg-gray-700 dropdown-content rounded-box z-[1] mt-3 w-52 
                   shadow"
                >
                  {navOptions}
                </ul>
              </div>
              <Link to={'/'} className="text-2xl text-white ">EliteBooking</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1 ">{navOptions}</ul>
            </div>
            <div className="navbar-end">
              {user?.email ? (
                <>
                  <div className="dropdown dropdown-end">
                    <div
                      tabIndex={0}
                      role="button"
                      className="btn btn-ghost btn-circle avatar"
                    >
                      <div className="w-10 rounded-full">
                        {user ? (
                          <>
                            {" "}
                            <img
                              referrerPolicy="no-referrer"
                              alt="Tailwind CSS Navbar component"
                              src={user?.photoURL}
                            />
                          </>
                        ) : (
                          "log in or reg"
                        )}
                      </div>
                    </div>
                    <ul
                      tabIndex={0}
                      className="menu menu-sm  bg-white/30 text-black backdrop-blur-3xl  dropdown-content   rounded-box z-[1] mt-3 w-52 p-2 shadow "
                    >
                      <li>
                        <a className="justify-between hover:text-green-500 text-[18px]">Profile</a>
                      </li>
                      <li>
                        <a className="hover:text-green-500 text-[18px]" >{user?.displayName}</a>
                      </li>
                      <Link className="ml-2 hover:text-green-500 text-[18px]" to={"/dashbord"}>Dashbord</Link>

                      <button  onClick={handelLogout} className="hover:text-green-500 text-[18px]">
                        Logout
                      </button>

                      {/* ------------------------------------------------------------- */}
                    </ul>
                  </div>
                </>
              ) : (
                <>
                  <Link
                    className="px-5 py-[4px] mr-5 rounded-md border-t text-white hover:bg-white/10  border-white  border-0  border-b-4 hover:border-[#ff7300]"
                    to={"/login"}
                  >
                    login
                  </Link>
                  <Link
                    className="px-5 py-[4px] rounded-md hover:border-[#ff7300] border-t text-white border-white  border-0  border-b-4 hover:bg-white/10"
                    to={"/signup"}
                  >
                    Register
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
