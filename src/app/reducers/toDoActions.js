import { createSlice } from '@reduxjs/toolkit';
const initialState = {
    todos: [],
}
export const toDoActions = createSlice({
    name: 'actions',
    initialState,
    reducers: {
        create: (state, action) => {
            let newState = [...state.todos];
            newState.push(action.payload);
            state.todos = newState;
        },
        complete: (state, action) => {
            let newState = [...state.todos];
            newState.map((todo, index) => {
                if(todo.id === action.payload) {
                    newState[index].status = 'Done'
                }
            });
            state.todos = newState;
        },
    },
})
  // Action creators are generated for each case reducer function
export const { create, complete } = toDoActions.actions

export default toDoActions.reducer