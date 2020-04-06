import React from 'react';
import Docs from '../Docs/Docs.js';

const Links = [ {link: 'https://reactcommunity.org/react-transition-group/', text:'for transiton-group'} ];
const Commands = ['npm install react-transition-group --save'];
const Tutorials = ['https://www.youtube.com/watch?v=NUQkajBdnmQ', 'https://www.youtube.com/watch?v=tOusa012Fus'];

const PageThree = () => {
    return (
        <section className="page">
            <h2 className="page__header">Page Three</h2>
            <p className="page__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus voluptatibus id asperiores optio beatae voluptates accusamus dolores omnis odio ipsam velit assumenda excepturi illum deserunt, perspiciatis libero maiores dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam dicta in expedita, obcaecati facilis vel molestiae, minus neque, perferendis facere. Debitis tenetur voluptatem veritatis eum laudantium quod ex vero. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis veritatis maiores et ipsum earum excepturi. Debitis odio, quaerat consequatur vero sequi quo reiciendis nostrum odit error, minima adipisci saepe. Saepe!</p>

            <Docs links={Links} commands={Commands} tutorials={Tutorials} className="moveDown"/>
        </section>
    );
}
 
export default PageThree;