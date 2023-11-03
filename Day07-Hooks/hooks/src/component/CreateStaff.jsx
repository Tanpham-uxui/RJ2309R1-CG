import React, {useState} from "react";

function CreateStaff() {
  const [form, setForm] = useState({
    values: {
      'fullName': '',
      'email': ''
    },
    errors: {
      'fullName': 'Full Name is a require field',
      'email': 'Email is a require field'
    }
    ,
    touch: {
      'fullName': false,
      'email': false
    }
  })
  const handleInputValue = (e) => {
    if (e.target.value) {
      setForm({
        ...form,
        values: {
          ...form.values,
          [e.target.name]: e.target.value
        },
        errors: {
          ...form.errors,
          [e.target.name]: ''
        },
        touch: {
          ...form.touch,
          [e.target.name]: document.activeElement == e.target
        }
      })
    } else {
      setForm({
        ...form,
        values: {
          ...form.values,
          [e.target.name]: e.target.value
        },
        errors: {
          ...form.errors,
          [e.target.name]: `${e.target.value} is a require field`
        },
        touch: {
          ...form.touch,
          [e.target.name]: document.activeElement == e.target
        }
      })
    }

  }
  const handleCreateStaff = (e) => {
    e.preventDefault()
    if (form.values.email && form.values.fullName) {
      console.log(form.values)
    }
  }
  const handleCancel = (e) => {
    setForm({
      ...form,
      values: {
        ...form.values,
        fullName: '',
        email: ''
      },
      errors: {
        'fullName': 'Full Name is a require field',
        'email': 'Email is a require field'
      },
      touch: {
        'fullName': false,
        'email': false
      }
    })
  }
  return (
      <div>
        <h1>Create Staff</h1>
        <form onSubmit={handleCreateStaff}>
          <div className='form-group mb-3'>
            <label>Full Name</label>
            <input type='text' className='form-control' required
                   name='fullName' onInput={handleInputValue}
                   value={form.values.fullName}
            />
            <span>{form.touch.fullName && form.errors?.fullName}</span>
          </div>
          <div className='form-group mb-3'>
            <label>Email</label>
            <input type='email' className='form-control' required
                   name='email' onInput={handleInputValue}
                   value={form.values.email}
            />
            <span>{form.touch.email && form.errors?.email}</span>
          </div>
          <div className='form-group mb-3 d-flex gap-2'>
            <button type='submit' className='btn btn-sm btn-dark'> Create</button>
            <button type='button' className='btn btn-sm btn-warning' onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
  )
}

export default CreateStaff
