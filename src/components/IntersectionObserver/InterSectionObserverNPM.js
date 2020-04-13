import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer'
import Docs from '../Docs/Docs.js';
import './intersectionObserver.scss';


const Links = [ {link: 'https://www.npmjs.com/package/react-intersection-observer', text:' for react-intersection-observer'} ];
const Commands = ['npm install react-intersection-observer --save'];
const Tutorials = ['https://www.youtube.com/watch?v=QD4GcZJObXg&t=256s'];

const InterSectionObserverNPM = () => {

    const [ref, inView, entry] = useInView({threshold: 1.0});

    return (
        <div className="myInterSectionObserver">
            <div className="section-one">
                <h2>Scroll down</h2>
                <Link to="/intersectionObserver" className="intersectionObserver__button">Go back</Link>
                <Docs links={Links} commands={Commands} tutorials={Tutorials}/>
            </div>
            <div className="section-two" ref={ref}>
                {inView && <h2>Is it visible</h2>}
            </div>
        </div>
    );
}
 
export default InterSectionObserverNPM;