import React from 'react';
import { render } from 'react-dom';
import TodosApp from './todosApp';

render(
  <TodosApp applicationName="To Dos" />,
  document.getElementById('react-app')
);
