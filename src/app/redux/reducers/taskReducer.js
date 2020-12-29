import { defaultState } from "../../../server/defaultState";
import * as types from "../actions/actionTypes";

export default function taskReducer(tasks = defaultState.tasks, action) {
  switch (action.type) {
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
    default:
      return tasks;
  }
}
