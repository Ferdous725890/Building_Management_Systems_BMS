import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import React, { useState } from "react";
import orderImage from "../../../assets/shop/banner2.jpg";
import Cover from "../../../SheadComponent/Cover/Cover";
import useMenu from "../../../Hooks/UseManu/useMenu";
import FoodCard from "../../../Component/SectionTitle/FoodCard/FoodCard";
import OrderTab from "../../../Component/SectionTitle/FoodCard/OrderTap/OrderTab";
import { iterate } from "localforage";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {

 

  const categores = ['sald', 'pizza',"soup", "dessert",  "drinks"]
  const {category} = useParams()
  const initialIndex = categores.indexOf(category)
  const [tabindex, setTabindex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);
  const dessert = menu.filter((items) => items.category === "dessert");
  const soup = menu.filter((items) => items.category === "soup");
  const salad = menu.filter((items) => items.category === "salad");
  const pizza = menu.filter((items) => items.category === "pizza");
  const offered = menu.filter((items) => items.category === "offered");
  const drinks = menu.filter((items) => items.category === "drinks");
  return (
    <div className="container w-11/12 mx-auto ">

<Helmet>
        <title>Bistro | Order Food </title>
      </Helmet>
      <Cover img={orderImage} title={"Order Food "}></Cover>

      <Tabs selectedIndex={tabindex} onSelect={(index) => setTabindex(index)}>
        <TabList className={"w-4/12 mt-9 mb-9 text-xl mx-auto "}>
          <Tab>Salat</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Dessert</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
        <OrderTab items={salad} ></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert}></OrderTab>
        </TabPanel>
        <TabPanel>
        <OrderTab items={drinks}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
