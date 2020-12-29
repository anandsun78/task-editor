/* eslint-disable import/prefer-default-export */
import * as types from "./actionTypes";

export function requestTaskCreation(groupId) {
  return { type: types.REQUEST_TASK_CREATION, groupId };
}

export function createTask(taskId, groupId, ownerId) {
  return { type: types.CREATE_TASK, taskId, groupId, ownerId };
}

export function setTaskCompletion(id, isComplete) {
  return { type: types.SET_TASK_COMPLETE, taskId: id, isComplete };
}

export function setTaskName(id, name) {
  return { type: types.SET_TASK_NAME, taskId: id, name };
}

export function setTaskGroup(id, groupId) {
  return { type: types.SET_TASK_GROUP, taskId: id, groupId };
}
