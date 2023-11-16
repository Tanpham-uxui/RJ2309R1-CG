import logo from './logo.svg';
import './App.css';
import TeacherList from "./Teacher/TeacherList";
import {Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<TeacherList/>}/>
        <Route path='/teachers' element={<TeacherList/>}/>
      </Routes>
    </div>
  );
}

export default App;
