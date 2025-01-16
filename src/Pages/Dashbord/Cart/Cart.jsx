import React from "react";
import useCats from "../../../Hooks/UseManu/useCats";
import { FaDeleteLeft } from "react-icons/fa6";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/UseManu/useAxiosSecure";
import { Link } from "react-router-dom";


const Cart = () => {
  const [cart] = useCats();
  const totalprice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCats();
  const handelDeleted = (id) => {
    console.log(id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/itemsDeleted/${id}`).then((res) => {
          console.log(res.data);
         if(res.data.deletedCount > 0){
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
         }
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="flex justify-evenly">
        <h2 className="text-3xl">Items : {cart.length}</h2>
        <h2 className="text-3xl">Total Price : {totalprice}</h2>
     {cart.length?   <Link to={'/dashbord/payment'}>
        <button  className="btn btn-primary">Pay</button>   
        </Link> :
        <button disabled className="btn btn-primary">Pay</button>   

        
        }
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={item.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div>
                    <div className="font-bold">{item.name}</div>
                  </div>
                </td>
                <td>{item.price}</td>
                <td>
                  <button
                    onClick={() => handelDeleted(item._id)}
                    className="text-red-500"
                  >
                    <FaDeleteLeft></FaDeleteLeft>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Cart;
