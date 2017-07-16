import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { markTodoDone } from './actions';

const TodoItem = ({todo, onClickDone}) => {
  console.log(todo);
  return (
    <span>
      <input
        type="checkbox"
        onChange={() => onClickDone()}
        disabled={todo.isDone}
        checked={todo.isDone} /> &nbsp;
      {todo.isDone ? <strike>{todo.name}</strike> : todo.name}
      <br/>
    </span>
  );
}

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

const mapStateToProps = (state, props) => {
  return {
    todo: state.todos[props.todoId]
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClickDone: () => dispatch(markTodoDone(props.todoId))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
