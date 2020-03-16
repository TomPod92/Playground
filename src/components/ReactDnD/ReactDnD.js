import React, { useState } from 'react';
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend';
import Docs from '../Docs/Docs.js';
import WipTaskList from './WipTaskList.js';
import DoneTaskList from './DoneTaskList.js';
import './reactDnD.scss';

const Links = [ {link: 'https://react-dnd.github.io/react-dnd/docs/overview', text:'for React Dnd'} ];
const Commands = ['npm install react-dnd', 'npm install react-dnd-html5-backend'];
const Tutorials = ['https://www.youtube.com/watch?v=NW8erkUgqus&t=1202s'];

const ReactDnd = () => {

  const [ tasks, setTasks ] = useState([
    { id: 1, text: "Wyprowadzić psa", status: "wip"},
    { id: 2, text: "Umyć naczynia", status: "wip"},
    { id: 3, text: "zrobić zakupy", status: "wip"},
    { id: 4, text: "WPosprzątać pokój", status: "wip"},
    { id: 5, text: "Zrobić obiad", status: "wip"},
  ]);

  const markAsDone= (taskID, taskStatus) => {

    const changeStatusTo = taskStatus === "wip" ? "done" : "wip";

    const newTaskList = tasks.map(current => {
      if(current.id === taskID) return {...current, status: changeStatusTo}
      else return current
    });

    setTasks(newTaskList);
  }

  // 1. Blok kodu, który ma mięć dostęp do "Drag and Drop" owijamy w <DndProvider />, do którego przekazujemy prop "backend"

  return ( 
    <div className="centered">

      <DndProvider backend={Backend}>
        <div className="taskListContainer">
          <WipTaskList tasks={tasks} markAsDone={markAsDone}/>
          <DoneTaskList tasks={tasks} markAsDone={markAsDone}/>
        </div>
      </DndProvider>
      
      <Docs links={Links} commands={Commands} tutorials={Tutorials}/>

    </div>
   );
}
 
export default ReactDnd;