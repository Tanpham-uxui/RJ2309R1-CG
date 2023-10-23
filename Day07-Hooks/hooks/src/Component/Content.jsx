import React from "react";

class Content extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        // console.log('content component did mount')
        console.log(this.props)
    }
    componentWillUnmount() {
        console.log('content component will unmount')
    }
    componentDidUpdate() {
        console.log('update')
    }

    render() {
        return(<h1 style={{backgroundColor: this.props.bgColor, color: this.props.color}}>Content</h1>
        )
    }
}

export default Content