/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { requestTaskCreation } from "../redux/actions/taskActions";

const TaskList = ({ tasks, name, id, createNewTask }) => (
  <div>
    <h3>{name}</h3>
    <div>
      {tasks.map((task) => (
        <Link to={`/task/${task.id}`} key={task.name}>
          <div>{task.name}</div>
        </Link>
      ))}
    </div>
    <button type="button" onClick={() => createNewTask(id)}>
      Add new
    </button>
  </div>
);
const mapStateToProps = (state, ownProps) => {
  const groupId = ownProps.id;
  return {
    name: ownProps.name,
    id: groupId,
    tasks: state.tasks.filter((task) => task.group === groupId),
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  createNewTask(id) {
    console.log("Creating new task...", id);
    dispatch(requestTaskCreation(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
