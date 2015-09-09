
const initialState = {todos: []};

function todoApp(state = initialState, action) {
  switch(action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [...state.todos, action.text]
      });
    default:
      return state;
  }
}

export default todoApp;
