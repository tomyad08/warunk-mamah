import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Papa from "papaparse";
import { addElektronika } from "../Lib/ProductSlice";
import Fungsi from "../Component/FungsiTampilan";

const Elektronika = () => {
  const products = useSelector((state) => state.product.elektronika[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTBa4BHo94u1XgOZvcHqVxm3vOWn4HHiSTcjEJXpdNqhOnFL5A7qoGOxhRl0I0-hW1bi_jat087VliP/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (value) => {
          dispatch(addElektronika(value.data));
        },
      }
    );
  }, [dispatch]);

  return (
    <div className="container-fluid">
      <h1
        className="text-center pt-4"
        style={{ fontFamily: "'Signika Negative', sans-serif" }}
      >
        <strong>Elektronik</strong>
      </h1>

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
export default Elektronika;
