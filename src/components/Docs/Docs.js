import React from 'react';
import './docs.scss';

const Docs = (props) => {
    return ( 
    <div className="docs">
        {/* { props.link && <a href={props.link} target="_blank" className="docs__button" rel="noopener noreferrer">See docs {props.text ? props.text : ''}</a> } */}
        { props.links && props.links.map(current => <a href={current.link} target="_blank" className="docs__button" rel="noopener noreferrer" key={current.text}>See docs {current.text ? current.text : ''}</a>) }

        { props.links && <div className="docs__divider"></div> }

        { props.commands && props.commands.map(current => <p className="docs__command" key={current}>{current}</p>) }
    </div> 
    );
}
 
export default Docs;