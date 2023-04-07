import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Papa from "papaparse";
import { addAlatTulis } from "../Lib/ProductSlice";
import Fungsi from "../Component/FungsiTampilan";
import { Link } from "react-router-dom";

const AlatTulis = () => {
  const products = useSelector((state) => state.product.alatTulis[0]);

  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsmUeg-tr5uzW5bhuAJDUfhEnyyPMus-hsQl6cTkwIuytiKaEnsoEreCxg4B9n0o9tN1sxuKyQXfdZ/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (value) => {
          dispatch(addAlatTulis(value.data));
        },
      }
    );
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <div className="row py-3" style={{ backgroundColor: "purple" }}>
        <div className="col">
          <Link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              fill="white"
              className="bi bi-arrow-left"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
              />
            </svg>
          </Link>
        </div>
        <div className="col">
          <h3
            className="text-center"
            style={{
              fontFamily: "'Signika Negative', sans-serif",

              color: "white",
            }}
          >
            <strong>Alat Tulis</strong>
          </h3>
        </div>
        <div className="col">
          <span className="float-end mb-2">
            <Link to="/pesanan">
              <img src="./assets/keranjang1.png" alt=" " width="50px" />
            </Link>
          </span>
        </div>
      </div>

      {products ? (
        <div className="row justify-content-center">
          <Fungsi props={products} />
        </div>
      ) : (
        <div>
          <h1>Loading ...</h1>
        </div>
      )}
    </div>
  );
};
export default AlatTulis;
