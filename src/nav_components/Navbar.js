import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarFooter,
} from "cdbreact";
import "./nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Instagram,
  Github,
  Facebook,
  Person,
  Collection,
  Clipboard2Data,
} from "react-bootstrap-icons";

import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
  return (
    <CDBSidebar Open maxWidth="350px">
      <CDBSidebarHeader iconSize="large" prefix={<i className="fa fa-bars" />}>
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

          <br />
          <div>
            <Link className="gupicss" to="/Students/Evelyn">
              {" "}
              <Person className="sidebarbtn" />
              <p>Students</p>{" "}
            </Link>
          </div>

          <br />

          <div>
            <Link className="gupicss" to="/Assignments/SCRUM">
              <Collection className="sidebarbtn" />
              <p>Assignments</p>{" "}
            </Link>
          </div>
          <br />
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
      <Outlet />
    </CDBSidebar>
  );
};

export default Navbar;
