import React from "react";
import { connect } from "react-redux";

const TaskDetail = ({ id, comments, task, isComplete, groups }) => (
  <div>
    <h2>{task.name}</h2>
    <button>Complete/Reopen Task</button>
    <select></select>
  </div>
);

const mapStateToProps = (state) => state;

export const ConnectedTaskDetail = connect(mapStateToProps)(TaskDetail);
