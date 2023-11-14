import Cover from "../../shared/Cover/Cover";
import shopImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../Hooks/useMenu";
// import FoodCard from "./FoodCard/FoodCard";
import OrderTab from "./FoodCard/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();

  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
      </Helmet>
      <Cover img={shopImg} title={"Our Shop"} />
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soup</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
