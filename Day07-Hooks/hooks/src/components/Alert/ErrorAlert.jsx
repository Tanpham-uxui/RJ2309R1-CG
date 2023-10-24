import React, {useState} from "react";

function ErrorAlert(props) {
  return (
      <>
        {
            props.showAlert && (
                <div className="alert alert-danger d-flex justify-content-between align-items-center" role="alert">
                  Login success!
                  <span role='button' className='fw-bold fs-5' onClick={()=>props.setShowAlert(false)}>&times;</span>
                </div>
            )
        }
      </>

  )
}

export default ErrorAlert
