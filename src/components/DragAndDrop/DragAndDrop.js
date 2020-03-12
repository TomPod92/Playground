import React, { useState } from 'react';
import Board from './Board.js';
import Card from './Card.js';
import './dragAndDrop.scss';

const DragAndDrop = () => {

    const [ tasks, setTasks ] = useState([
        {id:"task_1", name:"task 1", done: false},
        {id:"task_2", name:"task 2", done: false},
        {id:"task_3", name:"task 3", done: false},
        {id:"task_4", name:"task 4", done: false},
    ]);

    const toggleTaskStatus = (id, done) => {
        const newTasks = tasks.map(current => {
            if(current.id === id) {
                return {
                    ...current,
                    done: done
                }
            } else return current
        });

        setTasks(newTasks)
    }

    const createTaskItems = (status) => {
        if(status === "done") {
            // eslint-disable-next-line
            return tasks.map( current => {
                if(!current.done) return <Card key={current.id} task={current} />
            })
        } else if(status === "notDone") {
            // eslint-disable-next-line
            return tasks.map( current => {
                if(current.done) return <Card key={current.id} task={current} />
            })
        }   
    }

    return ( 
        <div className="dragAndDrop">
            <Board id="board_1" title="Done:" toggleTaskStatus={toggleTaskStatus}>
                { createTaskItems('done') }
            </Board>

            <Board id="board_2" title="To do:" toggleTaskStatus={toggleTaskStatus}>
                { createTaskItems('notDone') }
            </Board>
        </div> 
    );
}
 
export default DragAndDrop;