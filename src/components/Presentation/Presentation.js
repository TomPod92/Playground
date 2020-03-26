import React from 'react';
import './presentation.scss';
import Docs from '../Docs/Docs.js';

const Links = [ {link: 'https://www.npmjs.com/package/mdx-deck', text:'for Mdx Deck'} ];
const Commands = ['npm i -D mdx-deck'];
const Tutorials = ['https://www.youtube.com/watch?v=nwTm1I1Q4cQ', 'https://egghead.io/lessons/react-build-a-slide-deck-with-mdx-deck-using-markdown-react'];

const Presentation = () => {
    return ( 
        <div className="centered">
            <h1 className="header">MDX deck</h1>

            <Docs links={Links} commands={Commands} tutorials={Tutorials}/>
        </div>
     );
}
 
export default Presentation;