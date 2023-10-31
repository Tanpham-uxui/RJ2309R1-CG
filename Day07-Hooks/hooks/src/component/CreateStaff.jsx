import React from "react";

function CreateStaff(){
  return(
      <div>
        <h1>Create Staff</h1>
        <form>
            <div className='form-group'>
              <label>Full Name</label>
              <input type='text' className='form-control'/>
            </div>
        </form>
      </div>
  )
}
export default CreateStaff
