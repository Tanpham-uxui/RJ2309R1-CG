import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import UseEffect from "./UseEffect/UseEffect";

function App() {
  const [toggle, setToggle] = useState(false)
  return (
      <div className="container mt-2">
        <button className='mb-2' onClick={() => setToggle(!toggle)}>Toggle Component</button>
        {toggle && <UseEffect/>}
      </div>
  );
}

export default App;
