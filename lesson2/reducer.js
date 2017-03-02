/*
 * A reducer is a pure function that accepts a given state
 * and an action and returns a (possibly new) state reflecting
 * having applied that action.
 * 
 * A key here is that a reducer must be pure and side effect-free.
 * You should never mutate incoming state directly; rather, a new
 * state object should be created reflecting any changes resulting
 * from performing the action.
 *
 */
import { ADD_TODO, MARK_TODO_DONE } from './actions';


/*
 * There is always an initial state to which further reductions
 * are applied.
 */
const initialState = {
  todos: {}
};


/*
 * A common pattern in a reducer is to use a switch statement
 * to switch on the action type and to then return the new
 * state based on having applied that action.
 *
 * By default (assuming no action is to be applied or is 
 * recognized by the reducer, that reducer should return the
 * same state it was originally passed.
 */
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
