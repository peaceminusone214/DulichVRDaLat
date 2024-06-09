import React, { useState } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import LoginForm from "./Login/LoginForm";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div className="Navbar">
    <nav className="NavbarItems">
      <h1 className="navbar-logo">DulichVR</h1>
      <div
        className="menu-icon"
        onClick={() => {
          setOpenMenu(!openMenu);
        }}>
        <i className={openMenu ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={openMenu ? "nav-menu active nav-mobile" : "nav-menu"}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <Link className={item.cName} to={item.url}>
              <i className={item.icon}></i>
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <button onClick={toggleLoginForm}>Đăng Nhập</button>
        </li>
      </ul>
      {showLoginForm && <LoginForm onClose={toggleLoginForm} />}
    </nav>
    </div>
  );
}

export default Navbar;