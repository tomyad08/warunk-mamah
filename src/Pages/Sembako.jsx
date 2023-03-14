import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Papa from "papaparse";
import { addSembako } from "../Lib/ProductSlice";
import Fungsi from "../Component/FungsiTampilan";

const Sembako = () => {
  const products = useSelector((state) => state.product.sembako[0]);
  const [nama, setNama] = useState(" ");
  const [filter, setFilter] = useState(" ");
  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vS537UXCmGGlQb_1UDbB2H3EzGhFRanDQvVBtJ0TxUn_Mrab8-3oU9Bbmm43eup-0yxszt1SnApSEv4/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (value) => {
          dispatch(addSembako(value.data));
        },
      }
    );
  }, [dispatch]);
  const Data = [];

  return (
    <div className="container-fluid">
      <h1
        className="text-center mt-2"
        style={{ fontFamily: "'Signika Negative', sans-serif" }}
      >
        <strong>Sembako</strong>
      </h1>
      <div className="d-flex justify-content-center mb-5">
        <input
          onChange={(e) => setNama(e.target.value)}
          style={{ width: "50%", borderRadius: "10px 0 0 10px " }}
          className="border border-2 p-1"
          placeholder=" Mau cari apa?"
        />

        <select
          onChange={(e) => setFilter(e.target.value)}
          className="py-1 border border-1 "
          style={{
            backgroundColor: "purple",
            color: "white",
            width: "15%",
            borderRadius: "0 10px 10px 0 ",
          }}
        >
          <option value=" " selected>
            Filter
          </option>
          <option value="Bahan Makanan">Bahan Makanan</option>
          <option value="Pembersih">Pembersih</option>
          <option value="Kesehatan">Kesehatan</option>
          <option value="Kosmetik">Kosmetik</option>
        </select>
      </div>
      {products ? (
        <div
          className="row justify-content-center"
          style={{ backgroundColor: "white" }}
        >
          {products
            .filter((value) => {
              if (filter === " ") {
                return value;
              } else if (filter === value.kategori) {
                return value;
              }
            })
            .filter((value) => {
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
export default Sembako;
