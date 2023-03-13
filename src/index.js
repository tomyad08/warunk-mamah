import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import reportWebVitals from "./reportWebVitals";
import NavBanner from "./Component/NavBanner";
import Produk from "./Component/Product";
import FAQ from "./Component/FAQ";
import Kontak from "./Component/Footer";
import { Provider } from "react-redux";
import { store } from "./Lib/Store";
import Sembako from "./Sembako/Sembako";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NavBanner />
      <Produk />
      <FAQ />
      <Kontak />
      <Sembako />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
