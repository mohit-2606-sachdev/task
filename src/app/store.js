import { configureStore } from "@reduxjs/toolkit";
import CourseSlice from "../features/CourseSlice/CourseSlice";

export const store = configureStore({
    reducer:{
        courseReducer:CourseSlice
    }
})