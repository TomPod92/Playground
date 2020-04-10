import React from 'react';
import { Link } from 'react-router-dom';
import Docs from '../Docs/Docs.js';

const Links = [ {link: 'https://www.npmjs.com/package/react-infinite-scroller', text:'for react-infinite-scroller'} ];
const Commands = ['npm install react-infinite-scroller --save'];

const WithNpm = () => {
    return (
        <div className="infiniteScroll centered">
            <Link to="/infiniteScroll">Go back</Link>
            <Docs links={Links} commands={Commands}/>
            with npm package
        </div>
    );
}
 
export default WithNpm;