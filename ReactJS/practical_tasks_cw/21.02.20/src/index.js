import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./Components/App";

// const app = () => (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// ReactDOM.render( app, document.getElementById("root") );


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
