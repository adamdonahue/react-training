import _ from 'lodash';

/*
 * A reducer is a pure function that accepts a given state
 * and an action and returns a (possibly new) state reflecting
 * having applied that action.
 * 
 * A key here is that a reducer must be pure and side effect-free.
 * You should never mutate incoming state directly; rather, a new
 * state object should be created reflecting any changes resulting
 * from performing the action.
 */
import {
  ADD_TODO_LIST,
  DELETE_TODO_LIST,
  ADD_TODO,
  MOVE_TODO,
  MARK_TODO_DONE
} from './actions';

/*
 * There is always an initial state to which further reductions
 * are applied.
 */
// Kept in a normalized structure.
const initialState = {
  todoLists: {},
  todos: {}
};

/*
 * A common pattern in a reducer is to use a switch statement
 * to switch on the action type and to then return the new
 * state based on creating a new state object that reflects
 * having applied that action.
 *
 * By default (assuming no action is to be applied or is 
 * recognized by the reducer), that reducer should return the
 * same state it was originally passed.
 */
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_TODO_LIST: {
      return Object.assign({}, state, {
        todoLists: Object.assign({}, state.todoLists, {
          [payload.listName]: []
        })
      });
    }

    case DELETE_TODO_LIST: {
      const todoIds = state.todoLists[payload.listName];
      return Object.assign({}, state, {
        todoLists: _.omit(state.todoLists, [payload.listName]),
        todos: _.omit(state.todos, todoIds)
      });
    }

    case ADD_TODO: {
      return Object.assign({}, state, {
        todoLists: Object.assign({}, state.todoLists, {
          [payload.listName]: [...state.todoLists[payload.listName], payload.id]
        }),
        todos: Object.assign({}, state.todos, {
          [payload.id]: {
            id: payload.id,
            name: payload.name,
            isDone: false
          }
        })
      });
    }

    case MARK_TODO_DONE:
      return Object.assign({}, state, {
        todos: Object.assign({}, state.todos, {
          [payload.id]: Object.assign({}, state.todos[payload.id], {
            isDone: true
          })
        })
      });

    case MOVE_TODO:
      const { id, fromListName, toListName } = payload;
      return Object.assign({}, state, {
        todoLists: Object.assign({}, state.todoLists, {
          [fromListName]: _.filter(
            state.todoLists[fromListName],
            todoId => todoId !== id
          ),
          [toListName]: [...state.todoLists[toListName], id]
        })
      });
    default:
      return state;
  }
}
