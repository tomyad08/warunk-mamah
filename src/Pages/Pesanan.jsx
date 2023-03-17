import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Kontak from "../Component/Footer";
import NumberWithCommas from "../utils/currency";

const Pesanan = () => {
  const products = useSelector((state) => state.product.orders);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [keterangan, setKeterangan] = useState(" ");

  const numbers = products.map((data) => data.total);
  const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);

  let pesanan = [];
  return (
    <div
      className="container-fluid py-5"
      style={{
        fontFamily: "'Signika Negative', sans-serif",
        width: "350px",
      }}
    >
      <div>
        <h1 className="text-center">Pesanan</h1>
        {products.map((value) => (
          <>
            <div style={{ display: "none" }}>
              {pesanan.push(
                `    pesan= ${value.nama}, jumlah= ${value.jumlah} pcs, total= Rp.${value.total} ||    `
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
                <h6 className="float-end" key={value.id}>
                  Rp. {NumberWithCommas(value.total)}
                </h6>
              </div>
            </div>
          </>
        ))}
        <div className="px-2 mt-3">
          <h4>Total Pembayaran:</h4>
          <h5>Rp. {NumberWithCommas(sum)}</h5>
        </div>
      </div>
      <p style={{ textAlign: "justify", fontSize: "12px" }}>
        *Silahkan untuk konfirmasi nama dan alamat ataupun patokan tempat
        sebelum klik pesanan selesai. Pesanan akan terhubung otomatis dengan no
        WhatsApp kamu.
      </p>
      <div className="d-flex justify-content-around my-3">
        <input
          className="p-2 border border-1 rounded-2"
          placeholder="nama"
          style={{ width: "100px" }}
          onChange={(e) => setNama(e.target.value)}
        />

        <input
          className="p-2 border border-1 rounded-2"
          placeholder="alamat/patokan tempat"
          style={{ width: "210px" }}
          onChange={(e) => setAlamat(e.target.value)}
        />
      </div>
      <div>
        <input
          className="p-2 mb-4 border border-1 rounded-2"
          type="text"
          style={{ width: "100%" }}
          placeholder="Keterangan: Mienya rasa soto dan rendang..."
          onChange={(e) => setKeterangan(e.target.value)}
        />
      </div>
      <a
        href={`https://wa.me/628991563674?text=Nama: ${nama} alamat: ${alamat}  keterangan: ${keterangan}
        pesanan: 
        ${JSON.stringify(pesanan)} harga total=${sum}
        `}
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
      <Kontak />
    </div>
  );
};
export default Pesanan;
