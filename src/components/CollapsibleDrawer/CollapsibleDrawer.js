import React from 'react';
import Docs from '../Docs/Docs.js';
import Collapsible from 'react-collapsible';
import './collapsibleDrawer.scss';

const collapsibeDrawerLinks = [ {link: 'https://www.npmjs.com/package/react-collapsible', text:'for collapsible'} ];
const collapsibeDrawerCommands = ['npm install react-collapsible --save'];

const dummyData = [
    { id: 11, header:'Opcja 1', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic est deserunt incidunt cumque totam quae excepturi facere tenetur, quaerat possimus eveniet veritatis odit natus commodi voluptatem molestias dignissimos rerum?"},
    { id: 22, header:'Opcja 2', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic est deserunt incidunt cumque totam quae excepturi facere tenetur, quaerat possimus eveniet veritatis odit natus commodi voluptatem molestias dignissimos rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic est deserunt incidunt cumque totam quae excepturi facere tenetur, quaerat possimus eveniet veritatis odit natus commodi voluptatem molestias dignissimos rerum?"},
    { id: 33, header:'Opcja 3', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic est deserunt incidunt cumque totam quae excepturi facere tenetur, quaerat possimus eveniet veritatis odit natus commodi voluptatem molestias dignissimos rerum?"},
    { id: 44, header:'Opcja 4', text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic est deserunt incidunt cumque totam quae excepturi facere tenetur, quaerat possimus eveniet veritatis odit natus commodi voluptatem molestias dignissimos rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic est deserunt incidunt cumque totam quae excepturi facere tenetur, quaerat possimus eveniet veritatis odit natus commodi voluptatem molestias dignissimos rerum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic est deserunt incidunt cumque totam quae excepturi facere tenetur, quaerat possimus eveniet veritatis odit natus commodi voluptatem molestias dignissimos rerum?"},
]

const CollapsibeDrawer = () => {
    return ( 
        <div className="collapsibleDrawer container">
            {dummyData.map(current => (
                <Collapsible 
                    trigger={current.header}
                    key={current.id}
                    transitionTime={300}
                    classParentString="collapsible"
                    >
                        <p>{current.text}</p>
                </Collapsible>
            ))}

            <Docs links={collapsibeDrawerLinks} commands={collapsibeDrawerCommands}/>
        </div>
     );
}
 
export default CollapsibeDrawer;