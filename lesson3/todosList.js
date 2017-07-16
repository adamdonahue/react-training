import React, { Component, PropTypes } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import TodoItem from './todoItem';
import { DropTarget } from 'react-dnd';
import { TODO } from './dragAndDropTypes';
import { moveTodo } from './actions';

const TodosList = ({ todoIds, listName, connectDropTarget }) => {
  const todoItems = _.map(
    todoIds,
    todoId => {
      return (
        <TodoItem listName={listName} key={todoId} todoId={todoId} />
       );
     }
   );
   return connectDropTarget(
     <div>{todoItems}</div>
   );
}

/*
 * We need listName here in order to expose it as part of the list,
 * and not the overall list container.
 */
TodosList.propTypes = {
  todoIds: PropTypes.arrayOf(PropTypes.number),
  listName: PropTypes.string.isRequired
};

TodosList.defaultProps = {
  todoIds: []
};

const TargetableTodosList = DropTarget(
  TODO,
  {
    drop(props, monitor) {
      // Here's where we get the source from the item, and then
      // dispatch appropriately.
      const { todoId, listName: fromListName } = monitor.getItem();
      const { listName: toListName } = props;

      props.moveTodo(todoId, fromListName, toListName);
    }
  },
  connect => {
    return {
      connectDropTarget: connect.dropTarget()
    }
  }
)(TodosList);

const mapDispatchToProps = dispatch => {
  return {
    moveTodo: (todoId, fromListName, toListName) => dispatch(moveTodo(todoId, fromListName, toListName))
  };
}

export default connect(undefined, mapDispatchToProps)(TargetableTodosList);
