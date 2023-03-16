import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navibar from "./Component/NavBar";
import AlatTulis from "./Pages/AlatTulis";
import HomePage from "./Pages/HomePage";
import Pesanan from "./Pages/Pesanan";
import Sembako from "./Pages/Sembako";

const App = () => {
  const [kondisi, setKondisi] = useState(true);
  return (
    <div>
      <div
        style={{
          position: "relative",
          top: "70px",
          backgroundColor: "#E3DFFD",
        }}
      >
        <BrowserRouter>
          <div
            style={{
              position: "fixed",
              width: "100%",
              top: "-2px",
              zIndex: "1",
            }}
          >
            <Navibar />
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sembako" element={<Sembako />} />
            <Route path="/pesanan" element={<Pesanan />} />
            <Route path="/alat-tulis" element={<AlatTulis />} />
          </Routes>
        </BrowserRouter>
      </div>
      {kondisi && (
        <div
          style={{
            position: "fixed",
            bottom: "8px",
            right: "8px",
          }}
        >
          <p className="float-end me-2" onClick={() => setKondisi(false)}>
            X
          </p>
          <a href={`https://wa.me/6285772390154`}>
            <img src="./assets/WA.png" alt=" " width="100px" />
          </a>
          <p
            style={{
              backgroundColor: "white",
              padding: "5px 5px 5px 5px",
              borderRadius: "10px",
            }}
          >
            <strong>Butuh bantuan?</strong>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
