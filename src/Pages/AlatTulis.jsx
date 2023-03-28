import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Papa from "papaparse";
import { addAlatTulis } from "../Lib/ProductSlice";
import Fungsi from "../Component/FungsiTampilan";

const AlatTulis = () => {
  const products = useSelector((state) => state.product.alatTulis[0]);
  const [kondisi, setKondisi] = useState(false);
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
      <h1
        className="text-center pt-4"
        style={{ fontFamily: "'Signika Negative', sans-serif" }}
      >
        <strong>Alat Tulis</strong>
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
export default AlatTulis;
