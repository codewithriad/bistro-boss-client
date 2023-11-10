import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";

const Testimionial = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <section>
      <SectionTitle
        subHeading={"What Our Client Say"}
        Heading={"Testimonials"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <div>
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="m-20 text-center">
                <Rating
                  style={{
                    maxWidth: 180,
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginBottom: "20px",
                  }}
                  value={review.rating}
                  readOnly
                />
                <p>{review.details}</p>
                <h3 className="text-2xl text-orange-400">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </section>
  );
};

export default Testimionial;
