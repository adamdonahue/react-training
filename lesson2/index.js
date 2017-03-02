import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import TodosApp from './todosApp';
import reducer from './reducer';

/*
 * A store associates a given reducer with a dispatch function
 * that can be used to send actions to the reducer and maintain
 * the current state.
 */
const store = createStore(reducer);
  

/*
 * Provider is a React-specific component that associates with
 * its subcomponents a dispatch property that these subcomponent
 * can then use to send actions to the store.
 */
render(
  <Provider store={store}>
   <TodosApp />
  </Provider>,
  document.getElementById('react-app')
);
