import React from 'react';
import './hamburger.scss';

const Hamburger = (props) => {
    return ( 
        <div className={!props.open ? `header__hamburger-menu` : `header__hamburger-menu header__hamburger-menu--open`} onClick={() => props.openMenu()}>
            <span></span>
        </div>
     );
}
 
export default Hamburger;