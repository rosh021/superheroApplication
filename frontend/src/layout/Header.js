import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../pages/logingRegisterRedux/Slice";

export const Header = () => {
  const { user } = useSelector((state) => state.userStore);
  const dispatch = useDispatch();

  const handelOnClick = () => {
    dispatch(setUser());
    window.sessionStorage.removeItem("user");
  };

  return (
    <Navbar expand="md" className="navbar">
      <Container>
        {user?.result?._id ? (
          <Navbar.Brand className="nav-link">
            Welcome {user?.result?.fName}
          </Navbar.Brand>
        ) : (
          <Link to="/dashboard">
            <Navbar.Brand className="nav-link">Super Hero Search</Navbar.Brand>
          </Link>
        )}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user?.result?._id ? (
              <>
                <Link to="/favorite" className="nav-link">
                  Your Saved
                </Link>
                <Link to="/" className="nav-link" onClick={handelOnClick}>
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
