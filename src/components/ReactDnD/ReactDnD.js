import React from 'react';
import Docs from '../Docs/Docs.js';
import './reactDnD.scss';

const Links = [ {link: 'https://react-dnd.github.io/react-dnd/docs/overview', text:'for React Dnd'} ];
const Commands = ['npm install react-dnd', 'npm install react-dnd-html5-backend'];
const Tutorials = ['https://www.youtube.com/watch?v=NW8erkUgqus&t=1202s'];

const ReactDnd = () => {
  return ( 
    <div className="reactDnD container">
      reactDnD
      <Docs links={Links} commands={Commands} tutorials={Tutorials}/>
    </div>
   );
}
 
export default ReactDnd;