import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Anchor from "react-bootstrap/Anchor";
import logo from "../assets/logo/logo.png";

const Sidebar = () => {
  return (
    <Nav
      className="navbar navbar-expand-md fixed-left justify-content-between"
      id="sidebar"
    >
      <div className="container flex-column align-items-start">
        <a className="navbar-brand" href="index.html">
          <img src={logo} alt="Spotify Logo" width="131" height="40" />
        </a>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <ul>
              <li>
                <Anchor
                  className="nav-item nav-link d-flex align-items-center"
                  href="#"
                >
                  <i className="bi bi-house-door-fill"></i>&nbsp; Home
                </Anchor>
              </li>
              <li>
                <Anchor
                  className="nav-item nav-link d-flex align-items-center"
                  href="#"
                >
                  <i className="bi bi-book-fill"></i>&nbsp; Your Library
                </Anchor>
              </li>
              <li>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <div className="input-group-append">
                    <Button
                      className="btn-sm h-100"
                      variant="outline-secondary"
                    >
                      GO
                    </Button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="nav-btn">
        <Button className="btn signup-btn" type="button">
          Sign Up
        </Button>
        <Button className="btn login-btn" type="button">
          Login
        </Button>
        <Anchor href="#">Cookie Policy</Anchor> |
        <Anchor href="#"> Privacy</Anchor>
      </div>
    </Nav>
  );
};
export default Sidebar;
