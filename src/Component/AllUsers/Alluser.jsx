import React from 'react';
import useAxiosSecure from '../../Hooks/UseManu/useAxiosSecure';
import { useQueries, useQuery } from '@tanstack/react-query';
import { FaDeleteLeft, FaTruckFast } from 'react-icons/fa6';
import Swal from 'sweetalert2';
import { FaUser, FaUsers } from 'react-icons/fa';

const Alluser = () => {
    // const axiosSecure = useAxiosSecure()
    // axiosSecure.get('/alluserdata')
    // .then(res=>{
    //     console.log(res.data);
    // })
    const axiosSecure = useAxiosSecure()
    const { refetch, data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{

            const res = await axiosSecure.get(`/alluserdata`)
            return res.data

        }
    })
    const handelmakeAdmin = (user) =>{
        console.log(user._id);
        axiosSecure.patch(`/user/admin/${user._id}`)
        .then(res=>{
            console.log(res.data);
            if(res.data.modifiedCount>0){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "admin update successfully ",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  refetch()
            }
        })
    }
    const handelUsrDeleted = (id) =>{
        console.log(id);
       

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
           
              axiosSecure.delete(`/userdeleted/${id}`)
              .then(res=>{
                  console.log(res.data);
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch()
      
              })
            }
          });
   
    }
    return (
    <div className='p-10'>
            <div className='flex justify-evenly my-10'>
            <h2 className='text-2xl '>All user  </h2>
            <h2 className='text-2xl '>Total user  {users.length} </h2>
        </div>
        <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead className='bg-orange-200'>
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Email</th>
        <th>User</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}

{
    users.map((user, index) =>  <tr key={index}>
          <th> {index + 1} </th>
          <td>{user.name}</td>
          <td>{user.email}</td>
          {/* ----------updated button */}
          <td className=' text-xl'>
          {
            user.role === 'admin' ?  "Admin" :

            <button onClick={()=>handelmakeAdmin(user)}>
            <div className='bg-orange-600 p-1  rounded-lg'>
            <FaUsers className='text-white'></FaUsers>
            </div>
              </button>
          }
          </td>
{/* -------deleted button */}

          <td className=' text-xl'>
           <button onClick={()=>handelUsrDeleted(user._id)}>
           <FaDeleteLeft className='text-red-500'></FaDeleteLeft>
           </button>
          </td>
        </tr> )
}



  
    </tbody>
  </table>
</div>
    </div>
    );
};

export default Alluser;