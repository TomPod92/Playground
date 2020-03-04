import React from 'react';
import { CSSTransition } from 'react-transition-group';

const SingleBox = (props) => {
    return (
        <CSSTransition in={props.boxOpen} timeout={500} classNames="slide-in-left" mountOnEnter unmountOnExit>
            <div className="singleBox">
                Box Component
            </div>
        </CSSTransition>
    )
};

export default SingleBox;