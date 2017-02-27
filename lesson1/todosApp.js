import React, { Component, PropTypes } from 'react';
import TodosHeader from './todosHeader';
import TodoList from './todoList';
import _ from 'lodash';

class TodosApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this._id = 0;
    this.addTodo = this.addTodo.bind(this);
    this.markTodoDone = this.markTodoDone.bind(this);
  }
  addTodo(text) {
    this.setState((prevState, props) => {
      const todos = [...this.state.todos];
      todos.push({id: this._id++, text: text, isDone: false});
      return {
        todos
      };
    });
  }
  markTodoDone(id) {
    const todos = _.reject(this.state.todos, {id: id});    
    let todo = _.find(this.state.todos, {id: id});
    todo = Object.assign({}, todo, {isDone: true});
    todos.push(todo);
    this.setState({ todos });
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
