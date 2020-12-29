import React from "react";
import { Provider } from "react-redux";
import configureStore from "../redux/configureReduxStore";

const store = configureStore();

const Main = () => {
  return (
    <Provider store={store}>
      <div>Dashboard goes here</div>
    </Provider>
  );
};

export default Main;
