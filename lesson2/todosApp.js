import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TodosHeader from './todosHeader';
import TodosList from './todosList';
import _ from 'lodash';
import { addTodo, markTodoDone } from './actions';

const TodosApp = ({applicationName, todos, addTodo, markTodoDone}) => {
  return (
    <div>
      <h2>{applicationName}</h2>
      <TodosHeader onClick={addTodo} />
      <p/>
      <TodosList onClickDone={markTodoDone} todos={todos} />
    </div>
  );
}

const mapStateToProps = state => {
  const { todos } = state;
  return {
    applicationName: 'To Do List',
    todos 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: (name) => dispatch(addTodo(name)),
    markTodoDone: (id) => dispatch(markTodoDone(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosApp);
