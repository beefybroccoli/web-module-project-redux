import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import movieReducer from "./reducers/index";
import reducer from "./reducers/movieReducer";

import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
const store = createStore(movieReducer);
console.log("store.getState() = ", store.getState());
ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById("root")
);
