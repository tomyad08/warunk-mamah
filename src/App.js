import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Kontak from "./Component/Footer";
import Navibar from "./Component/NavBar";
import HomePage from "./Pages/HomePage";
import Pesanan from "./Pages/Pesanan";
import Sembako from "./Pages/Sembako";

const App = () => {
  return (
    <div>
      <div style={{ position: "relative", top: "70px" }}>
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
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App;
