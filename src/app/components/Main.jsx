import React from "react";
import { Provider } from "react-redux";
import { Router, Route } from "react-router-dom";
import { store } from "../redux/configureReduxStore";
import Dashboard from "./Dashboard";
import history from "../redux/history";
import Navigation from "./Navigation";
import TaskDetail from "./TaskDetail";

const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <Navigation />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/task/:id" component={TaskDetail} />
      </div>
    </Provider>
  </Router>
);

export default Main;
