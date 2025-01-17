import React from 'react';

import { useLoaderData, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import useAxiosSecure from '../../Hooks/UseManu/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import Swal from 'sweetalert2';
const imageHostin = import.meta.env.VITE_IAMGE_HOSTING_KEY;
const iamge_hosting_api = `https://api.imgbb.com/1/upload?key=${imageHostin}`;
const Edited = () => {
    const axiosPulic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const {category,description, image, price, name , _id}= useLoaderData()

    
    const {register, handleSubmit, reset} = useForm()
    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        // console.log(data);
        try {
          const res = await axiosPulic.post(iamge_hosting_api, formData, {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          // console.log(res.data);
          if (res.data.success) {
            const menuItems = {
              name: data.name,
              category: data.category,
              price: data.price,
              description: data.description,
              image: res.data.data.display_url,
            };
            // console.log(menuItems);
            const menures = await axiosSecure.patch(`/menu/${_id}`, menuItems);
            // console.log(menures.data);
            if (menures.data.modifiedCount >0) {
              // show success popap
            //   reset()
              let timerInterval;
              Swal.fire({
                title: "Success fully Added",
                html: "Success fully Added ",
                timer: 1000,
                timerProgressBar: true,
                didOpen: () => {
                  Swal.showLoading();
                  const timer = Swal.getPopup().querySelector("b");
                  timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                  }, 100);
                },
                willClose: () => {
                  clearInterval(timerInterval);
                },
              }).then((result) => {
                /* Read more about handling dismissals below */
                if (result.dismiss === Swal.DismissReason.timer) {
                  console.log("I was closed by the timer");
                }
              });
            }
          }
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      };

    return (
        <div className='p-10'>
            <h2 className='text-2xl text-center'>Updated Items</h2>
            <div className="p-10">
   
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-5">
            <input
              {...register("name", { required: true })}
              type="text"
              defaultValue={name}
              placeholder="Recepe Name"
              className="input input-bordered w-full "
            />
          </div>

          <select
            defaultValue={category}
            {...register("category", { required: true })}
            className="select select-bordered w-full mb-5"
          >
            <option disabled value={"category"}>
              Selected Category
            </option>
            <option value="salat">Salat</option>
            <option value="piszza">Pizza</option>
            <option value="soup">Soup</option>
            <option value="dessert">Dessert</option>
            <option value="drinks">Drinks</option>
          </select>

          <div>
            <input
              {...register("price", { required: true })}
              type="number"
              defaultValue={price}
              placeholder="input your price"
              className="input input-bordered w-full "
            />
          </div>
          <div>
            <textarea
              {...register("description", { required: true })}
              placeholder="input your price"
              defaultValue={description}
              className="input input-bordered w-full "
              name="description"
              id=""
            ></textarea>
          </div>
          <div>
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

         {/* <Links to={`/dashbord/addItems/${menuItems._id}`} > */}
         <button className="btn mt-5 btn-primary">Add Items</button>
         {/* </Links> */}
        </form>
      </div>
    </div>
        </div>
    );
};

export default Edited;