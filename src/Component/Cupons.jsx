import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";
const Cupons = ({setModalOpen}) => {
  const [startDate, setStartDate] = useState(new Date());
  console.log(startDate);
  const mydate = format(new Date(startDate), "MM/dd/yyyy");

  console.log(mydate, "------------------------------------------");

  const axiousePublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const cuponsInfo = {
      cupons: data.cupons,
      cuponscode: data.cuponscode,
      discount: data.discount,
      Discription: data.Discription,
      expiredate: mydate,
      status: "active",
    };
    const res = await axiousePublic.post("/cupons", cuponsInfo);
    console.log(res.data);
  };

  return (
    <div className=" text-white h-[400px]">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        {/* cupons */}
        <div className="form-control ">
          <label className="label">
            <span className="">Cupons</span>
          </label>
          <input
            {...register("cupons")}
            name="cupons"
            type="text"
            placeholder="Cupons"
            className="input input-bordered text-black"
            required
          />
        </div>
        {/* cupons Code*/}

        <div className="form-control">
          <label className="label">
            <span className="">Cupons Code</span>
          </label>
          <input
            {...register("cuponscode")}
            name="cuponscode"
            type="text"
            placeholder="cuponscode"
            className="input input-bordered text-black"
            required
          />
        </div>
        {/* discount */}

        <div className="form-control">
          <label className="label">
            <span className="">Discount</span>
          </label>
          <input
            {...register("discount")}
            name="discount"
            type="numbers"
            placeholder="Discount %"
            className="input input-bordered text-black"
            required
          />
        </div>
        {/* Cupons Description */}

        <div className="form-control">
          <label className="label">
            <span className="">Coupon Description</span>
          </label>

          <textarea
            {...register("Discription")}
            name="Discription"
            type="text"
            placeholder="Coupons Discription"
            className="input input-bordered text-black"
            required
          ></textarea>
        </div>
        <div className="bg-blue-400 mt-5">
          <DatePicker
            className="bg-blue-400 text-center"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <div className="form-control mt-6">
          <button onClick={() => setModalOpen(false)} className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Cupons;
