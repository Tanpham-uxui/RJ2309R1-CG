import React from "react";
function Paragraph(props) {

    if (props.type == 'danger') {
        return <p className="text-danger">{props.children}</p>
    }
    if (props.type == 'warning') {
        return <p className="text-warning">{props.children}</p>
    }
    return <p className="text-secondary">{props.children}</p>

}
export default Paragraph;