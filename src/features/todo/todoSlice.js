import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
        checked: false,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => {
        return todo.id !== action.payload;
      });
    },
    updateTodo: (state, action) => {
      
      state.todos = state.todos.map((todo) => {
        return todo.id === action.payload.id ? { ...todo, ...action.payload } : todo;
      });
    },
  },
});

export default todoSlice.reducer;

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;
