import React from 'react';
import { Link } from 'react-router-dom';
import './intersectionObserver.scss';

const InterSectionObserverNavigation = () => {
    return (
        <div className="intersectionObserverNavigation centered">
            <Link to="/intersectionObserver/npmPackage" className="intersectionObserver__navItem">No npm package</Link>
            <Link to="/intersectionObserver/noPackage" className="intersectionObserver__navItem">With npm package</Link>
        </div>
    );
}
 
export default InterSectionObserverNavigation;