import React from "react";
import Content from "./Content";

class AppCount extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 1,
            showContent: false
        };
    }

    handleIncreament = () => {
        this.setState({...this.state, number: this.state.number + 1})
    }
    handleDecreament = () => {
        this.setState({
            //Giữ lại những thanh niên cũ (nếu có)
            ...this.state,
            // Sửa hoặc update thanh niên muốn sửa
            number: this.state.number - 1
        })
    }
    handleToggleContent = () => {
        this.setState(
            {
                ...this.state,
                showContent: !this.state.showContent
            }
    )
    }

    render() {
        return (
            <>
                <h1>{this.state.number}</h1>
                <button onClick={this.handleIncreament}>Increament</button>
                <button onClick={this.handleDecreament}>Increament</button>
                <button onClick={this.handleToggleContent}>Toogle Content Component</button>
                {
                    this.state.showContent && <Content bgColor={'green'} color={'white'}/>
                }
            </>
        )
    }
}

export default AppCount;