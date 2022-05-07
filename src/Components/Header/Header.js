import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  return (
    <div className="sticky-top">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand className="logo" as={Link} to="/">
            <h2> Fruittastic</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link as={Link} to="/products">
                Products
              </Nav.Link> */}
            </Nav>

            <Nav>
              <Nav.Link as={Link} to="/blogs">
                Blogs
              </Nav.Link>
              {user && (
                <>
                  <Nav.Link as={Link} to="/products">
                    Manage Items
                  </Nav.Link>
                  <Nav.Link as={Link} to="/addproduct">
                    Add Item
                  </Nav.Link>

                  <Nav.Link as={Link} to="/myitem">
                    My items
                  </Nav.Link>
                </>
              )}

              <Nav.Link eventKey={2} as={Link} to="/login">
                {user ? (
                  <button onClick={logout} className="logout-button">
                    Log out
                  </button>
                ) : (
                  <Nav.Link
                    as={Link}
                    to="/login"
                    className="ms-5"
                    eventKey={2}
                    href="#memes"
                  >
                    <button className="login-button">Log in</button>
                  </Nav.Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
