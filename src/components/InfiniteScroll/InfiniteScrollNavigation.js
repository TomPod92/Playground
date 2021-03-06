import React from 'react';
import { Link } from 'react-router-dom';
import './infiniteScroll.scss';

const InfiniteScroll = (props) => {
    return (
        <div className="infiniteScroll centered">
            <Link to="/infiniteScroll/npmPackage" className="infiniteScroll__navItem">With npm package</Link>
            {/* <Link to="/infiniteScroll/noPackage_1" className="infiniteScroll__navItem">Without package v.1</Link> */}
            <Link to="/infiniteScroll/noPackage_2" className="infiniteScroll__navItem">Without package v.2</Link>
        </div>
    );
}
 
export default InfiniteScroll;