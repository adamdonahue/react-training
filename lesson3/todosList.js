import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import TodoItem from './todoItem';

const TodosList = ({ todoIds }) => {
  const todoItems = _.map(
    todoIds,
    todoId => {
      return (
        <TodoItem key={todoId} todoId={todoId} />
       );
     }
   );
   return <div>{todoItems}</div>;
}

TodosList.propTypes = {
  todoIds: PropTypes.arrayOf(PropTypes.number).isRequired
};

TodosList.defaultProps = {
  todoIds: []
};

export default TodosList;
