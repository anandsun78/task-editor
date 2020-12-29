import { take, put, select } from "redux-saga/effects";
import uuid from "uuid";
import * as actions from "./actions/taskActions";
import * as types from "./actions/actionTypes";

export default function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(types.REQUEST_TASK_CREATION);
    const ownerId = `U1`;
    const taskId = uuid();
    yield put(actions.createTask(taskId, groupId, ownerId));
  }
}
