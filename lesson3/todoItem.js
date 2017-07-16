import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { markTodoDone } from './actions';
import { DragSource } from 'react-dnd';
import { TODO } from './dragAndDropTypes';

const TodoItem = ({ todo, onClickDone, connectDragSource }) => {
  return connectDragSource(
    <div>
      <input
        type="checkbox"
        onChange={() => onClickDone()}
        disabled={todo.isDone}
        checked={todo.isDone} /> &nbsp;
      {todo.isDone ? <strike>{todo.name}</strike> : todo.name}
      <br/>
    </div>
  );
}

/*
 * We want to make a TodoItem draggable.  We wrap it as a DragSource
 * in order to accomplish this.  We also need to expose the details
 * of the item needed to later dispatch a change via its target.
 * This is the reason we include listName as part of the TodoItem
 * properties; this way the target (which is a list) will know
 * the list name from which the TodoItem came.  Generally we'd use
 * another HOC for this property, but to keep things simple we just
 * include it as part of the TodoItem proper.
 */
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    isDone: PropTypes.bool.isRequired
  }).isRequired,
  onClickDone: PropTypes.func,

  // This property is included for draggability purposes only,
  // but is not actually used in the body of the component.
  listName: PropTypes.string.isRequired
};

TodoItem.defaultProps = {
  onClickDone: _.noop
};

const DraggableTodoItem = DragSource(
  TODO,
  {
    beginDrag(props) {
      const { todoId, listName } = props;
      return {
        todoId,
        listName
      };
    }
  },
  connect => {
    return {
      connectDragSource: connect.dragSource()
    }
  }
)(TodoItem);

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

export default connect(mapStateToProps, mapDispatchToProps)(DraggableTodoItem);
