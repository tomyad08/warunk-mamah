import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Papa from "papaparse";
import { addSembako } from "../Lib/ProductSlice";
import Fungsi from "../Component/FungsiTampilan";

const Sembako = () => {
  const products = useSelector((state) => state.product.sembako[0]);
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

  return (
    <div className="container-fluid">
      <h1
        className="text-center pt-4"
        style={{ fontFamily: "'Signika Negative', sans-serif" }}
      >
        <strong>Sembako</strong>
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
export default Sembako;
