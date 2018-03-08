/*
 * Actions describe activities that can be performed in the store.
 * Note that an action is just a description of activity, not the
 * actual activity itself.  You don't _perform_ the action yourself;
 * instead you generate its desciption and dispatch it to a reducer
 * that is responsible for doing the work.
 */

export const ADD_TODO_LIST = 'ADD_TODO_LIST';
export const DELETE_TODO_LIST = 'REMOVE_TODO_LIST';
export const ADD_TODO = 'ADD_TODO';
export const MOVE_TODO = 'MOVE_TODO';
export const MARK_TODO_DONE = 'MARK_TODO_DONE';

/*
 * Action creators are functions that return actions. Each action
 * must have a type (think of a type as a name), as well as a
 * payload.  The payload consists of whatever additional details
 * are needed to fully perform the action.
 */

/**
 *
 * @param listName
 * @returns {{type: string, payload: {listName: *}}}
 */
export function addTodoList(listName) {
  return {
    type: ADD_TODO_LIST,
    payload: {
      listName
    }
  };
}

/**
 *
 * @param listName
 * @returns {{type: string, payload: {listName: *}}}
 */
export function deleteTodoList(listName) {
  return {
    type: DELETE_TODO_LIST,
    payload: {
      listName
    }
  };
}

let todoId = 0;

/**
 * Add a new to-do item to the specified list.
 *
 * @param listName
 * @param name
 * @returns {{type: string, todo: {id: number, name: *, listName: *, isDone: boolean}}}
 */
export function addTodo(listName, name) {
  return {
    type: ADD_TODO,
    payload: {
      id: todoId++,
      name,
      listName
    }
  };
}

/**
 * Move a to-do item to a new list.
 *
 * @param id
 * @param fromListName
 * @param toListName
 * @returns {{type: string, id: *, fromListName: *, toListName: *}}
 */
export function moveTodo(id, fromListName, toListName) {
  return {
    type: MOVE_TODO,
    payload: {
      id,
      fromListName,
      toListName
    }
  };
}

/**
 * Mark a to-do item as done.
 *
 * @param id
 * @returns {{type: string, id: *}}
 */
export function markTodoDone(id) {
  return {
    type: MARK_TODO_DONE,
    payload: {
      id
    }
  };
}
