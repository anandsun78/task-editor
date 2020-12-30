import * as types from "../actions/actionTypes";

export default function taskReducer(tasks = [], action) {
  switch (action.type) {
    case types.SET_STATE:
      return action.state.tasks;
    case types.CREATE_TASK:
      return [
        ...tasks,
        {
          id: action.taskId,
          name: "New Task",
          group: action.groupId,
          owner: action.ownerId,
          isComplete: false,
        },
      ];
    case types.SET_TASK_COMPLETE:
      return tasks.map((task) =>
        task.id === action.taskId
          ? { ...task, isComplete: action.isComplete }
          : task
      );
    case types.SET_TASK_NAME:
      return tasks.map((task) =>
        task.id === action.taskId ? { ...task, name: action.name } : task
      );
    case types.SET_TASK_GROUP:
      return tasks.map((task) =>
        task.id === action.taskId ? { ...task, group: action.groupId } : task
      );
    default:
      return tasks;
  }
}
