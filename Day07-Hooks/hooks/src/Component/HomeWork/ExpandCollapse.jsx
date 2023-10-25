import React from "react";

class ConditionalRendering extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showContent: false
    }
  }

   handleExpandTitle = () => {
    this.setState(
        {
          showContent: !this.state.showContent
        }
    )
  }
  // handleToggleContent = () => {
  //   this.setState(
  //       {
  //         ...this.state,
  //         showContent: !this.state.showContent
  //       }
  //   )
  // }

  render() {
    return (
        <div>
          <h1 className='mb-5 bg-success text-center p-4 text-white display-4 fw-bold'>Conditional Rendering</h1>
          <button className='btn btn-dark p-3 fw-bold mb-3' onClick={this.handleExpandTitle}>Xem giới thiệu</button>
          {this.state.showContent && <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
            qui
            officia deserunt mollit anim id est laborum.</p>}
        </div>
    )
  }
}

export default ConditionalRendering;