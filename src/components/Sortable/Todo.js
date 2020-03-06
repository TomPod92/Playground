import React from 'react';
import './todo.scss';

const Todo = (props) => {
    return ( 
        <div className="todo">
            <span>{props.todo.name}</span>

            <button className="todo__delete" onClick={() => props.handleRemoveTodo(props.todo.id)}>Usuń</button>
        </div>
    );
}
 
export default Todo;