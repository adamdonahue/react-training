import React, { PropTypes } from 'react';
import _ from 'lodash';

const TodoItem = ({ todo, onClickDone }) => {
  return (
    <span>
      <input
        type="checkbox"
        onChange={() => onClickDone()}
        disabled={todo.isDone}
        checked={todo.isDone}
      />{' '}
      &nbsp;
      {todo.isDone ? <strike>{todo.name}</strike> : todo.name}
      <br />
    </span>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
  }).isRequired,
  onClickDone: PropTypes.func
};

TodoItem.defaultProps = {
  onClickDone: _.noop
};

export default TodoItem;
