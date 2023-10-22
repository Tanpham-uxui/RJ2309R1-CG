import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/@fortawesome/fontawesome-free/css/all.min.css";
import StaffInfo from "./components/StafInfo/StaffInfo";
import Form from "./components/Form/Form";
import JobList from './components/JobList/JobList';
import Header from './components/Layout/Header';
import Footer from "./components/Layout/Footer";
import App from "./App";
// import Footer from './components/Layout/Footer';
function ProfileCard() {
  return (
    <div className="container d-flex flex-column align-items-center p-5 mt-5">
      {/* <StaffInfo/> */}
      {/*<Header/>*/}
      {/*<JobList/>*/}
      {/*<Footer/>*/}
      {/* <Form/> */}
        <App/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ProfileCard/>);

reportWebVitals();
