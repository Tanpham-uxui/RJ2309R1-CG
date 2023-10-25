import React, {useState} from "react";

function TodoList() {
  const [todoList, setTodoList] = useState([
    'Learn Js', 'Learn React', 'Do Homework'
  ])
  const [job, setJob] = useState()
  const handleAddTodo = (e) =>{

  }
  return (
      <div className='d-flex flex-column align-items-centre mt-5'>
        <h1 className='fw-bold text-center'>Todo List</h1>
        <div className='mt-3 d-flex gap-3 mb-4'>
          <input className='form-control' placeholder='input your work here'
                 onInput={() => handleAddTodo}/>
          <button className='btn btn-dark'>Add</button>
        </div>
        <div className='d-flex flex-column'>
          <h3 className='text-bg-dark p-1'>Job to do</h3>
          <ul className='list-group'>
            {todoList.map((job, index) => (
                <li key={index} className="list-group-item">{job}</li>
            ))}
          </ul>

        </div>
      </div>
  )
}

export default TodoList