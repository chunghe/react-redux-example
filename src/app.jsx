
import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { addTodo } from './actions';

class AddTodo extends React.Component {

  handleClick(e) {
    e.preventDefault();
    const node = this.refs.input;
    this.props.onAddClick(node.value.trim());
    node.value = '';
  }

  render() {
    return (
      <div>
        <input type='text' ref='input' />
        <button onClick={ this.handleClick.bind(this) }>Add</button>
      </div>
    )
  }
}

AddTodo.protoTypes = {
  onAddClick: PropTypes.func.isRequired
}


class TodoList extends React.Component {
  renderTodo(todo, index) {
    return <li key={index}>{todo}</li>;
  }

  render() {
    return <ul>{this.props.todos.map(this.renderTodo)}</ul>
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired
};

class App extends React.Component {
  render() {
    const {todos, dispatch} = this.props;
    return (
      <div>    
        <AddTodo onAddClick={ text => dispatch(addTodo(text))} />
        <TodoList todos={todos} />
      </div>
    )
  }
}

App.protoTypes = {
  todos: PropTypes.arrayOf(PropTypes.string).isRequired
}

function select (state) {
  return {
    todos: state.todos
  }
}

// https://github.com/rackt/react-redux/blob/master/src/components/createConnect.js#L41
// connect will `store.getState()`, pass the state to `select` function
// `select` function pass part of the state as the props to the App component
export default connect(select)(App);

