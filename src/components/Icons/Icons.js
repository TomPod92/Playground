import React from 'react';
import DocsButton from '../DocsButton/DocsButton.js';
import IconComponent from './IconComponent.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons'; // wszystkie ikony z serii "brand" np apple, google itd
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './icons.scss';

// dodawanie ikon do bibliotteki
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCheckCircle, faCoffee, faCheckSquare);

const Icons = () => {
    return ( 
        <div className="container">
            <div className="icons">
                <h2 className="icons__header">Ikony importowane pojedyńczo do każdego komponentu</h2>

                <div className="icons__icon">
                    <FontAwesomeIcon icon={faCheckCircle} className="icons_icon"/>
                </div>

                <FontAwesomeIcon icon={faCoffee} size='2x'/>

                <h2 className="icons__header">Ikony importowane do biblioteki ikon</h2>

                <IconComponent />

                <DocsButton link="https://www.npmjs.com/package/@fortawesome/react-fontawesome"/>
            </div>
        </div>
     );
}
 
export default Icons;