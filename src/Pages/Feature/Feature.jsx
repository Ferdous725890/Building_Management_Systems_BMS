import React from "react";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import featuredImage from "../../assets/home/featured.jpg";
import './Featured.css'
const Feature = () => {
  return (
    <div  className="featured-items text-white bg-fixed">
      <SectionTitle
        subheading={"Check it Out"}
        heading={"Featured Items "}
      ></SectionTitle>

      <div className="flex justify-center items-center py-12 px-16">
        <div>
          <img src={featuredImage} alt="" />
        </div>
        <div className="ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">Where Can i get Some</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ea
            adipisci, nulla at iure non atque nemo hic, nisi in et incidunt id
            cumque qui rerum suscipit doloremque veniam placeat reiciendis ex
            sequi eum! Ipsam possimus similique ut inventore impedit!
          </p>
          <button className="btn btn-outline border-0 border-white border-b-4">Order Now </button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
