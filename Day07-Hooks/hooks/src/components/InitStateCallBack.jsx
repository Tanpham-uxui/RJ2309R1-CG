import React, {useState} from "react";

function InitStateCallBack() {

  const [amount, setAmount] = useState(0)
  const [totalAmount, setTotalAmount] = useState(() => {
        const bills = [200, 250, 540, 230]
        const total = bills.reduce(function (preValue, curValue) {
          return preValue + curValue
        })
        return total
  })
  const handleInputAmount = (e) => {
    setAmount(Number(e.target.value))

  }
  const handelPayment = () => {
    setTotalAmount(totalAmount + amount)
  }
  return (
      <div className='container mt-4'>
        <input type='number' onInput={handleInputAmount}/>
        <button onClick={handelPayment}>Payment</button>
        <br/>
        <h1>Total Amount: {totalAmount}</h1>
      </div>
  )
}

export default InitStateCallBack;
