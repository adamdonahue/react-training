import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TodosHeader from './todosHeader';
import TodosLists from './todosLists';
import _ from 'lodash';

const TodosApp = () => {
  return (
    <div>
      <h1>Todos</h1>
      <TodosLists />
    </div>
  );
}

export default TodosApp;
