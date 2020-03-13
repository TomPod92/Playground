import React from 'react';
import Docs from '../Docs/Docs.js';

// -----------REACT ICONS-----------
import { FaAccessibleIcon } from "react-icons/fa"; // dostepne sa ikony z wielu zrodel
import { IconContext } from 'react-icons';

// ------------FORTAWESOME----------
import IconComponent from './IconComponent.js'; //moj komponent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { fab } from '@fortawesome/free-brands-svg-icons'; // wszystkie ikony z serii "brand" np apple, google itd
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons';
import './icons.scss';
// dodawanie ikon z fortawesome do biblioteki
import { library } from '@fortawesome/fontawesome-svg-core'
library.add(faCheckCircle, faCoffee, faCheckSquare);

const fortawesomeCommands = ['npm i --save @fortawesome/fontawesome-svg-core', 'npm i --save @fortawesome/free-solid-svg-icons', 'npm i --save @fortawesome/react-fontawesome', 'npm i --save @fortawesome/free-regular-svg-icons'];
const fortawesomeLinks = [{link: 'https://www.npmjs.com/package/@fortawesome/react-fontawesome', text: 'for fortawesome'}];

const reactIconsCommands = ['npm install react-icons --save'];
const reactIconsLinks = [{link: 'https://react-icons.netlify.com/#/', text: 'for react icons'}];
const reactIconsTutorials = ['https://www.youtube.com/watch?v=4l0nsK4ezNc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=2'];

const Icons = () => {
    return ( 
        <div className="centered">
            <div className="icons">
                <div className="icons__section">
                    {/* ------------------------------------------------------------------------------------------------ */}
                    <h2 className="icons__header header">Ikony "fortawesome" importowane pojedyńczo do każdego komponentu</h2>
                    
                    <div className="icon__container">
                        <div className="icons__icon">
                            <FontAwesomeIcon icon={faCheckCircle} className="icons_icon"/>
                        </div>

                        <FontAwesomeIcon icon={faCoffee} size='2x'/>
                    </div>
                    {/* --------------- */}
                    <h2 className="icons__header header">Ikony "fortawesome" importowane do biblioteki ikon</h2>

                    <IconComponent />
                    <Docs links={fortawesomeLinks} commands={fortawesomeCommands}/>
                </div>
                {/* ------------------------------------------------------------------------------------------------ */}
                <div className="icons__section">
                    <h2 className="icons__header header">Ikony "react icons" stylowane pojedyńczo</h2>
                    <div className="icon__container">
                        <FaAccessibleIcon color="#519D9E" size="5rem"/>
                        <FaAccessibleIcon className="reactIconClass"/>
                    </div>
                    {/* ---------------- */}
                    <h2 className="icons__header header">Ikony "react icons" stylowane przez "context"</h2>

                    <IconContext.Provider value={{ color:"#519D9E", size:"5rem" }}>
                        <div className="icon__container">
                            <FaAccessibleIcon />
                            <FaAccessibleIcon />
                        </div>
                    </IconContext.Provider>

                    <Docs links={reactIconsLinks} commands={reactIconsCommands} tutorials={reactIconsTutorials}/>
                </div>
                {/* ------------------------------------------------------------------------------------------------ */}
                
            </div>
        </div>
     );
}
 
export default Icons;