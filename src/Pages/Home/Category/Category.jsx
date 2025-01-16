import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import slied1 from "../../../assets/home/slide1.jpg";
import slied2 from "../../../assets/home/slide2.jpg";
import slied3 from "../../../assets/home/slide3.jpg";
import slied4 from "../../../assets/home/slide4.jpg";
import slied5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <section>
        <SectionTitle
          subheading={"Form 11.00am to 10.00pm "}
          heading={"ORDER ONLINE"}
        ></SectionTitle>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img src={slied1} alt="" />
            <h2 className="text-4xl uppercase text-white -mt-16">salads</h2>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={slied2} alt="" />{" "}
            <h2 className="text-4xl uppercase text-white -mt-16">Pizza</h2>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={slied3} alt="" />{" "}
            <h2 className="text-4xl uppercase text-white -mt-16">Soups </h2>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={slied4} alt="" />{" "}
            <h2 className="text-4xl uppercase text-white -mt-16">Desserts</h2>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img src={slied5} alt="" />{" "}
            <h2 className="text-4xl uppercase text-white -mt-16">Pizza</h2>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>


































  );
};

export default Category;
