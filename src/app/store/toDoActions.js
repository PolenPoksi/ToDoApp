import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [],
};
const compareFn = (a, b) => {
  if (a.sortKey > b.sortKey) {
    return -1;
  }
  if (a.sortKey < b.sortKey) {
    return 1;
  }
  return 0;
};
export const toDoActions = createSlice({
  name: "actions",
  initialState,
  reducers: {
    create: (state, action) => {
      action.payload.id = uuidv4();
      let sortKey;
      switch (action.payload.priority) {
        case "Urgent":
          sortKey = 4;
          break;
        case "High":
          sortKey = 3;
          break;
        case "Medium":
          sortKey = 2;
          break;
        case "Low":
          sortKey = 1;
          break;
        default:
          sortKey = 0;
          break;
      }
      action.payload.sortKey = sortKey;
      action.payload.completed = false;
      state.todos.unshift(action.payload);
      state.todos.sort(compareFn);
    },
    complete: (state, action) => {
      for (let i = 0; i < state.todos.length; i++) {
        if (state.todos[i].id === action.payload) {
          state.todos[i].completed = true;
        }
      }
    },
  },
});
// Action creators are generated for each case reducer function
export const { create, complete, getTodos } = toDoActions.actions;

export default toDoActions.reducer;
