import React, { useEffect, useState } from "react";
import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import { getItem } from "localforage";
import MenuItems from "../../../SheadComponent/MenuItems/MenuItems";
import useMenu from "../../../Hooks/UseManu/useMenu";

const PopularSection = () => {
const [menu] = useMenu();
const popular = menu.filter(items => items.category === "popular" ) 


  // const [menu, setMenu] = useState([]);
  // console.log(menu);
  // useEffect(() => {
  //   fetch("Menu.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       const popularItems = data.filter(
  //         (items) => items.category === "popular"
  //       );
  //       setMenu(popularItems);
  //     });
  // }, []);

  return (
    <div className="conteiner w-11/12 mx-auto">
      <section>
        <SectionTitle
          heading={"---Check it out---"}
          subheading={"FROM OUR MENU"}
        ></SectionTitle>

        {popular.length}
        <div className="grid grid-cols-2 gap-7">
          {popular.map((items) => (
            <MenuItems key={items._id} items={items}>
              {" "}
            </MenuItems>
          ))}


        </div>
      </section>
    </div>
  );
};

export default PopularSection;
