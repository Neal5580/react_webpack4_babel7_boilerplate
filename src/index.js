import React from "react";
import ReactDOM from "react-dom";
import rootStore from "./store";
import App from "./js/components/App";
import { Provider } from "mobx-react";
const store = new rootStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
