import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Papa from "papaparse";
import { addKebersihan } from "../Lib/ProductSlice";
import Fungsi from "../Component/FungsiTampilan";

const Kebersihan = () => {
  const products = useSelector((state) => state.product.kebersihan[0]);
  const [nama, setNama] = useState(" ");
  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTmw1g9_Z5VT7yLtgAX-USkUR5YXjgPtO8HcxJxXhzj3vDTJoNw2SWOSr9mWfLvKOG69MYG3--5HJZv/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (value) => {
          dispatch(addKebersihan(value.data));
        },
      }
    );
  }, [dispatch]);
  const Data = [];

  return (
    <div className="container-fluid">
      <h1
        className="text-center pt-4"
        style={{ fontFamily: "'Signika Negative', sans-serif" }}
      >
        <strong>Kebersihan</strong>
      </h1>
      <div className="d-flex justify-content-center mb-5">
        <input
          onChange={(e) => setNama(e.target.value)}
          style={{ width: "50%", borderRadius: "10px 0 0 10px " }}
          className="border border-0 p-2"
          placeholder=" Mau cari apa?"
        />

        <div
          className="p-1 border border-0 "
          style={{
            backgroundColor: "white",
            color: "white",
            width: "40px",
            borderRadius: "0 10px 10px 0 ",
          }}
        >
          <img src="./assets/magnifier.png" alt=" " width="30px" />
        </div>
      </div>
      {products ? (
        <div className="row justify-content-center">
          {products.filter((value) => {
            if (nama === " ") {
              Data.push(value);
            } else if (value.tagging.includes(nama.toLowerCase())) {
              Data.push(value);
            }
          })}
          <Fungsi props={Data} />
        </div>
      ) : (
        <div>
          <h1>Loading ...</h1>
        </div>
      )}
    </div>
  );
};
export default Kebersihan;
