import React from 'react';
import UseAuth from '../Hooks/UseManu/UseAuth';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { CiEdit } from 'react-icons/ci';

const MyprofileAll = () => {

    const {user} = UseAuth()
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
  
    const { data: userdata = [] , isLoading} = useQuery({
      queryKey: [user?.email, "user"],
      queryFn: async () => {
        const res = await axiosPublic.get(`/alluserdata/${user.email}`);
        return res.data;
      },
    });


    return (
        <div className='p-10'>
          <div className='flex justify-center pt-10 bg-gray-700 rounded-md pb-7 '>
          <img className='w-56 rounded-md' src={user.photoURL} alt="" />
          <p className='text-white text-2xl pl-2'>
           <h2 className='bg-red-50 text-black px-2 rounded-md text-center'>
           {
            userdata.role
            }
           </h2>
          </p>
          </div>
          <div>
<h1 className='text-xl text-white p-2 flex items-center'>
<p>
Email : {user.email} 
</p>
<p className=''>
<CiEdit className='text-2xl ml-2 text-green-500 cursor-pointer' />
</p>
</h1>
<h1 className='text-2xl text-white'>

</h1>
          </div>
        </div>
    );
};

export default MyprofileAll;