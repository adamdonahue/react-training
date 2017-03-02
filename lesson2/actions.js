/*
 * Actions describe activities that can be performed in the store.
 * Note that an action is just a description of activity, not the
 * actual activity itself.  You don't _perform_ the action yourself;
 * instead you generate its desciption and dispatch it to a reducer
 * that is responsible for doing the work.
 */
export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO_DONE = 'MARK_TODO_DONE'


/*
 * Action creators are functions that return actions. Each action
 * must have a type (think of a type as a name), as well as a
 * payload.  The payload consists of whatever additional details
 * are needed to fully perform the action.
 */
let todoId = 0;
export function addTodo(name) {
  return {
    type: ADD_TODO,
    todo: {
      id: todoId++,
      name,
      isDone: false
    }
  };
}

export function markTodoDone(id) {
  return {
    type: MARK_TODO_DONE,
    id
  };
}
