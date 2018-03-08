import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TodosHeader from './todosHeader';
import TodosList from './todosList';
import _ from 'lodash';
import { addTodo, markTodoDone } from './actions';

const TodosApp = ({ applicationName, todos, addTodo, markTodoDone }) => {
  return (
    <div>
      <h2>{applicationName}</h2>
      <TodosHeader onClick={addTodo} />
      <p />
      <TodosList onClickDone={markTodoDone} todos={todos} />
    </div>
  );
};

const mapStateToProps = state => {
  const { todos } = state;
  return {
    applicationName: 'To Do List',
    todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodo: name => dispatch(addTodo(name)),
    markTodoDone: id => dispatch(markTodoDone(id))
  };
};

/*
 * The connect function is responsible for associating
 * particular state with properties of a component.  In this
 * way we decouple a component from global state, making it
 * easier to develop pure components that know only the properties
 * they need without having to worry about business logic.
 */
export default connect(mapStateToProps, mapDispatchToProps)(TodosApp);
