import logo from './logo.svg';
import './App.css';
import TeacherList from "./Teacher/TeacherList";
import {Route, Routes} from "react-router-dom";
import TeacherDetail from "./Teacher/TeacherDetail";
import {Container, createTheme, ThemeProvider} from "@mui/material";
import {dark} from "@mui/material/styles/createPalette";

function App() {
  const darkTheme = createTheme({
    palette:{
      mode:'dark',
    },
  })
  return (
      <ThemeProvider theme={darkTheme}>
        <Container className={'bg-dark'}>
      <Routes>
        <Route path='/' element={<TeacherList/>}/>
        <Route path='/teachers' element={<TeacherList/>}/>
        <Route path='/teachers/:teacherId' element={<TeacherDetail/>}/>
      </Routes>
        </Container>
      </ThemeProvider>
  );
}

export default App;
