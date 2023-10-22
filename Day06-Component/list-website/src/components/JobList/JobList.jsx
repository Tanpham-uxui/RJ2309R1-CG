import React from "react"
const jobList = [
    {
        id: "task-01",
        name: "Java - Spring Boot",
        status: "Looking For",
        hrName: "Tan Pham",
        count: 6,
    },
    {
        id: "task-02",
        name: "React-Angular",
        status: "Done",
        hrName: "Hai Tran",
        count: 5,
    },
    {
        id: "task-03",
        name: "PHP-Laravel",
        status: "Looking For",
        hrName: "Thuong Pham",
        count: 7,
    },
    {
        id: "task-04",
        name: ".NET Core MVC",
        status: "Done",
        hrName: "Quy Hoang",
        count: 9,
    },
];
function JobList() {
    const handleClick = (info) => {
        console.log(info);
    }
    return (
    <div className="d-flex flex-column align-items-start w-100 mt-5">
        <h1 className="m-2">Job List</h1>
        <div className="table-section w-100 p-3 shadow rounded">
            <table className="table p-3 rounded table-striped table-hover">
                <thead className="">
                    <tr className="">
                        <th>#ID</th>
                        <th>Task Name</th>
                        <th>Count</th>
                        <th>Status</th>
                        <th>HR Name</th>
                    </tr>
                </thead>
                <tbody>
                    {jobList.map((person) => (
                        <TableRow 
                        key={person.id} 
                        onClick = {()=>handleClick(person.hrName)}
                        {...person}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    </div>)
}
function TableRow(props) {
    
    return(
    <tr key={props.id} className="p-2">
                            <td>{props.id}</td>
                            <td>{props.name}</td>
                            <td>{props.count}</td>
                            <td>
                                <span
                                    className={`${props.status === "Done"
                                        ? "badge bg-success"
                                        : "badge bg-warning"
                                        }`}
                                >
                                    {props.status}
                                </span>
                            </td>
                            <td>{props.hrName}</td>
                            <td className="btn btn-outline-primary btn-sm me-1">
                                <i className="fa fa-eye" onClick ={props.onClick}></i>
                            </td>
                            <td className="btn btn-outline-danger btn-sm">
                                <i className="fa fa-trash"></i>
                            </td>
                        </tr>)
}
export default JobList;
