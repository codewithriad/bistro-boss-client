import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import OurShop from "../pages/Shop/Shop/OurShop";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Secret from "../pages/shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import UserHome from "../pages/Dashboard/UserHome/UserHome";
import MyReservation from "../pages/Dashboard/MyReservation/MyReservation";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";
import AddReview from "../pages/Dashboard/AddReview/AddReview";
import MyBooking from "../pages/Dashboard/MyBooking/MyBooking";
import AllUsers from "../pages/Dashboard/Admin/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "shop/:category",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/myCart",
        element: <MyCart />,
      },
      // admin routes
      {
        path: "/dashboard/allUsers",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/userHome",
        element: <UserHome />,
      },
      // ...........
      {
        path: "/dashboard/reservation",
        element: <MyReservation />,
      },
      {
        path: "/dashboard/paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "/dashboard/addReview",
        element: <AddReview />,
      },
      {
        path: "/dashboard/myBooking",
        element: <MyBooking />,
      },
    ],
  },
]);
