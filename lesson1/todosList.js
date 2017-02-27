import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import TodoItem from './todoItem';

class TodosList extends Component {
  render() {
    const todoIds = _.sortBy(_.keys(this.props.todos));
    const todoItems = _.map(
      todoIds,
      todoId => {
        return (
          <TodoItem
            key={todoId}
            todo={this.props.todos[todoId]}
            onClickDone={() => this.props.onClickDone(todoId)}
          />
        );
      }
    );
    return (
      <div>{todoItems}</div>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.shape({
    id: PropTypes.shape({
      text: PropTypes.string.isRequired,
      isDone: PropTypes.bool.isReqiured
    })
  }).isRequired,
  onClickDone: PropTypes.func
};

TodosList.defaultProps = {
  onClickDone: _.noop
};

export default TodosList;
