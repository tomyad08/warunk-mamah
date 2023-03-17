import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Papa from "papaparse";
import { addKebersihan } from "../Lib/ProductSlice";
import Fungsi from "../Component/FungsiTampilan";

const Kebersihan = () => {
  const products = useSelector((state) => state.product.kebersihan[0]);
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

  return (
    <div className="container-fluid">
      <h1
        className="text-center pt-4"
        style={{ fontFamily: "'Signika Negative', sans-serif" }}
      >
        <strong>Kebersihan</strong>
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
export default Kebersihan;
