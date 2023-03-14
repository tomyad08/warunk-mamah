import React from "react";
import { Link } from "react-router-dom";

const Kontak = () => {
  return (
    <div
      className="container-fluid"
      style={{
        background: "linear-gradient(#A31ACB,purple)",
        color: "white",
      }}
      id="kontak"
    >
      <div className="row justify-content around px-1 py-5 text-center">
        <div
          className="col-md my-1"
          style={{ fontFamily: "'Signika Negative', sans-serif" }}
        >
          <h5>Jl. Imam Bonjol No.5</h5>
          <p style={{ lineHeight: "8px" }}>Kec. Babakan, Kab. Cirebon</p>
          <p style={{ lineHeight: "8px" }}>Kode Pos 45191</p>
          <p style={{ lineHeight: "8px" }}>
            <strong>WhatsApp: 081543344766</strong>
          </p>
        </div>

        <div className="col-md my-1">
          <a href="#produk" style={{ textDecoration: "none" }}>
            <button
              style={{
                fontFamily: "'Signika Negative', sans-serif",
                backgroundColor: "#FF78F0",
                color: "black",
              }}
              className="btn px-5 py-2 border border-0 rounded-2 fs-4"
            >
              Explore
            </button>
          </a>
        </div>

        <div className="col-md">
          <h2 style={{ fontFamily: "'Signika Negative', sans-serif" }}>
            <strong>Warunk Ibu Titin</strong>
          </h2>
        </div>
      </div>
    </div>
  );
};
export default Kontak;
