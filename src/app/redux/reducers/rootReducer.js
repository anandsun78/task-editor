import { combineReducers } from "redux";
import tasks from "./taskReducer";
import groups from "./groupReducer";
import users from "./userReducer";
import comments from "./commentReducer";
import session from "./authenticateReducer";

const rootReducer = combineReducers({
  tasks,
  groups,
  users,
  comments,
  session,
});

export default rootReducer;
