import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimionial from "../Testimonial/Testimionial";

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimionial />
    </div>
  );
};

export default Home;
