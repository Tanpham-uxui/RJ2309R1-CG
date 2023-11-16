import React, {useEffect, useState} from "react";
import {BulletList} from "react-content-loader";
import {LoadingTable} from "./LoadingAnimation";

function TeacherList() {
  const [state, setState] = useState(
      {
          teacherList: [],
          isLoading: false
      }
  )
  const {teacherList, isLoading} = state
  useEffect(() => {
    setState({
      ...state,
      isLoading: true
    })
    fetch('https://6555882484b36e3a431de2ea.mockapi.io/teachers')
        .then((response) => response.json())
        .then((data) => setState(
            {
              ...state,
              teacherList: data,
              isLoading: false
            }))
  }, [])
  console.log(teacherList)

  return (
      <>
        <div>
          <h3>Teacher List</h3>
          <table className='table'>
            <thead>
            <tr>
              <th>#ID</th>
              <th>Full Name</th>
              <th>DOB</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {isLoading ?
                (<tr>
                  <td colSpan={6}>
                    <BulletList width={1200}/>
                  </td>
                </tr>)
                : teacherList.map((teacher) => (
                    <tr key={teacher.id}>
                      <td>{teacher.id}</td>
                      <td>{teacher.name}</td>
                      <td>{teacher.dob}</td>
                      <td>{teacher.email}</td>
                      <td>{teacher.gender ? 'Male' : 'Female'}</td>
                      <td></td>
                    </tr>
                ))
            }
            </tbody>
          </table>
        </div>
      </>
  )
}

export default TeacherList