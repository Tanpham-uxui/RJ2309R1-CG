import React from "react";
const profile = {
    name: "Peter Pham",
    age: 20,
    gender: "Male",
    mobile: "0373907917",
    email: "phamtrannhattan12a5@gmail.com",
};
function StaffInfo() {
    return (
        <div className="w-50 p-5 mb-2 d-flex flex-column align-items-center shadow rounded-3 bg-white ">
            <img
                className="img-fluid rounded-circle p-0 shadow"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWFsZSUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
                alt={`${profile.name}`}
            />
            <div className="d-flex flex-column align-items-center">
                <h3 className="text-dark fw-bold">{profile.name}</h3>
                <p className="text-dark">
                    Age: <span className="fw-bold">{profile.age}</span>{" "}
                </p>
                <p className="text-dark">
                    Gender: <span className="fw-bold">{profile.gender}</span>{" "}
                </p>
                <p className="text-dark">
                    Mobile: <span className="fw-bold">{profile.mobile}</span>{" "}
                </p>
                <p className="text-dark">
                    Email: <span className="fw-bold">{profile.email}</span>{" "}
                </p>
            </div>
        </div>)
}
export default StaffInfo