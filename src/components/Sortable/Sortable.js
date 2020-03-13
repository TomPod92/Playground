import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ReactSortable } from "react-sortablejs";
import Docs from '../Docs/Docs.js';
import Todo from './Todo.js';
import './sortable.scss';

// można dodać dodatkowe propsy na <ReactSortable /> np. żeby nie pokazywać drag'owanego elementu. Link do dostępnych opcji znajduje się w linku podanym w "see docs"

const sortableCommands = ['npm install --save react-sortablejs'];
const sortableLinks = [{link: "https://github.com/SortableJS/react-sortablejs", text:'for sortable'}];
const sortableTutorials = ['https://www.youtube.com/watch?v=_btr_GtT1Yg&t=455s'];

const Sortable = () => {
    const [ todos, setTodos ] = useState([
        { id: uuidv4(), name: 'Skosić trawnik'},
        { id: uuidv4(), name: 'Umyć samochód'},
        { id: uuidv4(), name: 'Zrobić zakupy'},
    ]);
//---------------------------------------------------------------------------
    const [ newTodoName, setNewTodoName ] = useState('');
//---------------------------------------------------------------------------
    const handleInputChange = (event) => setNewTodoName(event.target.value)
//---------------------------------------------------------------------------
    const handleAddNewTodo = () => {
        if(!newTodoName) return

        setTodos([
            ...todos,
            { id: uuidv4(), name: newTodoName }
        ]);

        setNewTodoName('');
    }
//---------------------------------------------------------------------------
    const handleRemoveTodo = (id) => {
        const newTodosArray = todos.filter(current => current.id !== id);
        setTodos(newTodosArray);
    }
//---------------------------------------------------------------------------
    return ( 
        <div className="sortable centered">
            <h2 className="basicHeader">Dodaj nowe zadanie</h2>
            <div className="formContainer">
                <input className="sortable__input" type="text" value={newTodoName} onChange={handleInputChange} />
                <button className="button" onClick={handleAddNewTodo}>Dodaj</button>
            </div>

            <h2 className="basicHeader">Do zrobienia</h2>
            <ReactSortable list={todos} setList={setTodos}>
                { todos.map(current => <Todo key={current.id} todo={current} handleRemoveTodo={handleRemoveTodo}/>) }
            </ReactSortable>
            
            <Docs links={sortableLinks} commands={sortableCommands} tutorials={sortableTutorials}/>
        </div> 
    );
}
 
export default Sortable;