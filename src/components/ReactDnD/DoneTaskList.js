import React from 'react';
import { useDrop } from 'react-dnd';
import Task from './Task.js';
import './reactDnD.scss';
import { dndTypes } from './dndTypes.js';

const DoneTaskList = (props) => {

    const [ {isOver}, dropRef ] = useDrop({
        accept: dndTypes.TASK,
        collect: monitor => ({
            isOver: !!monitor.isOver()
        }),
        drop: (item) => props.markAsDone(item.id, item.status)
    });

    // 1. W 'accept" określamy, co będzie mogło być upuszczane do danego elementu
    // 2. Element, który będzie miał props "ref" będzię miejscem do ktrego możemy upuszczać elementy
    // 3. Funkcja "drop" zostanie wywołana, gdy upuścimy element. Mamy w niej dostęp do obiektu "item", który określiliśmy w "useDrag" w komponencie Task

    return ( 
        <div className="taskList" ref={dropRef}>
            <h2 className="taskList__header">Zrobione</h2>
            <div className={isOver ? "doneList doneList--highlighted" : "doneList"}>
                {props.tasks.filter(current => current.status === 'done').map(current => <Task key={current.id} task={current}/>)}
            </div>
        </div>
    );
}
 
export default DoneTaskList;