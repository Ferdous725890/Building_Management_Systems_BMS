import Swal from "sweetalert2";
import UseAuth from "../../../Hooks/UseManu/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/UseManu/useAxiosSecure";
import useCats from "../../../Hooks/UseManu/useCats";


const FoodCard = ({ items }) => {
  const { category, image, name, price, recipe, _id } = items;
  const {user} = UseAuth()
  const navigated = useNavigate()
  const location = useLocation()
  const axiosSecure = useAxiosSecure()
  const [,refetch] = useCats()
  
const handelAddtoCard = food =>{
  if(user && user?.email){
    // send to the data database
    const cartItems = {
      menuId:_id,
      email: user.email,
      name,
      image,
      price,
    }
    axiosSecure.post("/carts", cartItems)
    .then(res=>{
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} added to the carts`,
          showConfirmButton: false,
          timer: 1500
        });
        //refetch data 
        refetch()
      }
    })

  }
  else{
    Swal.fire({
      title: "please log in ",
      text: "Please log in to the add to the card !!!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Login!"
    }).then((result) => {
      if (result.isConfirmed) {
        //send to the user login page 
        navigated('/login', {state: {from:location}})
      }
    });
  }
}
  return (
    <div className="mb-10">
      <div className="card bg-base-300 shadow-xl">
        <figure>
          <img className="w-full p-5 rounded-2xl" src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-800 text-white absolute right-5 top-10">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <div
            
            onClick={() => handelAddtoCard(items)}
            
            className="btn bg-slate-200 border-orange-500 btn-outline border-0 border-white border-b-4">
              Add To Card
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
