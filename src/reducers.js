
/*
state shape

{
  isFetching: fasle,
  todos: ['hello', 'world']
}

*/
const initialState = {todos: [], isFetching: false};

function todoApp(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, action.text]
      });
    case 'REQUEST_TODOS':
      return Object.assign({}, state, {
        isFetching: true
      });
    case 'RECEIVE_TODOS':
      console.log('RECEIVE_TODOS', action);
      return Object.assign({}, state, {
        isFetching: false,
        todos: action.todos
      });

    default:
      return state;
  }
}

export default todoApp;
