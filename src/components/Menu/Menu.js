import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";


const MobileMenu = props => {
  return (
    <div className={props.open ? "mobileMenu mobileMenu--open" : "mobileMenu"}>
      <nav className="mobileNav">
        <NavLink className="mobileNav__item" to="/animation" exact onClick={props.openMenu}>Animation</NavLink>
        <NavLink className="mobileNav__item" to="/drawer" exact onClick={props.openMenu}>Drawer</NavLink>
        <NavLink className="mobileNav__item" to="/draganddrop" exact onClick={props.openMenu}>Drag and Drop</NavLink>
        <NavLink className="mobileNav__item" to="/toasts" exact onClick={props.openMenu}>Toasts</NavLink>
        <NavLink className="mobileNav__item" to="/icons" exact onClick={props.openMenu}>Icons</NavLink>
        <NavLink className="mobileNav__item" to="/modal" exact onClick={props.openMenu}>Modal</NavLink>
        <NavLink className="mobileNav__item" to="/tooltip" exact onClick={props.openMenu}>Tooltip</NavLink>
        <NavLink className="mobileNav__item" to="/countup" exact onClick={props.openMenu}>Countup</NavLink>
        <NavLink className="mobileNav__item" to="/idleTimer" exact onClick={props.openMenu}>Idle Timer</NavLink>
        <NavLink className="mobileNav__item" to="/colorpicker" exact onClick={props.openMenu}>Color Picker</NavLink>
        <NavLink className="mobileNav__item" to="/translations" exact onClick={props.openMenu}>Translations</NavLink>
        <NavLink className="mobileNav__item" to="/csstransitions" exact onClick={props.openMenu}>Translations</NavLink>
        <NavLink className="mobileNav__item" to="/reactClassnames" exact onClick={props.openMenu}>ReactClassnames</NavLink>
      </nav>
    </div>
  );
};

export default MobileMenu;