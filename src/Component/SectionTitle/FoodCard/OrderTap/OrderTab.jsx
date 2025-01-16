import React from "react";
import FoodCard from "../FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };

  return (
    <div >
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid grid-cols-3 gap-10">

          {items.map((items) => (
            <FoodCard key={items._id} items={items}></FoodCard>
          ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default OrderTab;
