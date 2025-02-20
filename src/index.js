import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
//import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter} from "react-router-dom";
import store from "./redux/store";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts
//import Admin from "layouts/Admin.js";
//import Auth from "layouts/Auth.js";

// views without layouts
//import Landing from "views/Landing.js";
//import Profile from "views/Profile.js";
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
