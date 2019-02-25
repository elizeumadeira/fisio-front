import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./main/app";
import store from './config/store'
import './config/axios';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("wrapper")
);
