import React from "react";
import data from "../components/data/data.json";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarFooter,
} from "cdbreact";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Instagram,
  Github,
  Facebook,
  Person,
  Collection,
  Clipboard2Data,
} from "react-bootstrap-icons";

function StudentsNav() {
  let studentData = [];
  data.map((item) => {
    return studentData.push({ name: item.name });
  });

  let uniq = {};
  const singleStudent = studentData.filter(
    (student) => !uniq[student.name] && (uniq[student.name] = true)
  );

  return (
    <div className="container-2">
      <CDBSidebar Open maxWidth="350px">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Student Dashboard
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu className="container">
            <div>
              {" "}
              <Link className="gupicss" to="/">
                {" "}
                <Clipboard2Data className="sidebarbtn" />
                <p>Dashboard</p>{" "}
              </Link>{" "}
            </div>
        
            <div>
              <Link className="gupicss" to="/Students/Evelyn">
                {" "}
                <Person className="sidebarbtn" />
                <p>Students</p>{" "}
              </Link>
            </div>

            {singleStudent.map((student) => (
              <Link
                className="studentLink"
                key={student.name}
                to={`/Students/${student.name}`}
              >
                {student.name}
              </Link>
            ))}
                       <br />
            
                       <div>
              <Link className="gupicss" to="/Assignments/SCRUM">
                <Collection className="sidebarbtn" />
                <p>Assignments</p>{" "}
              </Link>
            </div>
            
            
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-btn-wrapper" style={{ padding: "300px 1px" }}>
            <a href="http://instagram.com">
              <Instagram className="smbtn" /> Instagram
            </a>
            <br />
            <a href="http://github.com/mi-ja92">
              <Github className="smbtn" /> Github
            </a>
            <br />
            <a href="http://facebook.com">
              <Facebook className="smbtn" /> Facebook
            </a>
            <br />
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <Outlet />
    </div>
  );
}

export default StudentsNav;
