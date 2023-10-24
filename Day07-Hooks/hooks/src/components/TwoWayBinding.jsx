import React, {useState} from "react";

function TwoWayBinding() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const handleLogin = () => {
    console.log({
      "email": email,
      "password": password
    })
  }
  return (
      <div>
        <h1>Login Form</h1>
        <form>
          <div className='form-group pb-3'>
            <label className='form-label'>
              Email
            </label>
            <input type='email' className='form-control'
                   onInput={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='form-group pb-3'>
            <label> Password</label>
            <input type='password' className='form-control'
                   onInput={(e) => setPassword(e.target.value)}/>
          </div>
          <div className='form-group'>
            <button type='button' className='btn btn-dark' onClick={handleLogin}>
              Password
            </button>
          </div>
        </form>
      </div>
  )
}

export default TwoWayBinding;