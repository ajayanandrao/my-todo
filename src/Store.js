import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./Post/PostSlice";

export const store = configureStore({
    reducer: {
        posts: postReducer,
    }
});
