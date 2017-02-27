import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import TodoItem from './todoItem';

class TodoList extends Component {
  render() {
    const todos = _.sortBy(this.props.todos, ['id']);
    const todoItems = _.map(
      _.sortBy(this.props.todos, ['id']),
      todo => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onClickDone={() => this.props.onClickDone(todo.id)}
          />
        );
      }
    );
    return (
      <div>{todoItems}</div>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClickDone: PropTypes.func
};

TodoList.defaultProps = {
  onClickDone: _.noop
};

export default TodoList;
