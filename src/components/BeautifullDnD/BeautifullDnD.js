import React from 'react';
import Docs from '../Docs/Docs.js';
import Column from './Column.js';
import data from './data.js';
import { DragDropContext } from 'react-beautiful-dnd';
import './beautifullDnD.scss';

const Links = [ {link: 'https://github.com/atlassian/react-beautiful-dnd', text:'for react dnd'} ];
const Commands = ['npm install react-beautiful-dnd --save'];
const Tutorials = ['https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd'];

class BeautifullDnD extends React.Component {
    state = data;
//----------------------------------------------------------------------------------------------------------------
    handleDragStart = () => {
        // document.querySelector('.beautifullDnD').style.background = 'red';

        // pamiętać żeby w "onDragEnd" zresetować tą wartość --> document.querySelector('.beautifullDnD').style.background = 'inherit';
        // document.querySelector('.beautifullDnD').style.transition= 'background-color 0.3s ease-in';
    }
//----------------------------------------------------------------------------------------------------------------
    // Jedyny wymagany callback, który trzeba podać do <DragDropContext/>. 
    // To tutaj będziemy update'ować stan aplikacji po każdym przesunięciu jakiegoś DRAGGABLE
    handleOnDragEnd = (result) => {

        const { draggableId, source, destination } = result;
        // console.log('Obiekt Result w onDragEnd ', result);

        // jeżeli upuścimy DRAGGABLE poza DROPPABLE nic nie rób
        if(!destination) return;

        // jeżeli upuścimy DRAGGABLE w to samo miejsce nic nie rób
        if(destination.droppableId === source.droppableId && destination.index === source.index) return;

        // musimy zmienić kolejność w "data.columns[...].taskIds"
        const startColumn = this.state.columns[source.droppableId];
        const finishColumn = this.state.columns[destination.droppableId];
        const newTaskIds = Array.from(startColumn.taskIds);

        // jeżeli przesuwamy element w obrębie tej samej kolumny
        if(startColumn === finishColumn) {
            // przesuwamy taskId w nowe miejsce 
            newTaskIds.splice(source.index, 1);
            newTaskIds.splice(destination.index, 0, draggableId);

            const newColumn = {
                ...startColumn,
                taskIds: newTaskIds,
            };

            this.setState({
                columns: {
                    ...this.state.columns,
                    [newColumn.id]: newColumn
                }
            })

            return;

            // inny sposób na update state
            // const newState = {
            //     ...this.state,
            //     columns: {
            //         ...this.state.columns,
            //         [newColumn.id]: newColumn
            //     },
            // };

            // this.setState(newState);

        // jeżeli presuwamy element między kolumnami
        } else {
            const startTaskIds = Array.from(startColumn.taskIds); // kopia startowego taskIds array
            startTaskIds.splice(source.index, 1); // usuwamy taskId przeciąganego elementu
            const newStartColumn = {
                ...startColumn,
                taskIds: startTaskIds
            }

            const finishTaskIds = Array.from(finishColumn.taskIds); // kopia końcowego taskIds array
            finishTaskIds.splice(destination.index, 0, draggableId) // dodajemy taskId przeciąganego elemntu
            const newFinishColumn = {
                ...finishColumn,
                taskIds: finishTaskIds
            }

            this.setState({
                columns: {
                    ...this.state.columns,
                    [newStartColumn.id]: newStartColumn,
                    [newFinishColumn.id]: newFinishColumn
                }
            })

            // inny sposób na update state
            // const newState = {
            //     ...this.state,
            //     columns : {
            //         ...this.state.columns,
            //         [newStartColumn.id]: newStartColumn,
            //         [newFinishColumn.id]: newFinishColumn
            //     }
            // }

            // this.setState(newState);
        }

        

    }
//----------------------------------------------------------------------------------------------------------------
    handleDragUpdate = (update) => {
        // const opacity = update.destination ? update.destination.index / Object.keys(this.state.tasks).length : 0;
        // document.querySelector('.beautifullDnD').style.background = `rgba(81, 157, 158, ${opacity})`;
    }
//----------------------------------------------------------------------------------------------------------------
    render() {
        return (
            <div className="centered">
                <div className="beautifullDnD">
                    {/* Trzeba opakować cała część aplikacji, która ma mieć dostęp do drag-and-drop'a */}
                    <DragDropContext
                        onDragStart={this.handleDragStart}
                        onDragEnd={this.handleOnDragEnd}
                        onDragUpdate={this.handleDragUpdate}
                    >
                        { this.state.columnOrder.map( currentColumn => {
                            const column = this.state.columns[currentColumn];
                            const tasks = column.taskIds.map( currentTaskId => this.state.tasks[currentTaskId]);

                            return <Column key={column.id} column={column} tasks={tasks}/>
                        }) }
                    </DragDropContext>
                </div>

                <Docs links={Links} commands={Commands} tutorials={Tutorials}/>
            </div>
        )
    }
}
 
export default BeautifullDnD;

// Przykładowy obiekt "start" dostępny w "onDragStart"
// const start = {
//     draggableId: 'task-1', // ID elementu który przeciągamy
//     type: 'TYPE',
//     source: {
//         droppableId: 'column-1', // miejsce w którym element sie znajdował
//         index: 0,
//     }
// };


// Przykładowy obiekt "result" dostępny w "onDragEnd"
// const result = {
//     draggableID: 'task-1', // ID elementu DRAGGABLE, który przeciągamy
//     type: "TYPE",
//     reason: 'DROP', // może być DROP albo CANCEL (gdy przy przeciąganiu naciśniemy Escape)
//     source: {
//         droppableId: 'column-1', // zaczeliśmy w
//         index: 0,
//     },
//     destination: {
//         droppableId: 'column-1', // skończyliśmy w (może być NULL'em, gdy upuścimy poza DROPPABLE )
//         index: 1,
//     }
// };


// Przykładowy obiekt "update" dostępny w "onDragUpdate"
// const update = {
//     draggableId: 'task-1',
//     type: 'TYPE',
//     source: {
//         droppableID: 'column-1',
//         index: 0,
//     },
//     destination: {
//         droppableId: 'column-1', // miejsce w którym upuścimy element 
//         index: 1,
//     }
// };