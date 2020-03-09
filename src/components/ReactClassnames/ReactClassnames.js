import React, { useState } from 'react';
import classNames from 'classnames';
import Docs from '../Docs/Docs.js';
import './ReactClassnames.scss';

const reactClassnamesCommands = ['npm install classnames --save'];
const reactClassnamesLinks = [{link: "https://www.npmjs.com/package/classnames", text:"for classes"}];

const ReactClassnames = () => {

    const [ classesState, setClassesState ] = useState({
        color: false,
        background: false,
        spacing: false
    })

    const divClasses = classNames(
        {textColor: classesState.color}, 
        {backgroundColor: classesState.background}, 
        {letterSpacing: classesState.spacing}
    );

    const handleSetClasses = (event) => {
        const name = event.target.name;

        if(!name) return;

        setClassesState({
            ...classesState,
            [name]: !classesState[name]
        })
    }

    return ( 
        <div className="reactClassnames container">

            <p className={`reactClassname__text ${divClasses}`}>Here is some sample text</p>

            <div className="reactClassname__buttonsContainer" onClick={handleSetClasses}>
                <button className="button" name="color">
                    {classesState.color ? 'Remove text color' : 'Add text color'}
                </button>

                <button className="button" name="background">
                    {classesState.background ? 'Remove background color' : 'Add background color'}
                </button>
                
                <button className="button" name="spacing">
                    {classesState.background ? 'Remove letter spacing' : 'Add letter spacing'}
                </button>
            </div>
            
            <Docs links={reactClassnamesLinks} commands={reactClassnamesCommands}/>

        </div> 
    );
}
 
export default ReactClassnames;