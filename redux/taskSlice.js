import { createSlice , nanoid } from "@reduxjs/toolkit";

const taskSlice = createSlice({
    name: 'tasks',
    initialState: [],

    reducers: {
        addTask: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (text) => ({
                payload: {
                    id: nanoid(),
                    text,
                    completed: false
                }
            })
        },

        toggleTask: (state, action) => {
            const task = state.find(task => task.id === action.payload);
            if(task) {
                task.completed = !task.completed;
            }
        },

        deleteTask: (state, action) => {
            return state.filter(task => task.id !== action.payload);
        }
    }
});

export const { addTask, toggleTask, deleteTask } = taskSlice.actions;

export default taskSlice.reducer;
