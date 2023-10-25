import React, {useState} from "react";

function SelectCar() {
  const [selectCar, setSelectCar] = useState('BMW i10')
  const [selectColor, setSelectColor] = useState('white')
  const handleSubmitInfo = (e) => {
    e.preventDefault()
  }
  const handleSelectCar = (e) => {
    setSelectCar(e.target.value)
  }
  const handleSelectColor = (e) => {
    setSelectColor(e.target.value)
  }
  return (
      <div>
        <h1>Select your car</h1>
        <form className='form-group mb-3 d-flex flex-column gap-2'>
          <div className='d-flex gap-3 row'>
            <label className='col-md-2'>Select a car</label>
            <select className="form-select form-select-sm w-50 col-md-10"
                    aria-label=".form-select-sm example"
                    onChange={handleSelectCar}
            >
              <option defaultValue>Open this select menu</option>
              <option value="Ferrari Spyder">Ferrari Spyder</option>
              <option value="Roll Royce Phantom">Roll Royce Phantom</option>
              <option value="Mercedes Benz G63">Mercedes Benz G63 </option>
            </select>
          </div>
          <div className='d-flex gap-3 row'>
            <label className='col-md-2'>Select a color</label>
            <select className="form-select form-select-sm w-50 col-md-10" aria-label=".form-select-sm example"
                    onChange={handleSelectColor}>
              <option defaultValue>Open this select menu</option>
              <option value="Red">Red</option>
              <option value="Blue">Blue</option>
              <option value="Black">Black</option>
            </select>
          </div>
        </form>
        <h2>Your select car is {selectColor} {selectCar} </h2>
      </div>
  )

}

export default SelectCar;