import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import './Navbar.css'; 

function Navbar() {
  return (
    <section className="navbar-section">
      <div className="container">
        <nav className="navbar">

          <NavLink to="/home" className="logo">
            <img src={logo} alt="Logo" className="logo-img" />
            <span className="logo-text">Meram Belediyesi</span>
          </NavLink>

          <ul className="nav-list">
            <li>
              <NavLink to="/baskan" className="nav-link">Başkanımız</NavLink>
            </li>
            <li>
              <NavLink to="/kurumsal" className="nav-link">Kurumsal</NavLink>
            </li>
            <li>
              <NavLink to="/restore" className="nav-link">Restore Çalışmalarımız</NavLink>
            </li>
            <li>
              <NavLink to="/meram" className="nav-link">Meram</NavLink>
            </li>
            
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navbar;
