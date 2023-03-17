import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Papa from "papaparse";
import { addKesehatan } from "../Lib/ProductSlice";
import Fungsi from "../Component/FungsiTampilan";

const Kesehatan = () => {
  const products = useSelector((state) => state.product.kesehatan[0]);
  const dispatch = useDispatch();

  useEffect(() => {
    Papa.parse(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vQT67AjyQ-9RzHGmVoNGFAlXXjirItI5A_jTTL5_DZXNqrEqLt-2Tabd8QauNPx7UWO126gseA4TEIh/pub?output=csv",
      {
        download: true,
        header: true,
        complete: (value) => {
          dispatch(addKesehatan(value.data));
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
        <strong>Kesehatan</strong>
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
export default Kesehatan;
