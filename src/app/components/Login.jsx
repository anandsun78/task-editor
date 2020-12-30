import React from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions/taskActions";
import * as types from "../redux/actions/actionTypes";

const Login = ({ authenticateUser, authenticated }) => (
  <div>
    <h2>Please Login</h2>
    <form onSubmit={authenticateUser}>
      <input
        type="text"
        placeholder="username"
        name="username"
        defaultValue="Dev"
      />
      <input
        type="password"
        placeholder="password"
        name="password"
        defaultValue=""
      />
      <button type="submit">Login</button>
      {authenticated === types.NOT_AUTHENTICATED ? (
        <p>Login Incorrect</p>
      ) : null}
    </form>
  </div>
);

const mapStateToProps = ({ session }) => ({
  authenticated: session.authenticated,
});

const mapDispatchToProps = (dispatch) => ({
  authenticateUser(e) {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    dispatch(actions.requestAuthenticateUser(username, password));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
