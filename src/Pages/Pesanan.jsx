import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Kontak from "../Component/Footer";
import NumberWithCommas from "../utils/currency";
import axios from "axios";
import Swal from "sweetalert2";
import { deleteOrders } from "../Lib/ProductSlice";

const Pesanan = () => {
  const products = useSelector((state) => state.product.orders);
  const [nama, setNama] = useState("");
  const [alamat, setAlamat] = useState("");
  const [keterangan, setKeterangan] = useState(" ");
  const [noWA, setNoWA] = useState(" ");
  const [valid, setValid] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const numbers = products.map((data) => data.total);
  const sum = numbers.reduce(function (result, item) {
    return result + item;
  }, 0);

  let pesanan = [];

  const handleDelete = (id) => {
    dispatch(deleteOrders(id));
  };

  const handlePesanan = () => {
    const data = {
      nama: nama,
      alamat: alamat,
      nowhatsapp: `https://wa.me/62${noWA}?text=Hallo ${nama}.  Pesanan kamu akan saya kirim pukul .  Terima kasih telah belanja di Warunk Ibu Titin.`,
      pesanan: pesanan,
      hargatotal: sum,
      keterangan: keterangan,
    };
    if (nama === " ") {
      setValid(true);
    } else if (alamat === " ") {
      setValid(true);
    } else if (noWA === " ") {
      setValid(true);
    } else {
      axios.post("https://sheetdb.io/api/v1/lx1xvq451504f", data);
      Swal.fire({
        title: "Pesanan telah terkirim",
        text: "Terima kasih telah belanja di Warunk Ibu Titin.",
        icon: "success",
        confirmButtonText: "Selesai",
      });
      navigate("/");
    }
  };

  return (
    <div>
      <div
        className="container-fluid mb-5 pt-5"
        style={{
          fontFamily: "'Signika Negative', sans-serif",
          width: "350px",
        }}
      >
        <div
          className="p-3 border border-0 rounded-2"
          style={{ backgroundColor: "white" }}
        >
          <div>
            <h1 className="text-center">Pesanan</h1>
            {products.map((value) => (
              <>
                <div style={{ display: "none" }}>
                  {pesanan.push(`${value.jumlah} pcs ${value.nama} -----`)}
                </div>
                <div className="row px-2 justify-content-around" key={value.id}>
                  <div className="col ">
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
                    <img
                      src="./assets/trash.svg"
                      alt=" "
                      width="12px"
                      className="float-end mt-4"
                      onClick={() => handleDelete(value.id)}
                    />
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
            *Silahkan untuk isi formulir di bawah ini sebelum klik tombol
            pesanan selesai.
          </p>
          {valid && (
            <p
              onClick={() => setValid(false)}
              style={{
                backgroundColor: "red",
                textAlign: "center",
                color: "white",
              }}
            >
              Yuk, isi formulirnya dulu.
            </p>
          )}
          <div className="d-flex justify-content-around mb-1">
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
              className="p-2 mb-1 border border-1 rounded-2"
              type="number"
              style={{ width: "100%" }}
              placeholder="No. WhatsApp 08xxxx"
              onChange={(e) => setNoWA(e.target.value)}
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
          {/* <a
            href={`https://wa.me/628991563674?text= *Nama:* ${nama} 
        *Alamat:* ${alamat} 
        *Keterangan:* ${keterangan}
        *Harga total=*Rp. ${NumberWithCommas(
          sum
        )} ----------------------------------------------                                      
        ${JSON.stringify(pesanan)}                                  
        `}
          > */}
          <button
            className="btn btn-success p-2"
            style={{
              width: "100%",
              fontSize: "20px",
            }}
            onClick={handlePesanan}
          >
            Pesanan Selesai
          </button>

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
      </div>
      <Kontak />
    </div>
  );
};
export default Pesanan;
