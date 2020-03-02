import React from 'react';

const Board = (props) => {

    const drop = (event) => {
        event.preventDefault();

        // get dragged card ID from dataTransfer
        const dragged_card_id = event.dataTransfer.getData('card_id');

        // where dragged target is going to be dropped
        const dropTargetID = event.target.id;

        // check if dragged item is being dropped in correct location (board_1 or board_2)
        if (dropTargetID === 'board_1') {
            props.toggleTaskStatus(dragged_card_id, false);
        } else if (dropTargetID === 'board_2') {
            props.toggleTaskStatus(dragged_card_id, true);
        } else {
            return;
        }
    }

    const dragOver = (event) => event.preventDefault();

    return ( 
        <div id={props.id} className="board" onDrop={drop} onDragOver={dragOver}>
            <h2 className="board__title">{props.title}</h2>
            { props.children }
        </div> 
    );
}
 
export default Board;
