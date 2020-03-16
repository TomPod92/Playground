import React from 'react';
import { useDrag } from 'react-dnd';
import { dndTypes } from './dndTypes.js';

const Task = (props) => {

    const [ {isDragging}, dragRef ] = useDrag({
        item: {
            type: dndTypes.TASK,
            id: props.task.id,
            status: props.task.status
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging()
        })
    })

    // 1. W "item" określamy do czego będziemy mieli dostęp po tym jak upuścimy przeciągany element (wymagane jest tylko "type")
    // 2. Element, który będzie miał prop "ref" będzię mógł być przeciągany

    return ( 
        <div className={isDragging ? "taskList__item taskList__item--dragged" : "taskList__item"} ref={dragRef}>
            {props.task.text}
        </div>
     );
}
 
export default Task;