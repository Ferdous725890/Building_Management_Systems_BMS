import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

const CarouselSlider = () => {
  const images = [
    "https://i.ibb.co.com/hdp0Tx1/1636368002qj-Jyc.jpg",
    "https://i.ibb.co.com/Kh4jJrS/1636368222a-LL3t.jpg",
    "https://i.ibb.co.com/1M6KRk6/1661334070-Tij0y.jpg",
    "https://i.ibb.co.com/6tJsfDC/16613340703-I3-A6-1.jpg",
  ];

  return (
    <div className="">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="w-full h-[calc(100vh-0rem)]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselSlider;







