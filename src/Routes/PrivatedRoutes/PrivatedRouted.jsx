import React, { useContext } from "react";
import { AuthContext } from "../../Provider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const PrivatedRouted = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  // console.log(location);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <progress className="progress w-56"></progress>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to={'/login'} state={{from : location}} replace ></Navigate>
};

export default PrivatedRouted;
