import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";


const MobileMenu = props => {
  return (
    <div className={props.open ? "mobileMenu mobileMenu--open" : "mobileMenu"}>
      <nav className="mobileNav">
        {/* <NavLink className="mobileNav__item" to="/animation" exact onClick={props.openMenu}>
          Animation
        </NavLink>

        <NavLink className="mobileNav__item" to="/drawer" exact onClick={props.openMenu}>
            Drawer
        </NavLink>

        <NavLink className="mobileNav__item" to="/draganddrop" exact onClick={props.openMenu}>
            Drag and Drop
        </NavLink>

        <NavLink className="mobileNav__item" to="/toasts" exact onClick={props.openMenu}>
            Toasts
        </NavLink> */}
      </nav>
    </div>
  );
};

export default MobileMenu;