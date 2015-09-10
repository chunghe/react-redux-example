
import fetch from 'isomorphic-fetch';

/* action creators */
export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    text
  }
}

// notify start fetching, to display loading message
function requestTodos() {
  return {
    type: 'REQUEST_TODOS'
  }
}

function receiveTodos(json) {
  return {
    type: 'RECEIVE_TODOS',
    todos: json
  }
}

// will return a function (rather than a plain javascript object)
export function fetchTodos() {
  return dispatch => {
    dispatch(requestTodos());
    return fetch('https://rawgit.com/chunghe/3d02f746cb94e6df2ba1/raw/99760c5bc5d6682a24d7d0b821bb2c17dc18f6c6/todos.json')
      .then(response => response.json())
      .then(json => dispatch(receiveTodos(json)));
  }
}
