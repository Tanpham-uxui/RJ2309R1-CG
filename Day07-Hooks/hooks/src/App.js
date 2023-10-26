import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";
import UseEffect from "./UseEffect/component/UseEffect";
import UseEffect2 from "./UseEffect/component/UseEffect2";
import UseEffectDOMEvent from "./UseEffect/component/UseEffectDOMEvent";
import UseEffectWithDeps from "./UseEffect/component/UseEffectWithDeps";

function App() {
  const [toggle, setToggle] = useState(false)
  return (
      <div className="container mt-2">
        <button className='mb-2 btn btn-dark fw-bolder' onClick={() => setToggle(!toggle)}>Toggle Component</button>
        {/*{toggle && <UseEffect2/>}*/}
        {/*{toggle && <UseEffectDOMEvent/>}*/}
        {toggle && <UseEffectWithDeps/>}
      </div>
  );
}

export default App;
