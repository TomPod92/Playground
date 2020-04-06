import React from 'react';
import Docs from '../Docs/Docs.js';

const Links = [ {link: 'https://reactcommunity.org/react-transition-group/', text:'for transiton-group'} ];
const Commands = ['npm install react-transition-group --save'];
const Tutorials = ['https://www.youtube.com/watch?v=NUQkajBdnmQ', 'https://www.youtube.com/watch?v=tOusa012Fus'];

const PageTwo = () => {
    return (
        <section className="page">
            <h2 className="page__header">Page Two</h2>
            <p className="page__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit repellendus voluptatibus id asperiores optio beatae voluptates accusamus dolores omnis odio ipsam velit assumenda excepturi illum deserunt, perspiciatis libero maiores dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam veniam dicta in expedita, obcaecati facilis vel molestiae, minus neque, perferendis facere. Debitis tenetur voluptatem veritatis eum laudantium quod ex vero. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni deleniti aliquam quas facere quos fuga eum quia obcaecati impedit nemo. Assumenda dicta amet animi obcaecati molestias adipisci culpa at vel. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quaerat dolores? Atque dolore numquam vitae nihil voluptatibus consectetur voluptates nostrum obcaecati accusantium odio maxime doloremque, aliquid quaerat illum saepe amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati qui assumenda quidem corrupti, itaque laborum officia iste cum amet at incidunt omnis dolor. Maxime sunt quae, veniam quia impedit sint? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore qui facilis expedita nemo ea consequatur illum porro perspiciatis? Est quia, quae officiis voluptatibus exercitationem eligendi porro beatae minima vitae unde.</p>

            <Docs links={Links} commands={Commands} tutorials={Tutorials} className="moveDown"/>
        </section>
    );
}
 
export default PageTwo;