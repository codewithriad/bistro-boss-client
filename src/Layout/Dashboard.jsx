import {
  FaAd,
  FaBars,
  FaCalendar,
  FaCartPlus,
  FaHome,
  FaPaypal,
  FaShoppingBag,
  FaStar,
  FaEnvelope,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard sidebar */}
      <div className="w-64 min-h-screen bg-orange-400">
        <ul className="menu">
          <li>
            <NavLink to="/dashboard/userHome">
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
              <FaCalendar />
              My Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/paymentHistory">
              <FaPaypal />
              My Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myCart">
              <FaCartPlus />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addReview">
              <FaStar />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/myBooking">
              <FaAd />
              My Booking
            </NavLink>
          </li>
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaBars />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/shop/:category">
              <FaShoppingBag />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/login">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>

      {/* dashboard content */}

      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
