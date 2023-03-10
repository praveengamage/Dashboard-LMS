//imports the necessary modules and libraries used in the `SideNav` component.

import React from "react";
import { Nav, Navbar, NavDropdown, Form, FormControl } from "react-bootstrap";
import { FaHome, FaChalkboardTeacher, FaGraduationCap, FaEnvelope, FaUsers, FaChartPie, FaCog } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import logo from "./logo.svg";
import "./SideNav.css";



function SideNav() {
  
  return (


    //creates a container using the `Container` component from react-bootstrap, which holds the sidebar.

    <Container fluid className="sidebarContainer">
    
    {/* defines the navbar using the `Navbar` component from react-bootstrap. It contains the brand logo and name, a toggle button for smaller screens, and a collapsible menu. */}
    
    <Navbar bg="white" expand="lg" className="flex-column">
      <Navbar.Brand href="#home" className="mt-3 mb-4">
        <img src={logo} width="30" height="30" className="d-inline-block align-top mr-2" alt="FlexyCode logo" />
        <span className="font-weight-bold">FlexyCode</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">

      

    {/* defines the navigation links using the `Nav` and `Nav.Link` components from react-bootstrap. It includes the icons for each link */}

        <Nav className="flex-column mt-4 mb-4">
          <Nav.Link href="#overview"><FaHome className="menu-icon" /><span className="menu-text">Overview</span></Nav.Link>
          <Nav.Link href="#profile"><FaChalkboardTeacher className="menu-icon" /><span className="menu-text">Profile</span></Nav.Link>
          <Nav.Link href="#courses"><FaGraduationCap className="menu-icon" /><span className="menu-text">Courses</span></Nav.Link>
          <Nav.Link href="#messages"><FaEnvelope className="menu-icon" /><span className="menu-text">Messages</span></Nav.Link>
          <Nav.Link href="#instructors"><FaUsers className="menu-icon" /><span className="menu-text">Instructors</span></Nav.Link>
          <Nav.Link href="#reports"><FaChartPie className="menu-icon" /><span className="menu-text">Reports</span></Nav.Link>
          <NavDropdown title={<span><FaCog className="menu-icon" /> <span className="menu-text">Settings</span></span>} id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something else</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

    {/* search bar using Bootstrap's Form and FormControl components */}

    <Form inline className="w-50 mt-3 search-form">
    <FormControl type="text" placeholder="Search" className="mr-sm-2 search-input" />
    </Form>

    </Container>

  
  );
}

export default SideNav;