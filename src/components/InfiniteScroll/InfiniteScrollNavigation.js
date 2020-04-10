import React from 'react';
import { Link } from 'react-router-dom';
import './infiniteScroll.scss';

const InfiniteScroll = (props) => {
    return (
        <div className="infiniteScroll centered">
            <Link to="/infiniteScroll/npmPackage">With npm package</Link>
            <Link to="/infiniteScroll/noPackage_1">Without package v.1</Link>
            <Link to="/infiniteScroll/noPackage_2">Without package v.2</Link>
        </div>
    );
}
 
export default InfiniteScroll;