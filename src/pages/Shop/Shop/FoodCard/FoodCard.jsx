import React from "react";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
        <p className="absolute right-4 p-1 top-4 text-white bg-slate-900">
          $ {price}
        </p>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>

        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-outline border-0 border-b-4">
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
