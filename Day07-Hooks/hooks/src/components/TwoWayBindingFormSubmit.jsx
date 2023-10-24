import React, {useState} from "react";
import SuccessAlert from "./Alert/SuccessAlert";
import ErrorAlert from "./Alert/ErrorAlert";

function TwoWayBindingFormSubmit() {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();
  // const [isSuccess, setIsSuccess] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [state, setState] = useState({
        email: '',
        password:'',
        isSuccess:false,
      }
)

  const {email, password, isSuccess} = state
  const handleInputValue = (e)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  const handleSubmitLogin = (e) => {
    e.preventDefault()
    if (email === 'tanpham2605@gmail.com' && password === '12345678') {
      setState({
       ...state,
       isSuccess: true
      })
    } else {
      setState({
        ...state,
        isSuccess: false
      })
    }
    setShowAlert(true)
    console.log({
      "email": email,
      "password": password
    })
  }
  const handelGetUserAcount = () => {
    setState({
      ...state,
      email: 'tanpham2605@gmail.com',
      password: '12345678'
    })
  }
  const handleCloseAlert = () => {
    setShowAlert(false)
  }
  return (
      <div>
        <h1>Login Form</h1>
        {
            isSuccess && (
                <SuccessAlert showAlert={showAlert} setShowAlert={setShowAlert}/>
            ) ||
            !isSuccess && (
                <ErrorAlert showAlert={showAlert} setShowAlert={setShowAlert}/>
            )
        }
        <form onSubmit={handleSubmitLogin}>
          <div className='form-group pb-3'>
            <label className='form-label'>
              Email
            </label>
            <input type='email' className='form-control' required value={email} name='email'
                   onInput={handleInputValue}
            />
          </div>
          <div className='form-group pb-3'>
            <label> Password</label>
            <input type='password' className='form-control' required value={password} name='password'
                   onInput={handleInputValue}/>
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-dark me-3'>
              Login
            </button>
            <button type="button" className='btn btn-warning '
                    onClick={handelGetUserAcount}
            > Get Account
            </button>
          </div>
        </form>
      </div>
  )
}

export default TwoWayBindingFormSubmit;