import React from 'react';

const Card = (props) => {

    const dragStart = (event) => {
        
        // get card that is being dragged
        const target = event.target;

        // save dragged card ID in dataTransfer
        event.dataTransfer.setData('card_id', target.id);

        // setTimeout(() => {
        //     target.style.display = "none";
        // }, 0);
    }

    const dragOver = (event) => event.stopPropagation();

    return ( 
        <div id={props.task.id} className="card" onDragStart={dragStart} onDragOver={dragOver} draggable={true}>
            { props.task.name }
        </div> 
    );
}
 
export default Card;