import { defaultState } from "../../../server/defaultState";

export default function taskReducer(tasks = defaultState.tasks) {
  return tasks;
}
