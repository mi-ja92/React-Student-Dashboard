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

function AssignmentsNav() {
  let assignmentData = [];
  data.map((item) => {
    return assignmentData.push({ assignment: item.assignment });
  });

  let uniq = {};
  const singleAssignment = assignmentData.filter(
    (item) => !uniq[item.assignment] && (uniq[item.assignment] = true)
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

            <Link to="/Students/Evelyn">
              <CDBSidebarMenuItem icon="sticky-note">
                Students
              </CDBSidebarMenuItem>
            </Link>
            <CDBSidebarMenuItem icon="sticky-note">
              Assignments
            </CDBSidebarMenuItem>
            {singleAssignment.map((assignment) => (
              <Link
                className="assignmentLink"
                key={assignment.assignment}
                to={`/Assignments/${assignment.assignment}`}
              >
                {assignment.assignment}
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
      <Outlet />
    </div>
  );
}

export default AssignmentsNav;
