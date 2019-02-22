import React from "react";
import ReactDOM from "react-dom";

import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import App from "./main/app";
import reducers from "./main/reducers.js";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();


function middlewareteste({ dispatch, getState }) {
  return next => action => {
    console.log('teste', action, getState());
    // if (!actionIsValid(action)) next(action);
    next(action);

    // const [pendingType, successType, errorType] = types;
    // dispatch({ type: pendingType });
    // return callAPI()
    //   .then(response => {
    //     dispatch({
    //       type: successType,
    //       payload: response,
    //     });
    //     return Promise.resolve(getState());
    //   })
    //   .catch(error => {
    //     dispatch({
    //       type: errorType,
    //       payload: error,
    //     });
    //     return Promise.reject(error);
    //   });
  };
}



const store = applyMiddleware(promise, multi, thunk, middlewareteste)(createStore)(
  reducers,
  devTools
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("wrapper")
);
