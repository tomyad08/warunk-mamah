import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch } from "react-redux";
import { addOrders } from "../Lib/ProductSlice";
import Swal from "sweetalert2";

const Fungsi = (props) => {
  const [data, setData] = useState(" ");
  const [show, setShow] = useState(false);
  const [count, setCount] = useState(1);

  const dispatch = useDispatch();

  if (count === 0) {
    setCount(1);
  }

  const Data = props.props;

  const handleShow = (value) => {
    setData(value);
    setShow(true);
  };
  const handleClose1 = () => setShow(false);

  const handleClose = () => {
    const datas = {
      id: data.id,
      nama: data.nama,
      kategori: data.kategori,
      jumlah: count,
      total: hargaTotal,
    };
    dispatch(addOrders(datas));
    Swal.fire({
      title: "Pesanan Tersimpan",
      text: "Untuk melihat pesanan kamu, silahkan klik logo keranjang yang ada di bagian pojok kanan atas ya.",
      icon: "success",
      confirmButtonText: "Mantap",
    });
    setShow(false);
  };
  const hargaTotal = count * data.harga;

  return (
    <div className="container-fluid">
      {Data ? (
        <div className="row justify-content-center">
          {Data.map((value) => (
            <div
              className="col-md-2 col-5 mx-1 "
              onClick={() => handleShow(value)}
              key={value.id}
            >
              <div
                className="border border-0 rounded-2 mb-2"
                style={{
                  zIndex: "4",
                  backgroundColor: "#ECF2FF",
                  overflow: "hidden",
                }}
              >
                <img src={value.foto} alt=" " width="100%" id="gambar" />
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
                  Rp. {value.harga}/pcs
                </p>
              </div>
            </div>
          ))}
          <Modal show={show} onHide={handleClose1}>
            <Modal.Header closeButton>
              <Modal.Title className="fs-1">{data.nama}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h6 className="fs-3">
                Jumlah:
                <span
                  className="mx-2 px-3 fs-3 border border-1 rounded-2"
                  onClick={() => setCount(count - 1)}
                >
                  -
                </span>
                <span className="fs-3 ">{count}</span>
                <span
                  className="mx-2 px-2 fs-3 border border-1 rounded-2"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </span>
              </h6>
              <h4>Harga Total: Rp. {hargaTotal} </h4>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose1}>
                Close
              </Button>
              <Button variant="success" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      ) : (
        <h1>Loading ...</h1>
      )}
    </div>
  );
};
export default Fungsi;
