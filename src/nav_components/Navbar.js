import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";

import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <CDBSidebar Open>
      <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
        Student Dashboard
      </CDBSidebarHeader>
      <CDBSidebarContent>
        <CDBSidebarMenu>
          <Link to="/">
            <CDBSidebarMenuItem icon="th-large">Dashboard</CDBSidebarMenuItem>
          </Link>
          <Link to="/Students">
            <CDBSidebarMenuItem icon="sticky-note">Students</CDBSidebarMenuItem>
          </Link>
          <Link to="/Assignments">
            <CDBSidebarMenuItem icon="sticky-note">
              Assignments
            </CDBSidebarMenuItem>
          </Link>
        </CDBSidebarMenu>
      </CDBSidebarContent>

      <CDBSidebarFooter style={{ textAlign: "center" }}>
        <div className="sidebar-btn-wrapper" style={{ padding: "200px 1px" }}>
          Sidebar Footer
        </div>
      </CDBSidebarFooter>
    </CDBSidebar>
  );
};

export default Navbar;
