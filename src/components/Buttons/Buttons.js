import React from 'react';
import './buttons.scss';

const Buttons = () => {

    const createRipples = (event) => {
        // clientX --> ilość pixeli od lewej krawędzi ekranu
        // offsetLeft --> ilość pixeli jaka dzieli lewą krawędz ekranu od lewej krawędzi elementu na którego klikamy (tutaj buttona)
        // clientY --> ilość pixeli od górnej krawędzi ekranu
        // offsetTop --> ilość pixeli jaka dzieli górna krawędz ekranu od górnej krawędzi elementu na którego klikamy (tutaj buttona)
        const x = event.clientX - event.target.offsetLeft;
        const y = event.clientY - event.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.setAttribute('class', 'ripple');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';

        event.target.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);

    };

    
//   const test = () => () => console.log('test')

    return ( 
        <div className="buttons centered">
            <button className="coolButton coolButton--one" onClick={createRipples}>button</button>
            <button className="coolButton coolButton--two" onClick={createRipples}>button</button>
            {/* <button onClick={() => test()} >Test</button> */}
        </div>
    );
}
 
export default Buttons;