import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [text, setText]= useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e)=>{
        e.preventDefault()
        dispatch(addTodo(text))
        setText("")
    }
  return (
    <form onSubmit={addTodoHandler} className='flex p-2 gap-2'>
        <input type="text"
        className='flex-grow rounded-full px-4 py-2 bg-gray-800  border-2 border-gray-500 focus:border-gray-400 focus:outline-none'
        value={text}
        placeholder='Enter Your Todo'
        onChange={(e)=> setText(e.target.value)}
         />
        
        <button type='submit' className='bg-gray-800 rounded-full px-4 py-2 border-2 border-gray-500 hover:border-gray-400'>Add</button>
    </form>
  )
}

export default AddTodo