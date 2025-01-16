import React from "react";
import MenuItems from "../../SheadComponent/MenuItems/MenuItems";
import Cover from "../../SheadComponent/Cover/Cover";
import { Link } from "react-router-dom";
import Category from "../Home/Category/Category";

const MenuCategory = ({ items, title, img }) => {
  return (
    <div className="">
      {title && <Cover img={img} title={title}></Cover>}

      <div className="grid grid-cols-2 gap-7">
        {items.map((items) => (
          <MenuItems key={items._id} items={items}>
            {" "}
          </MenuItems>
        ))}
      </div>

<Link to={`/order/${title}`}>
<button className="btn btn-outline border-0 border-white border-b-4">Order Now </button>

</Link>
    </div>
  );
};

export default MenuCategory;
