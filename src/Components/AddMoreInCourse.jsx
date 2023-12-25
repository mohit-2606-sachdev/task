import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { addTheme } from '../features/CourseSlice/CourseSlice';

const AddMoreInCourse = () => {

  const dispatch = useDispatch()

  const handleAddTheme = () =>{
    const value = {
      title:"",
      leaderboard_points:10,
      order_in_the_course:1,
      product_type:"",
      image:"",
      lessons:[]
    }

    dispatch(addTheme(value))
  }

  return (
    <div className='mt-5'>
        <button className='border px-2 rounded-lg bg-white'  onClick={handleAddTheme} ><FiPlusCircle className='inline-block mb-1'/> New Theme</button>
        <button className='border px-2 rounded-lg ms-3 bg-white'><FiPlusCircle className='inline-block mb-1'/> New Mock Exam</button>
    </div>
  )
}

export default AddMoreInCourse