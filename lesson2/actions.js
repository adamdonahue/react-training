export const ADD_TODO = 'ADD_TODO';
export const MARK_TODO_DONE = 'MARK_TODO_DONE'

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
