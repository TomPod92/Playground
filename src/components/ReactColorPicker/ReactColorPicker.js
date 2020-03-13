import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import Docs from '../Docs/Docs.js';
import './reactColorPicker.scss';

const reactColorCommands = ['npm install react-color --save'];
const reactColorLinks = [{link: "http://casesandberg.github.io/react-color/", text:'for color picker'}];
const reactTutorials = ['https://www.youtube.com/watch?v=LZhwNGpiTEI&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM'];

const ReactColorPicker = () => {

    const [ color, setColor ] = useState('#fff');

    const handleChangeColor = updatedColor => setColor(updatedColor);

    return ( 
        <div className="reactColorPicker centered">
            <ChromePicker color={color} onChange={handleChangeColor} className="colorPicker"/>

            <Docs links={reactColorLinks} commands={reactColorCommands} tutorials={reactTutorials}/>
        </div>
     );
}
 
export default ReactColorPicker;