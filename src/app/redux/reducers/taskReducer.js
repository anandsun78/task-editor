import * as types from "../actions/actionTypes";
import { defaultState } from "../../../server/defaultState";

export default function taskReducer(tasks = defaultState.tasks, action) {
  return tasks;
}
