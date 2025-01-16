import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../SheadComponent/Footer/Footer";
import Navbar from "../SheadComponent/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  console.log(location);
  const noHeaderFooter = location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
  <main className="min-h-[calc(100vh-10rem)]">
  <Outlet></Outlet>
  </main>
      {noHeaderFooter || <Footer></Footer>}
    </div>
  );
};

export default Main;
