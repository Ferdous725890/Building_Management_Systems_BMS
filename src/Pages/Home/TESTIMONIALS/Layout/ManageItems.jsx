import React from "react";
import SectionTitle from "../../../../Component/SectionTitle/SectionTitle";
import useMenu from "../../../../Hooks/UseManu/useMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/UseManu/useAxiosSecure";
import useCats from "../../../../Hooks/UseManu/useCats";
import { Link } from "react-router-dom";



const ManageItems = () => {
    const axiosSecure = useAxiosSecure()
  const [menu, refetch] = useMenu();


  const handeldeleted = (id) => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then( async(result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });

          const res = await axiosSecure.delete(`/menuitemsDelted/${id}`)
          // console.log(res.data);
          if(res.data.deletedCount > 0){
            refetch()
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            
          }

        }
      });
    
  };
  return (
    <div className="p-10">
      <SectionTitle
        heading={"Manage Items"}
        subheading={"Hurry UP"}
      ></SectionTitle>
      <h2 className="text-2">Manage Items</h2>
      <div>
      <div className="w-full overflow-x-auto">
  <table className="table min-w-[00px]">
    {/* head */}
    <thead>
      <tr>
        <th>Number</th>
        <th>Image</th>
        <th>Items Name</th>
        <th>Price</th>
        <th>Action</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {menu.map((menuItems, index) => (
        <tr key={index}>
          <th>{index + 1}</th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img
                    src={menuItems.image}
                    alt="Avatar Tailwind CSS Component"
                  />
                </div>
              </div>
            </div>
          </td>
          <td>{menuItems.name}</td>
          <td>{menuItems.price}</td>
          <th>
            <button
              onClick={() => handeldeleted(menuItems._id)}
              className="btn btn-ghost btn-xs"
            >
              deleted
            </button>
          </th>
          <th>
            <Link to={`/dashbord/updated/${menuItems._id}`}>
              <button className="btn btn-ghost btn-xs">Updated</button>
            </Link>
          </th>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      </div>
    </div>
  );
};

export default ManageItems;
