import React, {useState} from "react";

function UseState() {
  const [number, setNumber] = useState(0)
  const handleIncreament = () => {
    setNumber(number + 1)
  }
  const handleDecrement = () => {
    setNumber(number - 1)
  }
  return (
      <div>
        <h1>{number}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleIncreament}>Increament</button>
      </div>
  )
}

export default UseState