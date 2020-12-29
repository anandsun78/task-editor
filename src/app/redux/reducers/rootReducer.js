import task from "./taskReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  task,
});

export default rootReducer;
