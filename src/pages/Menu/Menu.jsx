import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import img from "../../assets/menu/dessert-bg.jpeg";
// import PopularMenu from "../Home/PopularMenu/PopularMenu";
import useMenu from "../../Hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
import SectionTitle from "../../components/SectionTitle";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const desserts = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={img} title={"Our Menu"} />
      <SectionTitle subHeading={"Don't miss"} Heading={"Today's Offer"} />
      <MenuCategory items={offered} />
      <MenuCategory items={desserts} title="dessert" coverImg={dessertImg} />
      <MenuCategory items={pizza} title="pizza" coverImg={pizzaImg} />
      <MenuCategory items={salad} title="salad" coverImg={saladImg} />
      <MenuCategory items={soup} title="soup" coverImg={soupImg} />
    </div>
  );
};

export default Menu;
