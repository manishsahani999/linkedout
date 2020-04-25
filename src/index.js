import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "helpers";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";

// pages
import { App } from "App";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
