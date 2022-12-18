import React from "react";
import data from "../components/data/data.json";
import { Link } from "react-router-dom";
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
    <>
      <CDBSidebar Open>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          Student Dashboard
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <Link to="/">
              <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
            </Link>
            <Link to="/Assignments">
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
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </>
  );
}

export default StudentsNav;
