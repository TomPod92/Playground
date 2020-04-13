import React from 'react';
import { Link } from 'react-router-dom';
import './intersectionObserver.scss';
import useOnScreen from './useOnScreen';

const MyInterSectionObserver = () => {
    // const [ setRef, visible ] = useOnScreen({rootMargin: "-300px"});
    const [ setRef, visible ] = useOnScreen({ threshold: 0.75});

    return (
        <div className="myInterSectionObserver">
            <div className="section-one">
                <h2>Scroll down</h2>
                <Link to="/intersectionObserver" className="intersectionObserver__button">Go back</Link>
            </div>
            <div className="section-two" ref={setRef}>
                {visible && <h2>Is it visible</h2>}
            </div>
        </div>
    );
}
 
export default MyInterSectionObserver;