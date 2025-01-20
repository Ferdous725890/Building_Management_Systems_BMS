import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SheadComponent/Footer/Footer";
import Navbar from "../SheadComponent/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  // console.log(location);
  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    //bg-[#ff9138c7]
    <div className="border-red-500 bg-[#ff9138c7]">
      <div>
        {noHeaderFooter || <Navbar></Navbar>}
        <main className="min-h-[calc(100vh-10rem)]">
          <Outlet></Outlet>
        </main>
        {noHeaderFooter || <Footer></Footer>}
      </div>
    </div>
  );
};

export default Main;
