import { applyMiddleware, createStore } from "redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import reducers from "./reducers.js";

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(promise, multi, thunk)(createStore)(
  reducers,
  devTools
);

export default store;