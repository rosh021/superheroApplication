import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Header = () => {
  const { user } = useSelector((state) => state.userStore);

  return (
    <Navbar expand="md" className="navbar">
      <Container>
        {user._id ? (
          <Navbar.Brand className="nav-link">Welcome {user.fName}</Navbar.Brand>
        ) : (
          <Navbar.Brand className="nav-link">Super Hero Search</Navbar.Brand>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user._id ? (
              <>
                <Link to="/" className="nav-link">
                  Your Favourite
                </Link>
                <Link to="/register" className="nav-link">
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="nav-link">
                  Login
                </Link>
                <Link to="/register" className="nav-link">
                  Register
                </Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
