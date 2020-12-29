/* eslint-disable react/prop-types */
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../redux/actions/taskActions";

const TaskDetail = ({
  task,
  groups,
  isComplete,
  setTaskCompletion,
  setTaskGroup,
  setTaskName,
}) => (
  <div>
    <div>
      <input onChange={setTaskName} value={task.name} />
    </div>
    <div>
      <button type="button" onClick={() => setTaskCompletion(!isComplete)}>
        {isComplete === true ? `Reopen` : `Complete`}
      </button>
    </div>
    <div>
      <select onChange={setTaskGroup} value={task.group}>
        {groups.map((group) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ))}
      </select>
    </div>
    <div>
      <Link to="/dashboard">
        <button type="button">Done</button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const task = state.tasks.find((oneTask) => oneTask.id === id);
  const { groups } = state;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  const { id } = ownProps.match.params;
  return {
    setTaskCompletion(isComplete) {
      dispatch(actions.setTaskCompletion(id, isComplete));
    },
    setTaskGroup(group) {
      dispatch(actions.setTaskGroup(id, group.target.value));
    },
    setTaskName(name) {
      dispatch(actions.setTaskName(id, name.target.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskDetail);
