import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

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
      <SectionTitle
          
          heading={"ORDER ONLINE"}
        ></SectionTitle>
      </div>


        {isLoading && <p>Loading apartments...</p>}
        {isError && <p>Failed to load apartments. Please try again later.</p>}

        {/* Render Swiper if userdata exists */}
        {userdata.length > 0 && (
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            autoplay={true}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {userdata.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="relative">
                  <img
                    src={item.apartment_image}
                    alt={`Apartment ${item.apartment_no}`}
                    className=" w-full h-full min-h-[250px] object-cover rounded-lg"
                  />
                  <h2 className="text-4xl uppercase text-white absolute bottom-4 left-4 bg-black bg-opacity-50 p-2 rounded">
                    {item.apartment_no}
                  </h2>
                  <h2 className="text-4xl uppercase text-white absolute bottom-4 left-4 bg-black bg-opacity-50 p-2 rounded">
                   
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </section>
    </div>
  );
};

export default Category;
