import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules"; // Autoplay মডিউল ইমপোর্ট করুন
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import Marquee from "react-fast-marquee";

const Category = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: userdata = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["apartments"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/apartment`);
      return res.data;
    },
  });

  return (
    <div>
      <section>
        <div className="mt-10 mb-10">
          <SectionTitle heading={"Our apartment"}></SectionTitle>
        </div>

        {isLoading && <p>Loading apartments...</p>}
        {isError && <p>Failed to load apartments. Please try again later.</p>}
        <div >
          <Marquee
          pauseOnClick={true}
          speed={100}
          >
     
            {userdata.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative bg-gray-200 rounded-lg overflow-hidden mr-5">
                  {/* Image */}
                  <img
                    src={item.apartment_image}
                    alt={`Apartment ${item.apartment_no}`}
                    className=" w-56 md:w-96 h-64 sm:h-72 md:h-80 lg:h-96 object-cover"
                  />
                  {/* Overlay Text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent">
                    <h2 className="absolute bottom-4 left-4 text-white text-lg sm:text-xl lg:text-2xl font-semibold bg-black bg-opacity-50 px-3 py-1 rounded">
                      Apartment No: {item.apartment_no}
                    </h2>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Marquee>
        </div>
      </section>
    </div>
  );
};

export default Category;
