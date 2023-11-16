import React, {useEffect, useState} from "react";
import {BulletList} from "react-content-loader";
import {Link} from "react-router-dom";
import {
  Button,
  createTheme,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider, Typography
} from "@mui/material";
import {dark} from "@mui/material/styles/createPalette";
import {Details, Info} from "@mui/icons-material";


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
  return (
      <>
        <div>
          <Typography variant='h3' className={'text-white'}>Teacher List</Typography>

          <TableContainer
              component={Paper}
              sx={{backgroundColor: 'background.paper'}}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>#ID</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isLoading ?
                    (<TableRow>
                      <TableCell colSpan={6}>
                        <BulletList width={1200}/>
                      </TableCell>
                    </TableRow>)
                    : teacherList.map((teacher) => (
                        <TableRow key={teacher.id}>
                          <TableCell>{teacher.id}</TableCell>
                          <TableCell>{teacher.name}</TableCell>
                          <TableCell>{teacher.dob}</TableCell>
                          <TableCell>{teacher.email}</TableCell>
                          <TableCell>{teacher.gender ? 'Male' : 'Female'}</TableCell>
                          <TableCell>
                            <Button variant={"outlined"} component={Link} to={`/teachers/${teacher.id}`}>
                              <Info/>
                            </Button>
                          </TableCell>
                        </TableRow>
                    ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </>
  )
}

export default TeacherList