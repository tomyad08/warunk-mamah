import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Pesanan = () => {
  const products = useSelector((state) => state.product.orders);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");

  const numbers = products.map((data) => data.total);
  const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);
  console.log(nama);
  console.log(alamat);
  let pesanan = [];
  const DataPemesanan = {
    nama: nama,
    alamat: alamat,
    pesanan: pesanan,
  };
  return (
    <div
      className="container-fluid"
      style={{ fontFamily: "'Signika Negative', sans-serif", width: "400px" }}
    >
      <div>
        <h1 className="text-center mt-5">Pesanan</h1>
        {products.map((value) => (
          <>
            <div style={{ display: "none" }}>
              {pesanan.push(
                `Pesan= ${value.nama}, Jumlah= ${value.jumlah}, Total= ${value.total} ||`
              )}
            </div>
            <div className="row px-2 justify-content-around">
              <div className="col " key={value.id}>
                <h6>{value.nama}</h6>
                <p
                  style={{
                    lineHeight: "15px",
                    fontSize: "12px",
                    fontFamily: "'Signika Negative', sans-serif",
                  }}
                >
                  Jumlah: {value.jumlah}
                </p>
              </div>

              <div className="col">
                <p className="float-end" key={value.id}>
                  Rp. {value.total}
                </p>
              </div>
            </div>
          </>
        ))}
        <div className="px-2 mt-3">
          <h4>Total Pembayaran:</h4>
          <h5>Rp. {sum}</h5>
        </div>
      </div>
      <p style={{ textAlign: "justify" }}>
        Silahkan untuk konfirmasi nama dan alamat ataupun patokan tempat sebelum
        klik pesanan selesai
      </p>
      <div className="d-flex justify-content-around my-3">
        <input
          className="p-1 border border-1 rounded-2"
          placeholder="nama"
          style={{ width: "70%" }}
          onChange={(e) => setNama(e.target.value)}
        />

        <input
          className="p-1 border border-1 rounded-2"
          placeholder="alamat/patokan tempat"
          style={{ width: "70%" }}
          onChange={(e) => setAlamat(e.target.value)}
        />
      </div>
      <a
        href={`https://wa.me/6281383928459?text=${JSON.stringify(
          DataPemesanan
        )}`}
      >
        <button
          className="btn btn-success p-2"
          style={{
            width: "100%",
            fontSize: "20px",
          }}
        >
          Pesanan Selesai
        </button>
      </a>
      <Link to="/">
        <button
          className="btn p-2 my-2"
          style={{
            width: "100%",
            fontSize: "20px",
            backgroundColor: "purple",
            color: "white",
          }}
        >
          Belanja lagi
        </button>
      </Link>
    </div>
  );
};
export default Pesanan;
