import React from "react";
import { NavLink } from "react-router-dom";
import "./menu.scss";


const MobileMenu = props => {
  return (
    <div className={props.open ? "mobileMenu mobileMenu--open" : "mobileMenu"}>
      <nav className="mobileNav">
        <NavLink className="mobileNav__item" to="/animation" exact onClick={props.openMenu}>Animation</NavLink>
        <NavLink className="mobileNav__item" to="/csstransitions" exact onClick={props.openMenu}>Transition Group</NavLink>
        <NavLink className="mobileNav__item" to="/drawer" exact onClick={props.openMenu}>Drawer</NavLink>
        <NavLink className="mobileNav__item" to="/collapsibleDrawer" exact onClick={props.openMenu}>Collapsible</NavLink>
        <NavLink className="mobileNav__item" to="/icons" exact onClick={props.openMenu}>Icons</NavLink>
        <NavLink className="mobileNav__item" to="/toasts" exact onClick={props.openMenu}>Toasts</NavLink>
        <NavLink className="mobileNav__item" to="/modal" exact onClick={props.openMenu}>Modal</NavLink>
        <NavLink className="mobileNav__item" to="/tooltip" exact onClick={props.openMenu}>Tooltip</NavLink>
        <NavLink className="mobileNav__item" to="/countup" exact onClick={props.openMenu}>Countup</NavLink>
        <NavLink className="mobileNav__item" to="/piechart" exact onClick={props.openMenu}>Piechart</NavLink>
        <NavLink className="mobileNav__item" to="/colorpicker" exact onClick={props.openMenu}>Color Picker</NavLink>
        <NavLink className="mobileNav__item" to="/translations" exact onClick={props.openMenu}>Translations</NavLink>
        <NavLink className="mobileNav__item" to="/reactClassnames" exact onClick={props.openMenu}>Classnames</NavLink>
        <NavLink className="mobileNav__item" to="/formik" exact onClick={props.openMenu}>Formik + Yup</NavLink>
        <NavLink className="mobileNav__item" to="/datepicker" exact onClick={props.openMenu}>Date picker</NavLink>
        <NavLink className="mobileNav__item" to="/creditcard" exact onClick={props.openMenu}>Credit Card</NavLink>
        <NavLink className="mobileNav__item" to="/spinner" exact onClick={props.openMenu}>Spinner</NavLink>
        <NavLink className="mobileNav__item" to="/loader" exact onClick={props.openMenu}>Loader spinner</NavLink>
        <NavLink className="mobileNav__item" to="/sortable" exact onClick={props.openMenu}>Sortable JS</NavLink>
        <NavLink className="mobileNav__item" to="/draganddrop" exact onClick={props.openMenu}>Drag and Drop</NavLink>
        <NavLink className="mobileNav__item" to="/beautifulDnd" exact onClick={props.openMenu}>Beautiful DnD</NavLink>
        <NavLink className="mobileNav__item" to="/reactDnd" exact onClick={props.openMenu}>React DnD</NavLink>
        <NavLink className="mobileNav__item" to="/joyride" exact onClick={props.openMenu}>Joyride</NavLink>
        <NavLink className="mobileNav__item" to="/presentation" exact onClick={props.openMenu}>Presentation</NavLink>
        <NavLink className="mobileNav__item" to="/roadmap" exact onClick={props.openMenu}>Roadmap progress</NavLink>
        <NavLink className="mobileNav__item" to="/idleTimer" exact onClick={props.openMenu}>Idle Timer</NavLink>
        <NavLink className="mobileNav__item" to="/buttons" exact onClick={props.openMenu}>Cool buttons</NavLink>
        <NavLink className="mobileNav__item" to="/mediaPlayer" exact onClick={props.openMenu}>React Player</NavLink>
        <NavLink className="mobileNav__item" to="/pageTransition" exact onClick={props.openMenu}>Page Transition</NavLink>
        <NavLink className="mobileNav__item" to="/reactCharts" exact onClick={props.openMenu}>React Chart</NavLink>
        <NavLink className="mobileNav__item" to="/laptop" exact onClick={props.openMenu}>Laptop</NavLink>
      </nav>
    </div>
  );
};

export default MobileMenu;