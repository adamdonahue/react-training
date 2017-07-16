import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import TodoItem from './todoItem';

const TodosList = ({todos, onClickDone}) => {
  const todoIds = _.sortBy(_.keys(todos));
  const todoItems = _.map(
    todoIds,
    todoId => {
      return (
        <TodoItem
          key={todoId}
          todo={todos[todoId]}
          onClickDone={() => onClickDone(todoId)}
        />
      );
    }
  );
  return <div>{todoItems}</div>;
}

TodosList.propTypes = {
  todos: PropTypes.shape({
    id: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isReqiured
    })
  }).isRequired,
  onClickDone: PropTypes.func
};

TodosList.defaultProps = {
  onClickDone: _.noop
};

export default TodosList;
