import { take, put, select } from "redux-saga/effects";
import uuid from "uuid";
import axios from "axios";
import * as actions from "./actions/taskActions";
import * as types from "./actions/actionTypes";
import history from "./history";

const url = "http://localhost:8888";

export function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(types.REQUEST_TASK_CREATION);
    const ownerId = `U1`;
    const taskId = uuid();
    yield put(actions.createTask(taskId, groupId, ownerId));
    const { res } = yield axios.post(url + `/task/new`, {
      task: {
        id: taskId,
        group: groupId,
        owner: ownerId,
        isComplete: false,
        name: "New Task",
      },
    });
    console.log("Got response", res);
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      types.SET_TASK_GROUP,
      types.SET_TASK_NAME,
      types.SET_TASK_COMPLETE,
    ]);
    axios.post(url + `/task/update`, {
      task: {
        id: task.taskId,
        group: task.groupId,
        name: task.name,
        isComplete: task.isComplete,
      },
    });
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(types.REQUEST_AUTHENTICATE_USER);
    try {
      const { data } = yield axios.post(url + `/authenticate`, {
        username,
        password,
      });
      if (!data) {
        throw new Error();
      }
      yield put(actions.setState(data.state));
      yield put(actions.processAuthenticateUser(types.AUTHENTICATED));

      history.push("/dashboard");
    } catch (e) {
      yield put(actions.processAuthenticateUser(types.NOT_AUTHENTICATED));
    }
  }
}
