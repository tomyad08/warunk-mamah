import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Produk = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const Data = [
    {
      id: 1,
      nama: "Sembako",
      foto: "./assets/sembako.jpg",
    },
    {
      id: 2,
      nama: "Alat Tulis",
      foto: "./assets/alatTulis.jpg",
    },
    {
      id: 3,
      nama: "Cemilan",
      foto: "./assets/cemilan.jpg",
    },
    {
      id: 4,
      nama: "Padat Karya",
      foto: "./assets/tong.jpg",
    },
  ];
  return (
    <div
      className="container py-3"
      style={{ fontFamily: "'Signika Negative', sans-serif" }}
      id="produk"
      data-aos="fade-up"
    >
      <h1 className="text-center">
        <strong>Produk</strong>
      </h1>
      <p className="text-center">
        Silahkan klik kartu produk yang kamu butuhkan.
      </p>
      <div className="row justify-content-around">
        {Data.map((value) => (
          <div className="col-md-3 col-6 my-2">
            <div
              className="border border-2 rounded-3 mx-2"
              style={{ backgroundColor: "purple", color: "white" }}
            >
              <div
                className="border border-0 rounded-3"
                style={{ height: "100px", overflow: "hidden" }}
              >
                <img src={value.foto} alt=" " width="100%" />
              </div>
              <h6 className="text-center pt-2">{value.nama}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Produk;
