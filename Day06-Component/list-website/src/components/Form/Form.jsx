import React from "react";
import Paragraph from "./Paragraph";
import Control from "./Control";
function Form() {
    return (
        <div className="container">
            <form>
                <Control type='text' label='Name' />
                <Control type='password' label='Password' />
                <Control type='checkbox'></Control>
                <Paragraph type='danger'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, earum.</Paragraph>
                <Button type="button">Log In</Button>
                <Button type='link' href="https://www.google.com/m">Go to google</Button>
            </form>
        </div>
    )
}

function Button(props) {
    const handleClick = () => 
        console.log('You clicked the button!');
    
    if (props.type == 'button'){
        return (
            <button className="btn btn-dark" 
            type={props.type} 
            onClick={handleClick}
            >{props.children}</button>
        )
    }
    if (props.type == 'link'){
        return (
        <a className={`btn btn-${props.type}`} href={props.href}>{props.children}</a>
        )
    }
    
}
export default Form;