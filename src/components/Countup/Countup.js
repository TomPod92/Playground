import React from 'react';
import Docs from '../Docs/Docs.js';
import './countup.scss';

const countupCommands = ['npm install react-countup'];

const Countup = () => {
    return ( 
    <div className="countup container">
        countup
        <Docs link="https://www.npmjs.com/package/react-countup" commands={countupCommands} />
    </div> 
    );
}
 
export default Countup;