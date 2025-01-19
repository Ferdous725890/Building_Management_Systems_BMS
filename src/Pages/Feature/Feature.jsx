import React from "react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
// import featuredImage from "../../assets/home/featured.jpg";
import "./Featured.css";
import { Link } from "react-router-dom";
const Feature = () => {
  return (
    <div className="featured-items text-white bg-fixed mt-32 pt-10 pb-14">
      <div className="">
        {/* <SectionTitle heading={"Featured"}></SectionTitle> */}
      </div>

      <div className="flex justify-center items-center mb-10 container mx-auto w-11/12 py-10">
        <div className="">
          <img
            className="w-[300px]  rounded-lg"
            src="https://www.housingman.com/news/wp-content/uploads/2018/02/luxury-homes-inside-pic-.png"
            alt=""
          />
        </div>
        <div className="ml-10 border-t-2  border-b-2 py-5 rounded-lg px-8">
          <p className="uppercase text-xl mb-2">Where Can i get Some</p>
          <p className="mb-2">Aug 20, 2029</p>      
          <p className="w-[500px] ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea
            adipisci, nulla at iure non atque nemo hic, nisi in et incidunt id
            cumque qui rerum suscipit doloremque veniam placeat reiciendis ex
            sequi eum! Ipsam possimus similique ut inventore impedit!
          </p>
          <Link>
            <button className="px-2 py-1 rounded-lg mt-5 border-0 border-white border-b-4 text-white hover:bg-white/10 hover:border-white">Agrement</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Feature;
