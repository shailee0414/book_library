import React from "react";
import ReactDOM from "react-dom";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import reducers from "./redux/reducers";
import { App } from "./App";

const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
