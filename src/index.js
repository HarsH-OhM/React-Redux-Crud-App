import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createStore } from "redux";
import postReducer from "./reducers/postReducer";

import { Provider } from "react-redux";

//The createStore method will allow us to create the store but we are not done yet. This method needs a special argument and this argument goes by a special name called the ‘reducer’
const store = createStore(postReducer);


//store object where all the states are live of our app
 //Inject global redux state to comps
ReactDOM.render(
  <Provider store={store}>   
    <App />
  </Provider>,
  document.getElementById("root")
);
