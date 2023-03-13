import React, { useState } from "react";
import { useSelector } from "react-redux";

const Sembako = () => {
  const products = useSelector((state) => state.product.sembako[0]);
  const [nama, setNama] = useState(" ");
  const [filter, setFilter] = useState(" ");
  console.log(filter);

  return (
    <div className="container-fluid">
      <h1 className="text-center mt-2">Sembako</h1>

      <div className="d-flex justify-content-center mb-5">
        <input
          onChange={(e) => setNama(e.target.value)}
          style={{ width: "50%", borderRadius: "10px 0 0 10px " }}
          className="border border-2 p-2"
          placeholder=" Mau cari apa?"
        />

        <select
          onChange={(e) => setFilter(e.target.value)}
          className="py-3 border border-1 "
          style={{
            backgroundColor: "purple",
            color: "white",
            width: "15%",
            borderRadius: "0 10px 10px 0 ",
          }}
        >
          <option value=" " selected style={{ fontSize: "90%" }}>
            Filter
          </option>
          <option value="Bahan Makanan" style={{ fontSize: "90%" }}>
            Bahan Makanan
          </option>
          <option value="Pembersih" style={{ fontSize: "90%" }}>
            Pembersih
          </option>
          <option value="Kesehatan" style={{ fontSize: "90%" }}>
            Kesehatan
          </option>
          <option value="Kosmetik" style={{ fontSize: "90%" }}>
            Kosmetik
          </option>
        </select>
      </div>

      {products ? (
        <div className="row justify-content-center">
          {products
            .filter((value) => {
              if (nama === " ") {
                return value;
              } else if (value.tagging.includes(nama.toLowerCase())) {
                return value;
              }
            })
            .map((value) => (
              <div className="col-md-2 col-5 mx-1">
                <div>
                  <img
                    src={value.foto}
                    alt=" "
                    width="100%"
                    className="border border-0 rounded-3"
                  />
                  <h5
                    style={{
                      fontFamily: "'Signika Negative', sans-serif",
                      lineHeight: "25px",
                      textAlign: "center",
                    }}
                  >
                    {value.nama}
                  </h5>
                  <p
                    style={{
                      fontFamily: "'Signika Negative', sans-serif",
                      lineHeight: "5px",
                      textAlign: "center",
                    }}
                  >
                    Rp. {value.harga}
                  </p>
                </div>
              </div>
            ))}
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
