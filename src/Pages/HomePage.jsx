import React from "react";
import FAQ from "../Component/FAQ";
import Kontak from "../Component/Footer";
import NavBanner from "../Component/NavBanner";
import Produk from "../Component/Product";

const HomePage = () => {
  return (
    <div>
      <NavBanner />
      <Produk />
      <FAQ />
      <Kontak />
    </div>
  );
};
export default HomePage;
