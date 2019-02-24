import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import App from "./main/app";
import store from './config/store'
import './config/axios';
// import axios  from 'axios';

// axios.interceptors.request.use(function (config) {
//   // insere o token para todas as chamadas de api
  
//   if(store.getState().auth.valid_token){
//       config.data.token = store.getState().auth.token;
//   }

//   console.log('testeaxios', config);

//   // config.data.token = access_token;
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("wrapper")
);
