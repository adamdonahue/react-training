import React, { Component, PropTypes } from 'react';
import TodosHeader from './todosHeader';
import TodosList from './todosList';
import _ from 'lodash';

class TodosApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: {}
    };
    this._id = 0;
    this.addTodo = this.addTodo.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
  }
  addTodo(text) {
    this.setState((prevState, props) => {
      return {
        todos: Object.assign({}, prevState.todos, {
          [this._id++]: {
            text: text,
            isDone: false
          }
        })
      };
    });
  }
  markTodoDone(id) {
    this.setState((prevState, props) => {
      return {
        todos: Object.assign({}, prevState.todos, {
          [id]: {
            text: prevState.todos[id].text,
            isDone: true
          }
        })
      };
    });
  }
  render() {
    return (
      <div>
        <h2>{this.props.applicationName}</h2>
        <TodosHeader onClick={this.addTodo} />
        <p/>
        <TodoList onClickDone={this.markTodoDone} todos={this.state.todos} />
      </div>
    )
  }
}

TodosApp.propTypes = {
  applicationName: PropTypes.string.isRequired  
};

export default TodosApp;
