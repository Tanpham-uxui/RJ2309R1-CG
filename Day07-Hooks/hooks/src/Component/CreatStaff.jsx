import React from "react";
import {useForm} from "react-hook-form";

function CreatStaff(){
  const {register, handleSubmit, control} = useForm()
  const handleCreteStaff = (data, e) => {
    e.preventDefault()
    console.log(data)
  }
  return (
      <div>
        <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(handleCreteStaff)}>
          <div className='form-group'>
            <label className='form-label'>Full Name</label>
            <input type='text' className='form-control'
                   {...register('fullName')}
            />
          </div>
          <div className='form-group'>
            <label className='form-label'>Email</label>
            <input type='email' className='form-control' {...register('email')}/>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-sm btn-dark'>Create </button>
          </div>
        </form>
      </div>
  )
}
export default CreatStaff