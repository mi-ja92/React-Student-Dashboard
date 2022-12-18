import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsNav from "../src/nav_components/nav_students";
import AssignmentsNav from "../src/nav_components/nav_assignments";
import Student from "./components/singleStudent";
import Assignment from "./components/singleAssignment";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Assignments" element={<AssignmentsNav />}>
          <Route path=":AssignmentId" element={<Assignment />} />
        </Route>
        <Route path="/Students" element={<StudentsNav />}>
          <Route path=":StudentId" element={<Student />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
