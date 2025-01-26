import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import "@smastrom/react-rating/style.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("https://building-management-alpha.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <section className="mt-12">
      <SectionTitle subheading={""} heading={"TESTIMONIALS"}></SectionTitle>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {review.map((revie) => (
          <SwiperSlide className="" key={revie._id}>
            <div className="flex border  flex-col justify-center items-center px-10 py-10 text-white bg-white/10">
           <div className="">
              <div className="flex ">
                <div>
                  <img
                    className="w-40 rounded-md h-40 object-cover"
                    src={revie.image}
                    alt=""
                  />
                </div>

                <div className="ml-10">

                <p className="text-2xl"> {revie.name} </p>
                <p className="mt-2 w-[500px]">{revie.details}</p>
                <Rating className=" px-1 py-1" style={{ maxWidth: 150, color:"yellow"  }} value={revie.rating} readOnly />

                </div>
          
              </div>
           </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
