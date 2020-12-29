import { combineReducers } from "redux";
import tasks from "./taskReducer";
import groups from "./groupReducer";
import users from "./userReducer";
import comments from "./commentReducer";

const rootReducer = combineReducers({
  tasks,
  groups,
  users,
  comments,
});

export default rootReducer;
