import React from "react";
import Menuitem from "../../shared/MenuItem/Menuitem";
import Cover from "../../shared/Cover/Cover";

const MenuCategory = ({ items, title, coverImg }) => {
  return (
    <div>
      {title && <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-8 mt-10">
        {items.map((item) => (
          <Menuitem key={item._id} item={item} />
        ))}
      </div>
      <div className="my-10 flex justify-center">
        <button className="btn btn-outline border-0 border-b-4">
          Order Your Favorite Food
        </button>
      </div>
    </div>
  );
};

export default MenuCategory;
