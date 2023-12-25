import React from 'react'
import { FiPlusCircle } from "react-icons/fi";
import { useDispatch } from 'react-redux';
import { addLesson } from '../features/CourseSlice/CourseSlice';

  const AddMoreInTheme = ({themeIndex}) => {

  const dispatch = useDispatch()

  const handleAddLesson = () =>{
    let value = {
      title:"",
      leaderboard_points:10,
      order_in_the_theme:1,
      product_type:"",
      media:"",
      lesson_content:""
  }

  dispatch(addLesson([themeIndex,value]))

  }

  return (
    <div className='ms-10 mt-5'>
        <button className='border px-2 rounded-lg bg-white' onClick={handleAddLesson} ><FiPlusCircle className='inline-block mb-1' /> Add Lesson</button>
        <button className='border px-2 rounded-lg ms-3 bg-white'><FiPlusCircle className='inline-block mb-1' /> Add Quiz</button>
        <button className='border px-2 rounded-lg ms-3 bg-white'><FiPlusCircle className='inline-block mb-1'/> Add Flashcard</button>
    </div>
  )
}

export default AddMoreInTheme