import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import Menuitem from "../../shared/MenuItem/Menuitem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <section className="mb-12">
      <SectionTitle subHeading={"Check it Out"} Heading={"Our Popular Menu"} />

      <div className="grid md:grid-cols-2 gap-8">
        {menu.map((item) => (
          <Menuitem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
