import React, { useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);  
  };

  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top">
      <div className="container-fluid">
      <a className="navbar-brand d-flex align-items-center" href="#">
          <img 
            src="assets/assets/img/FLAWSKIN-LOGO.png" 
            alt="Logo" 
            style={{ width: '40px', height: '40px', marginRight: '10px' }}
          />
          
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          onClick={toggleNavbar}  
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <a className="nav-link" aria-current="page"
              onClick={() => window.location.href = '/home'}
              >Home
              <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item"
            onClick={() => window.location.href = '/ContactUs'}>
              <a className="nav-link">Contact Us

              <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item"
            onClick={() => window.location.href = '/AboutUs'}>
              <a className="nav-link">About Us

              <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item"
            onClick={() => window.location.href = '/Requestcall'}>
              <a className="nav-link">Request A Call

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
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
