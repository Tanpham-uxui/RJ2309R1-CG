import React, {useState} from "react";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'

const schema = yup.object({
  fullName: yup.string().required('Bạn cần phải cung cấp họ và tên'),
  age: yup.number().required().typeError('Bạn cần phải cung cấp tuổi').min(18),
  email: yup.string()
      .email()
      .required('Email là bắt buộc'),
  gender: yup.string()
      .required(),
  city: yup.string().required(),
  password: yup.string().required(),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'confirm password does not match')
})
const cityList = [
  {
    id: 1,
    name: 'TT Hue'
  }, {
    id: 2,
    name: 'Da Nang City'
  }, {
    id: 3,
    name: 'Ho Chi Minh City'
  }, {
    id: 4,
    name: 'Ha Noi City'
  },
]

function CreatStaff() {
  const {register, handleSubmit, formState: {errors}, reset, control, watch} = useForm({
    resolver: yupResolver(schema),
    mode:'onBlur',
    criteriaMode: "all"
  })
  const [state, setState] = useState({
    showPassword: false,
    showConfirmPassword: false
  })
  const handleCreteStaff = (data, e) => {
    e.preventDefault()
    console.log(data)
  }
  console.log(state.showPassword)
  return (
      <div>
        <form className='d-flex flex-column gap-2' onSubmit={handleSubmit(handleCreteStaff)} noValidate>
          <div className='form-group has-validation'>
            <label className='form-label'>Full Name</label>
            <input type='text' className={`form-control ${(errors?.fullName?.message) ? 'is-invalid' : ''} `}
                   {...register('fullName')}
            />
            <span className='text-danger'>{errors?.fullName?.message}</span>
          </div>
          <div className='form-group mb-3'>
            <label className='form-label'>Age</label>
            <input type='number' className={`form-control ${(errors?.age?.message) ? 'is-invalid' : ''} `}
                   {...register('age', {required: true, maxLength: 20})}

            />
            <span className='text-danger'>{errors?.age?.message}</span>
          </div>
          <div className='form-group mb-3'>
            <label className='form-label'>Email</label>
            <input type='email' className={`form-control ${(errors?.email?.message) ? 'is-invalid' : ''} `}
                   {...register('email')}/>
            <span className='text-danger'>{errors?.email?.message}</span>
          </div>
          <div className='form-group mb-3'>
            <label className='form-label'>Password</label>
            <div className='input-group'>
              <input type={state.showPassword ? "text" :"password"} className={`form-control ${(errors?.password?.message) ? 'is-invalid' : ''} `}
                     {...register('password')}/>
              <span role='button' className='input-group-text'
                    onClick={()=> {
                      setState({
                        ...state,
                        showPassword: !state.showPassword
                      })
                      console.log('Show password:', state.showPassword);
                    }}
              >
                <i className={`fa-solid ${state.showPassword ? `fa-eye-slash` :`fa-eye`}`}></i> </span>
            </div>
            <span className='text-danger'>{errors?.password?.message}</span>
          </div>
          <div className='form-group mb-3'>
            <label className='form-label'>Confirm Password</label>
            <div className='input-group'>
              <input type={state.showConfirmPassword ? "text" :"password"} className={`form-control ${(errors?.password?.message) ? 'is-invalid' : ''} `}
                     {...register('confirmPassword')}/>
              <span role='button' className='input-group-text'
                    onClick={()=> {
                      setState({
                        ...state,
                        showConfirmPassword: !state.showConfirmPassword
                      })
                    }}
              >
                <i className={`fa-solid ${state.showConfirmPassword ? `fa-eye-slash` :`fa-eye`}`}></i> </span>
            </div>
            <span className='text-danger'>{errors?.confirmPassword?.message}</span>
          </div>
          <div className='form-group mb-3'>
            <label className='form-label'>City</label>
            <select className={`form-select ${(errors?.city?.message) ? 'is-invalid' : ''}`}  {...register('city')}>
              <option value=''>Please choose a city</option>
              {cityList.map((city) => (
                  <option value={city.name} key={city.id}>{city.name}</option>
              ))}
            </select>
            <span className='text-danger'>{errors?.city?.message}</span>
          </div>
          <div className='d-flex flex-column has-validation'>
            <label className='form-label'>Gender</label>
            <div className='d-flex gap-2'>
              <div className="form-check">
                <input className={`form-check-input ${(errors?.gender?.message) ? 'is-invalid' : ''} `}
                       type="radio" value="male"
                       {...register('gender')}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input className={`form-check-input ${(errors?.gender?.message) ? 'is-invalid' : ''} `}
                       type="radio" value="female"
                       {...register('gender')}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            <span className='text-danger'>{errors?.gender?.message}</span>
          </div>
          <div className='form-group d-flex gap-2'>
            <button type='submit' className='btn btn-sm btn-dark'>Create</button>
            <button type='button' className='btn btn-sm btn-warning' onClick={() => reset()}>Cancel</button>
          </div>
        </form>
      </div>
  )
}

export default CreatStaff