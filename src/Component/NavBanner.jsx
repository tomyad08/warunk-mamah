import React from "react";
import Banner from "./Banner";
import Navibar from "./NavBar";

const NavBanner = () => {
  return (
    <div
      className="container-fluid"
      style={{ background: "linear-gradient(purple,#A31ACB)" }}
    >
      <Navibar />
      <Banner />
    </div>
  );
};
export default NavBanner;
