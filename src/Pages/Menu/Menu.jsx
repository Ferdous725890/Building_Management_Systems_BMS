import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../SheadComponent/Cover/Cover";
import menuImage from "../../assets/menu/banner3.jpg";
import pizzaImage from "../../assets/menu/pizza-bg.jpg";
import dessertImage from "../../assets/menu/dessert-bg.jpeg";
import salaedImage from "../../assets/menu/salad-bg.jpg";
import soupImage from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../Component/SectionTitle/SectionTitle";
import useMenu from "../../Hooks/UseManu/useMenu";
import MenuCategory from "./MenuCategory";
const Menu = () => {
  const [menu ] = useMenu()
  const dessert = menu.filter(items => items.category === "dessert" ) 
  const soup = menu.filter(items => items.category === "soup")
  const salad = menu.filter(items => items.category === "salad")
  const pizza = menu.filter(items => items.category === "pizza")
  const offered = menu.filter(items => items.category === "offered")
  return (
    <div className="container w-11/12 mx-auto ">
      <Helmet>
        <title>Bistro | Menu </title>
      </Helmet>
      {/* Main Cover */}
      <Cover img={menuImage} title={"Our menu"}></Cover>
      <SectionTitle heading={"Today's Offered "} subheading={"Don't Miss "} ></SectionTitle>
      {/* Offered Manu Items  */}
     <MenuCategory items={offered}></MenuCategory>
     {/* Dessert Menu Items  */}
     <MenuCategory
     items={dessert}
     title={"dessert"}
     img={dessertImage}
     >

     </MenuCategory>
     <MenuCategory
     items={pizza}
     img={pizzaImage}
     title={"pizza"}
     ></MenuCategory>
     <MenuCategory
     items={salad}
     img={salaedImage}
     title={"salad"}
     ></MenuCategory>
     <MenuCategory
     items={soup}
     img={soupImage}
     title={"sup"}
     ></MenuCategory>
    </div>
  );
};

export default Menu;
