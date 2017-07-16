import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { addTodoList } from './actions';
import TodoList from './todoList';

class TodosLists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listName: ''
    };
    this.changeListName = this.changeListName.bind(this);
    this.addTodoList = this.addTodoList.bind(this);
  }

  changeListName(e) {
    this.setState({
      listName: e.target.value
    });
  }

  addTodoList() {
    this.props.onAddTodoList(this.state.listName);
    this.setState({
      listName: ''
    });
  }

  render() {
    const todoLists = this.props.listNames.map(listName => {
      return <TodoList key={listName} listName={listName} />;
    })
    return (
      <div>
        <input onChange={this.changeListName} value={this.state.listName}/>
        <button onClick={this.addTodoList}>Add List</button>

        {todoLists}
      </div>
    );
  }
}

TodosLists.propTypes = {
  listNames: PropTypes.arrayOf(PropTypes.string),
  onAddTodoList: PropTypes.func
};

TodosLists.defaultProps = {
  listNames: [],
  onAddTodoList: _.noop
};

const mapStateToProps = state => {
  return {
    listNames: _.keys(state.todoLists)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddTodoList: listName => dispatch(addTodoList(listName))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosLists);
