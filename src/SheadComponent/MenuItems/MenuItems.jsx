import React from "react";

const MenuItems = ({ items }) => {
  const { category, image, name, price, recipe, _id } = items;
  return (
    <div className="flex justify-between">
      <img
        style={{ borderRadius: "0px 200px 200px 200px" }}
        className="w-[118px] h-[104px]"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase ">{name}----------</h3>
        <p> {recipe} </p>
      </div>
      <p className="text-yellow-500 text-2xl"> $ {price}</p>
    </div>
  );
};

export default MenuItems;
