import React from 'react';
import useAxiosSecure from '../../Hooks/UseManu/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { FaDeleteLeft, FaUsers } from 'react-icons/fa6';
import Swal from 'sweetalert2';

const Alluser = () => {
    const axiosSecure = useAxiosSecure();
    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/alluserdata`);
            return res.data;
        }
    });

    const handelmakeAdmin = (user) => {
        axiosSecure.patch(`/user/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Admin updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
            .catch(error => {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: error.message,
                });
            });
    }

    const handelUsrDeleted = (id) => {
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
                    .then(res => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "User has been deleted.",
                            icon: "success"
                        });
                        refetch();
                    })
                    .catch(error => {
                        Swal.fire({
                            icon: "error",
                            title: "Oops...",
                            text: error.message,
                        });
                    });
            }
        });
    }

    return (
        <div className='p-10'>
            <div className='flex justify-between items-center my-10'>
                <h2 className='text-2xl'>All users</h2>
                <h2 className='text-2xl'>Total users: {users.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead className='text-white'>
                        <tr>
                            <th>Number</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Data rows */}
                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td className='text-xl'>
                                    {user.role === 'admin' ? "Admin" :
                                        <button onClick={() => handelmakeAdmin(user)}>
                                            <div className='bg-orange-600 p-1 rounded-lg'>
                                                <FaUsers className='text-white' />
                                            </div>
                                        </button>
                                    }
                                </td>
                                <td className='text-xl'>
                                    <button onClick={() => handelUsrDeleted(user._id)}>
                                        <FaDeleteLeft className='text-red-500' />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Alluser;
