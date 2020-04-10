import React from 'react';
import { Link } from 'react-router-dom';

const NoPackagev1 = () => {
    return (
        <div className="infiniteScroll centered">
            <Link to="/infiniteScroll">Go back</Link>
            <a className="button" href="https://www.pluralsight.com/guides/how-to-implement-infinite-scrolling-with-reactjs" rel="noopener noreferrer" target="_blank">Tutoral</a>
            No package v1
        </div>
    );
}
 
export default NoPackagev1;