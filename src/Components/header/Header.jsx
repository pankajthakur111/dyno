import React from "react";
import newlogo from "../../assets/images/new-logo.png";
import "../header/Header.css";
import "../header/Header.css";

const MainHeader = () => {
  return (
    <>
      {/* Main Header */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Logo Section */}
          <a className="navbar-brand d-flex align-items-center new-nav" href="/">
            <img
              src={newlogo}
              alt="Logo"
              height="60"
              className="me-2"
            />
          </a>

          {/* Toggle Button for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-facebook"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-youtube"></i>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-search"></i> Search file
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-person"></i> Account
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  <i className="bi bi-cart"></i> Cart
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Secondary Navbar */}
      <nav className="navbar navbar-expand-lg navbar-secondary bg-secondary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#secondaryNav"
            aria-controls="secondaryNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="secondaryNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="chiptuningToolsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Chiptuning Tools
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="chiptuningToolsDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Tool 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Tool 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="chiptuningFilesDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Chiptuning Files
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="chiptuningFilesDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      File 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      File 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Prices
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Starting a Chiptuning Business
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="supportDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Support
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="supportDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      Support 1
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Support 2
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="languageDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  English
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="languageDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/">
                      English
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Spanish
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MainHeader;

