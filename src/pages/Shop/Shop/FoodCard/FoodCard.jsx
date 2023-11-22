import Swal from "sweetalert2";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

import useAxiosPublic from "../../../../Hooks/useAxiosPublic";
import useCard from "../../../../Hooks/useCard";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;

  const [, refetch] = useCard();

  const { user } = useAuth();
  const axiosSecure = useAxiosPublic();

  const navigate = useNavigate();

  const handleAddtoCart = () => {
    if (user && user.email) {
      const itemCard = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };

      axiosSecure.post("/cards", itemCard).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Congratulation!!",
            text: `${name} is added successfully!!`,
            timer: 3000,
          });
          refetch();
        }
      });
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: "btn btn-success",
          cancelButton: "btn btn-danger",
        },
        buttonsStyling: false,
      });
      swalWithBootstrapButtons
        .fire({
          title: "Your are not logged In.",
          text: "Please logged in to order foods.",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Yes, Logged In",
          cancelButtonText: "No, cancel!",
          reverseButtons: true,
        })
        .then((result) => {
          if (result.isConfirmed) {
            navigate("/login");
          }
        });
    }
  };
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
          <button
            onClick={handleAddtoCart}
            className="btn btn-outline border-0 border-b-4"
          >
            ADD TO CARD
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
