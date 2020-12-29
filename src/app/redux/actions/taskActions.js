/* eslint-disable import/prefer-default-export */
import * as types from "./actionTypes";

export function requestTaskCreation(groupId) {
  return { type: types.REQUEST_TASK_CREATION, groupId };
}

export function createTask(taskId, groupId, ownerId) {
  return { type: types.CREATE_TASK, taskId, groupId, ownerId };
}
