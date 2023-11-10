import React from "react";
import SectionTitle from "../../../components/SectionTitle";
import img from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured text-white mb-10 bg-fixed">
      <div className="bg-slate-500 pt-10 bg-opacity-60">
        <SectionTitle subHeading={"Check it out"} Heading={"Featured item"} />
        <div className="flex justify-center items-center pt-32 pb-20 px-32">
          <img className="w-1/3" src={img} alt="" />
          <div className="ml-10 space-y-4">
            <p>Aug 20, 2029</p>
            <p className="uppercase">What can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
              quaerat eaque accusantium. Obcaecati consequuntur nihil corrupti
              eius eveniet aliquid perferendis distinctio deserunt explicabo
              accusamus delectus, quis est sequi necessitatibus nobis rerum
              pariatur?
            </p>
            <button className="btn btn-outline border-0 border-b-4 text-white">
              Order Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
