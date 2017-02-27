import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

class TodosHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoNameInput: ''
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({todoNameInput: e.target.value});
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.onChange} value={this.state.todoNameInput} />
        <button onClick={() => this.props.onClick(this.state.todoNameInput)}>Add</button>
      </div>
    );
  }
}

TodosHeader.propTypes = {
  onClick: PropTypes.func,
};

TodosHeader.defaultProps = {
  onClick: _.noop
};

export default TodosHeader;
