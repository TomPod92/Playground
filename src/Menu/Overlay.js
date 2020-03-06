import React from 'react';
import './overlay.scss';

const Overlay = (props) => (
    <div className={props.open ? "overlay overlay--visible" : "overlay"} onClick={ props.openMenu}></div>
)

export default Overlay;