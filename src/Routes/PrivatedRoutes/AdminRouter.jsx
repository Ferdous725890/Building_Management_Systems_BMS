import React from 'react';
import useAdmin from '../../Hooks/useAdmin';
import UseAuth from '../../Hooks/UseManu/UseAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRouter = ({children}) => {
    const {user, loading} = UseAuth()
   const [isAdmin, isAdminloading] = useAdmin()
   const location = useLocation();
   console.log(location);
   if (loading || isAdminloading) {
     return (
       <div className="flex justify-center items-center h-screen">
         <progress className="progress w-56"></progress>
       </div>
     );
   }
   if (user && isAdmin) {
     return children;
   }
   return <Navigate to={'/login'} state={{from : location}} replace ></Navigate>
};

export default AdminRouter;