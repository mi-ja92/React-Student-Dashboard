import React from "react";
import data from "../components/data/data.json";
import { Link, Outlet } from "react-router-dom";
import "./nav.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";

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
    <div className="container">
      <CDBSidebar Open maxWidth="350px">
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Student Dashboard
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu className="container">
            <Link to="/">
              <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            </Link>
            <Link to="/Assignments/SCRUM">
              <CDBSidebarMenuItem icon="sticky-note">
                Assignments
              </CDBSidebarMenuItem>
            </Link>
            <CDBSidebarMenuItem icon="sticky-note">Students</CDBSidebarMenuItem>
            {singleStudent.map((student) => (
              <Link
                className="studentLink"
                key={student.name}
                to={`/Students/${student.name}`}
              >
                {student.name}
              </Link>
            ))}
          </CDBSidebarMenu>
        </CDBSidebarContent>
        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <div className="sidebar-btn-wrapper" style={{ padding: "200px 5px" }}>
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
      <Outlet />
    </div>
  );
}

export default StudentsNav;
