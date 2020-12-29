import { createStore, applyMiddleware } from "redux";

import rootReducer from "./reducers/rootReducer";

export default function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}
rootReducer;
/*combineReducers({
    tasks(tasks = defaultState.tasks, action) {
      switch (action.type) {
        case mutations.CREATE_TASK:
          return [
            ...tasks,
            {
              id: action.taskID,
              name: "New Task",
              group: action.groupID,
              owner: action.ownerID,
              isComplete: false,
            },
          ];
      }
      return tasks;
    },
    comments(comments = defaultState.comments, action) {
      return comments;
    },
    groups(groups = defaultState.groups, action) {
      return groups;
    },
    users(users = defaultState.users, action) {
      return users;
    },
  }),
  applyMiddleware(createLogger(), sagaMiddleware)
  */
