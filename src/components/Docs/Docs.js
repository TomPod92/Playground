import React from 'react';
import './docs.scss';

const Docs = (props) => {
    return ( 
    <div className="docs">
        { props.links && props.links.map(current => <a href={current.link} target="_blank" className="docs__button" rel="noopener noreferrer" key={current.text}>See docs {current.text ? current.text : ''}</a>) }

        { props.links && <div className="docs__divider"></div> }

        { props.commands && props.commands.map(current => <p className="docs__command" key={current}>{current}</p>) }

        <div className="tutorialsContainer">
            { props.tutorials && props.tutorials.map( (current, index) => <a key={`tutorial${index}`} href={current} target="_blank" rel="noopener noreferrer" className="docs__tutorial">Tutorial nr.{index+1}</a>) }
        </div>
    </div> 
    );
}
 
export default Docs;