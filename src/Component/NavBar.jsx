import React, { useState } from "react";

const Navibar = () => {
  const [kondisi, setKondisi] = useState(false);
  return (
    <div className="container-fluid" style={{ color: "white" }}>
      <div className="row">
        <div className="col px-3 pt-3">
          <h2
            style={{
              fontFamily: "'Signika Negative', sans-serif",
              fontSize: "25px",
            }}
          >
            <strong>Warunk Ibu Titin</strong>
          </h2>
        </div>
        <div className="col p-3">
          <div className="float-end">
            <a
              href="#produk"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{ fontFamily: "'Signika Negative', sans-serif" }}
              >
                Produk
              </span>
            </a>
            <a href="#faq" style={{ textDecoration: "none", color: "white" }}>
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                }}
              >
                FAQ
              </span>
            </a>
            <a
              href="#lokasi"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                }}
              >
                Lokasi
              </span>
            </a>
            <a
              href="#kontak"
              style={{ textDecoration: "none", color: "white" }}
            >
              <span
                className="mx-3 fs-4"
                id="menu"
                style={{
                  fontFamily: "'Signika Negative', sans-serif",
                }}
              >
                Kontak
              </span>
            </a>
            <span className="mx-2 float-end" id="sandwich">
              <img
                src="./assets/fi_menu.png"
                style={{ width: "160%" }}
                alt=" "
                onClick={() => setKondisi(!kondisi)}
              />
            </span>
          </div>
        </div>
      </div>
      {kondisi && (
        <div
          style={{
            backgroundColor: "#FF78F0",
            width: "100%",
          }}
          className="p-1 border border-0 rounded-3 d-flex justify-content-around"
        >
          <a href="#produk" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Produk
            </div>
          </a>
          <a href="#faq" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              FAQ
            </div>
          </a>
          <a href="#lokasi" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Lokasi
            </div>
          </a>
          <a href="#kontak" style={{ textDecoration: "none", color: "black" }}>
            <div
              id="menuSandwich"
              style={{ fontFamily: "'Signika Negative', sans-serif" }}
            >
              Kontak
            </div>
          </a>
        </div>
      )}
    </div>
  );
};
export default Navibar;
