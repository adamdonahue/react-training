import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import TodosHeader from './todosHeader';
import TodosLists from './todosLists';
import _ from 'lodash';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const TodosApp = () => {
  return (
    <div>
      <h1>Todos</h1>
      <TodosLists />
    </div>
  );
}

/*
 * The wrapping a top-level component with a drag-and-drop context,
 * and an appropriate backend, is what enables React DnD to work.
 *
 * We could have wrapped TodosLists instead, but might as well
 * make the entire application support drag-and-drop.
 */
export default DragDropContext(HTML5Backend)(TodosApp);
