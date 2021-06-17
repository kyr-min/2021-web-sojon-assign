import React from 'react';
import ReactDOM from 'react-dom';
import TodoApp from './components/TodoApp';
import "./todo.css"


ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('root')
);
