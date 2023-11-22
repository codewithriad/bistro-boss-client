import { FaTrashAlt } from "react-icons/fa";
import useCard from "../../../Hooks/useCard";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const MyCart = () => {
  const [cart, refetch] = useCard();
  const totalSum = cart.reduce((total, items) => total + items.price, 0);
  const axiosSecure = useAxiosPublic();
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/cards/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-4xl font-semibold">Items: {cart.length}</h2>
        <h2 className="text-4xl font-semibold">Total Price: {totalSum}</h2>
        <button className="btn btn-primary text-xl">Pay</button>
      </div>
      {/* Table of Content */}

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Number</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>
                  <label>{index + 1}</label>
                </th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>

                <td>
                  <h2 className="text-lg font-bold">{item.name}</h2>
                </td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handleDelete(`${item._id}`)}
                    className="btn btn-error btn-lg"
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
