import { configureStore } from "@reduxjs/toolkit";

import postsReducer, { posts } from './features/slice';
import  register  from "./features/registerslice";
import login from "./features/loginslice";
export const store = configureStore({
    reducer:{postsReducer:postsReducer,register:register,login:login},
    middleware: gerDefaultMiddleware =>
    gerDefaultMiddleware({
        serializableCheck: false,
    }),
});