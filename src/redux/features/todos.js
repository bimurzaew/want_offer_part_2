const initialState = {
  todo: [],
};

export const todos = (state = initialState, action) => {
  switch (action.type) {
    case "add/todo":
      return {
        ...state,
        todo: [
          ...state.todo,
          {
            text: action.payload,
            completed: false,
            date: new Date().toLocaleString().slice(0, -3),
          },
        ],
      };
    case "delete/todo":
      return {
        ...state,
        todo: state.todo.filter((item, idx) => action.payload !== idx),
      };
    case "make/todo":
      return {
        ...state,
        todo: state.todo.map((item, idx) => {
          if (idx === action.payload) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    case "save/todo":
      return {
        ...state,
        todo: state.todo.map((item, idx) => {
          if (idx === action.payload.index) {
            return {
              ...item,
              text: action.payload.text,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export const addTodo = (text) => {
  return { type: "add/todo", payload: text };
};

export const deleteTodo = (index) => {
  return { type: "delete/todo", payload: index };
};

export const makeNote = (index) => {
  return { type: "make/todo", payload: index };
};

export const saveTodo = (index, text) => {
  return { type: "save/todo", payload: { index, text } };
};
