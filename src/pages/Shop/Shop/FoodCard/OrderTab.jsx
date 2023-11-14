import React from "react";
import FoodCard from "./FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 col-span-1 gap-4 pt-6">
      {items.map((item) => (
        <FoodCard key={item._id} item={item} />
      ))}
    </div>
  );
};

export default OrderTab;
