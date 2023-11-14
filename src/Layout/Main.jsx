import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/footer/Footer";
import NavBar from "../pages/shared/NavBar/NavBar";

const Main = () => {
  const location = useLocation();

  const noHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signUp");
  return (
    <div>
      {noHeaderFooter || <NavBar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Main;
