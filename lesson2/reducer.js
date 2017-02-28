import { ADD_TODO, MARK_TODO_DONE } from './actions';

const initialState = {
  todos: {}
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return Object.assign({}, state, {
        todos: Object.assign({}, state.todos, {
            [action.todo.id]: action.todo
        })
      });
    case MARK_TODO_DONE:
      const todo = Object.assign({}, state.todos[action.id], { isDone: true });
      return Object.assign({}, state, {
        todos: Object.assign({}, state.todos, { [action.id]: todo })
      });
    default:
      return state;
  }
}
