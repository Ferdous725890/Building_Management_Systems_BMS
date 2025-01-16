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
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <section className="mt-12">
      <SectionTitle
        subheading={"---What Our Clients Say---"}
        heading={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {review.map((revie) => (
          <SwiperSlide className="" key={revie._id}>
            <div className="flex flex-col justify-center items-center px-10 py-10">
              <Rating style={{ maxWidth: 180 }} value={revie.rating} readOnly />

              {revie.details}
              <p> {revie.name} </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
