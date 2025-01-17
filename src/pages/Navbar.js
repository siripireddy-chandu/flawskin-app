import React, { useState,useContext } from "react";
import { useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const location = useLocation();

  // List of pages where the cart icon should be hidden
  const hideCartOnPages = ["/home","/AboutUs","/ContactUs","/Requestcall","/"];

  // Check if the current pathname matches any of the specified pages
  const hideCart = hideCartOnPages.includes(location.pathname);

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand d-flex align-items-center" href="#">
          <img
            src="assets/assets/img/FLAWSKIN-LOGO.png"
            alt="Logo"
            style={{ width: "40px", height: "40px", marginRight: "10px" }}
          />
        </a>
        {!hideCart && (
        <a href="/Cart" className="btn btn-outline "
        style={{  marginLeft: "180px" }}
        
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            class="bi bi-cart3"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          
        </a>
 )}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={toggleNavbar}
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? "true" : "false"}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <a
                className="nav-link"
                aria-current="page"
                onClick={() => (window.location.href = "/home")}
              >
                Home
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => (window.location.href = "/ContactUs")}
            >
              <a className="nav-link">
                Contact Us
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => (window.location.href = "/AboutUs")}
            >
              <a className="nav-link">
                About Us
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => (window.location.href = "/Requestcall")}
            >
              <a className="nav-link">
                Request A Call
                <span className="sr-only">(current)</span>
              </a>
            </li>
            {/* <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a> */}
            {/* <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul> */}
            {/* </li> */}
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
