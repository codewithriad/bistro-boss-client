import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimionial from "../Testimonial/Testimionial";
import Cover from "../../shared/Cover/Cover";
import img from "../../../assets/home/featured.jpg";
import Chef from "../Chef/Chef";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Cover title={"Bistro Boss"} img={img} />
      <PopularMenu />
      <Chef />
      <Featured />
      <Testimionial />
    </div>
  );
};

export default Home;
