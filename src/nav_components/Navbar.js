import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";
import "./nav.css";

import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
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
            <CDBSidebarMenuItem icon="sticky-note">Students</CDBSidebarMenuItem>
          </Link>
          <Link to="/Assignments/SCRUM">
            <CDBSidebarMenuItem icon="sticky-note">
              Assignments
            </CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "300px 1px" }}>
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
      <Outlet />
    </CDBSidebar>
  );
};

export default Navbar;
