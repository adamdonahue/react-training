import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { deleteTodoList, addTodo } from './actions';
import TodosList from './todosList';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoName: ''
    };

    this.changeTodoName = this.changeTodoName.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  changeTodoName(e) {
    this.setState({
      todoName: e.target.value
    });
  }

  addTodo() {
    this.props.onAddTodo(this.state.todoName);
  }

  render() {
    return (
      <div>
        <h3>{this.props.listName}</h3>
        <button onClick={this.props.onClickDeleteList}>Delete List</button>
        <input value={this.state.todoName} onChange={this.changeTodoName} />
        <button onClick={this.addTodo}>Add Todo</button>

        <TodosList listName={this.props.listName} todoIds={this.props.todoIds} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    todoIds: state.todoLists[props.listName]
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClickDeleteList: () => dispatch(deleteTodoList(props.listName)),
    onAddTodo: todoName => dispatch(addTodo(props.listName, todoName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);