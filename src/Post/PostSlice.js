import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = [
    { id: 1, todo: "goto grosary shop", date: "2023-12-26T15:17:55.811Z", status: true },
    { id: 2, todo: "complet the react project at 11:00 am", date: "2023-12-26T11:11.55.811Z", status: true },
    { id: 3, todo: "send an email to pooja", date: "2023-11-26T15:17:55.811Z", status: true }
]

const postSlice = createSlice({
    name: "post",
    initialState,

    reducers: {
        add: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(todo) {
                return {
                    payload: {
                        id: nanoid(),
                        todo,
                        uidL: nanoid(),
                        status: true,
                        date: new Date().toISOString(),
                    }
                }
            }
        },
        remove(state, action) {
            const postIdToRemove = action.payload;
            return state.filter((post) => post.id !== postIdToRemove);
        },
        updateTodo(state, action) {
            const { id, newStatus } = action.payload;
            const postToUpdate = state.find((post) => post.id === id);
            if (postToUpdate) {
                postToUpdate.id = id ? id : "";
                postToUpdate.status = newStatus;
            }
        },
        EditTodo(state, action) {
            const { id, newTodo } = action.payload;
            const postToUpdate = state.find((post) => post.id === id);
            if (postToUpdate) {
                postToUpdate.id = id ? id : "";
                postToUpdate.todo = newTodo;
            }
        }

    }
});


export const { add, remove, updateTodo, EditTodo } = postSlice.actions;

export default postSlice.reducer;