import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    course: {
        name:"",
        duration:"",
        isActive:false,
        leaderboard_points:10,
        category:"",
         level:"",
         product_type:"",
         language:"",
         certificate:"",
         description:"",
         info_at_end:"",
         themes:[{
           title:"",
           leaderboard_points:10,
           order_in_the_course:1,
           product_type:"",
           image:"",
           lessons:[{
               title:"",
               leaderboard_points:10,
               order_in_the_theme:1,
               product_type:"",
               media:"",
               lesson_content:""
           }]
         }]
       }
}

const CourseSlice = createSlice({
    name:"course",
    initialState:initialState,
    reducers:{
        addTheme:(state,action)=>{
           state.course.themes.push(action.payload)
        },

        deleteTheme:(state,action)=>{
            state.course.themes = state.course.themes.filter((ele, index) => index !== action.payload);
        },

        addLesson:(state,action)=>{
            state.course.themes[action.payload[0]].lessons.push(action.payload[1])
         },

        deleteLesson:(state,action)=>{
            state.course.themes[action.payload[0]].lessons = state.course.themes[action.payload[0]].lessons.filter((ele, index) => index !== action.payload[1]);
        }
    }
})

export const { addTheme, deleteTheme, deleteLesson, addLesson } = CourseSlice.actions;

export default CourseSlice.reducer;