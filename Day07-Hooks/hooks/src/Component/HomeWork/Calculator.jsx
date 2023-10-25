import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNumber: '',
      secondNumber: '',
      total: ''
    }
  }

  handleChangFirstNumber = (e) => {
    this.setState({
      ...this.state,
      firstNumber: Number(e.target.value)
    })
    console.log(this.state.firstNumber)
  }
  handleChangSecondNumber = (e) => {
    this.setState({
      ...this.state,
      secondNumber: Number(e.target.value)
    })
    console.log(this.state.secondNumber)
  }
  handleCalculator = (cal) => {
    switch (cal) {
      case 'plus':
        this.setState({
          ...this.state,
          total: this.state.firstNumber + this.state.secondNumber
        })
        break
      case 'minus':
        this.setState({
          ...this.state,
          total: this.state.firstNumber - this.state.secondNumber
        })
        break
      case 'multi':
        this.setState({
          ...this.state,
          total: this.state.firstNumber * this.state.secondNumber
        })
        break
      case 'divide':
        this.setState({
          ...this.state,
          total: this.state.firstNumber / this.state.secondNumber
        })
        break
      default:
        console.log("we can't calculate this")
    }
  }
  handleResetCalculator = () => {
    this.setState({
      ...this.state,
      firstNumber:'',
      secondNumber: '',
      total: ''
    })
    console.log(this.state.firstNumber,this.state.secondNumber,this.state.total)
  }

  render() {

    return (
        <div className='mt-5'>
          <div className='border border-dark p-3 rounded-3 d-flex flex-column gap-3'>
            <input placeholder='input first number' type='number' className='form-control'
                   onChange={this.handleChangFirstNumber}/>
            <input placeholder='input second number' type='number' className='form-control'
                   onChange={this.handleChangSecondNumber}/>
            <h3>Result: {this.state.total} </h3>
            <div className='d-flex gap-1 justify-content-evenly '>
              <button className='btn btn-outline-dark w-25' value={this.state.firstNumber} onClick={() => this.handleCalculator('plus')}>+</button>
              <button className='btn btn-outline-dark w-25' value={this.state.secondNumber} onClick={() => this.handleCalculator('minus')}>-</button>
              <button className='btn btn-outline-dark w-25' onClick={() => this.handleCalculator('multi')}>x</button>
              <button className='btn btn-outline-dark w-25' onClick={() => this.handleCalculator('divide')}>/</button>
              <button className='btn btn-outline-dark w-25' onClick={this.handleResetCalculator}>C</button>
            </div>
          </div>
        </div>
    )
  }
}

export default Calculator