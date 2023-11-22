import React from "react";
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle";

const Chef = () => {
  const [menu] = useMenu();
  const salad = menu.filter((item) => item.category === "salad");
  return (
    <div>
      <SectionTitle subHeading={"Should Try"} Heading={"Chef Recommends"} />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
        {salad.slice(0, 3).map((item) => (
          <div key={item._id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={item.image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{item.name}</h2>
              <p>{item.recipe}</p>
              <div className="card-actions">
                <button className="btn btn-outline border-0 border-b-4">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center my-8">
        <button className="btn btn-outline border-0 border-b-4">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default Chef;
