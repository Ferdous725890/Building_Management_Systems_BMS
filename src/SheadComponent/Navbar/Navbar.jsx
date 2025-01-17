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
      <Link className="btn btn-primary mr-5" to={"/"}>
        Home
      </Link>

      <Link className="btn btn-primary mr-5" to={"/apartment"}>
        Apartment
      </Link>
      <Link className="btn btn-primary mr-5" to={"/order/salad"}>
        Order
      </Link>
      <Link className="btn btn-primary" to={"/menu"}>
        Menu
      </Link>
    </>
  );
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-10 ">
        <div className="navbar bg-white/10 backdrop-blur-3xl">
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
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navOptions}
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">Ferdous</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
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
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                  >
                    <li>
                      <a className="justify-between">Profile</a>
                    </li>
                    <li>
                      <a>{user?.displayName}</a>
                    </li>
                    <Link to={"/dashbord/cart"}>Dashbord</Link>
                   
                    <button
                      onClick={handelLogout}
                      className=""
                    >
                      Logout
                    </button>

                    {/* ------------------------------------------------------------- */}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  className="px-5 py-[6px] rounded-md bg-slate-200 border-slate-500 btn-outline border-0  border-b-4"
                  to={"/login"}
                >
                  login
                </Link>
                <Link
                  className="px-5 py-[6px] rounded-md bg-slate-200 border-slate-500 btn-outline border-0  border-b-4"
                  to={"/signup"}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
