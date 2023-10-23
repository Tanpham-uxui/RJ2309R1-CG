import React from "react";

class RadioGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: 'Football',
      hobbies: [
        'Football',
        'Swimming',
        'Walking'
      ]
    }
  }

  componentDidUpdate() {
    console.log(this.state.selected)
  }

  handleChangeHobby = (e) => {
    this.setState({
      ...this.state,
      selected: e.target.value
    })
  }

  render() {
    return (
        <>
          <h3>Please choose your hobby</h3>
          {
            this.state.hobbies.map((hobby) => (
                <div key={hobby}>
                  <label>
                    <input type='radio' name='hobby'
                           value={hobby}
                            checked={this.state.selected === hobby}
                           onChange={this.handleChangeHobby}
                    />
                    {hobby}
                  </label>
                </div>
            ))
          }
        </>)

  }
}

export default RadioGroup