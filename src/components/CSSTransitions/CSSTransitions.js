import React, { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Docs from '../Docs/Docs.js';
import SingleBox from './Box.js';
import ListItem from './ListItem.js';
import './cssTransitions.scss';

const cssTransitionsCommands = ['npm install react-transition-group --save'];

const cssTransitionsLinks = [{link: '"https://reactcommunity.org/react-transition-group/"', text: 'for transition group'}];

const CSSTransitions = () => {
    const [ boxOpen, setBoxOpen ] = useState(false);
    
    const handleOpenBox = () => setBoxOpen(!boxOpen);

    const [ items, setItems ] = useState([
        { id: 1, name: 'Test 1' },
        { id: 2, name: 'Test 2' },
        { id: 3, name: 'Test 3' },
    ])

    const handleAddItem = () => {
        const newItem = {
            id: Math.random(),
            name: 'Test #'
        };

        const newArray = [...items, newItem];
        setItems(newArray);
    };

    const handleDeleteListItem = (id) => {
        const newArray = items.filter(current => current.id !== id);
        setItems(newArray);
    };

    return ( 
        <div className="cssTransitions container">
            <h1 className="cssTransitions__header basicHeader" >Pojedyńczy slide-in (CSSTransition)</h1>
            <button className="cssTransitions__button button" onClick={handleOpenBox}>Open box</button>
            <SingleBox boxOpen={boxOpen}/>

            <h1 className="cssTransitions__header basicHeader">Lista komponentów (TransitionGroup)</h1>
            <button className="cssTransitions__button button" onClick={handleAddItem}>Dodaj komponent</button>
            
            <TransitionGroup>
                {
                    items.map( currentItem => (
                        <CSSTransition key={currentItem.id} in={true} timeout={500} classNames="slide-in-left" >
                            <ListItem key={currentItem.id} item={currentItem} handleDeleteListItem={handleDeleteListItem}/>
                        </CSSTransition>
                    ))
                }
            </TransitionGroup>


            <Docs links={cssTransitionsLinks} commands={cssTransitionsCommands}/>
        </div>
     );
}
 
export default CSSTransitions;