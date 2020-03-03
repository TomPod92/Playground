import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import Docs from '../Docs/Docs.js';
import './reactColorPicker.scss';

const reactColorCommands = ['npm install react-color --save'];

const ReactColorPicker = () => {

    const [ color, setColor ] = useState('#fff');

    const handleChangeColor = updatedColor => setColor(updatedColor);

    return ( 
        <div className="reactColorPicker container">
            <ChromePicker color={color} onChange={handleChangeColor} className="colorPicker"/>

            <Docs link="http://casesandberg.github.io/react-color/" commands={reactColorCommands}/>
        </div>
     );
}
 
export default ReactColorPicker;