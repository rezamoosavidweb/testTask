/*
 *
 * Home actions
 *
 */

import * as Types from "./constants";

export function addTask(task) {
  return {
    type: Types.ADD_TASKS,
    payload:task
  };
}

export function removeTask(id) {
  return {
    type: Types.REMOVE_TASKS,
    payload:id
  };
}

export function editTask(data) {
  return {
    type: Types.EDIT_TASKS,
    payload:data
  };
}

export function approveTask(data) {
  return {
    type: Types.APPROVE_TASKS,
    payload:data
  };
}

