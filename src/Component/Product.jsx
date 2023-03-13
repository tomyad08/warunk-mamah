import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Papa from "papaparse";
import { useDispatch, useSelector } from "react-redux";
import { addSembako } from "../Lib/ProductSlice";

const Produk = () => {
  const products = useSelector((state) => state.product.sembako[0]);
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS537UXCmGGlQb_1UDbB2H3EzGhFRanDQvVBtJ0TxUn_Mrab8-3oU9Bbmm43eup-0yxszt1SnApSEv4/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (value) => {
          dispatch(addSembako(value.data));
          console.log(value.data);
        },
      }
    );
  }, [dispatch]);
  console.log(products);

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
