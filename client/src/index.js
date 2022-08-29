import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/main.scss";

import { Provider } from "react-redux";
import configureStore from "store";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={configureStore()}>
    <App />
  </Provider>
);
