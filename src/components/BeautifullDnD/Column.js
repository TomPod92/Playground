import React from 'react';
// import Task from './Task.js';
import TaskList from './TaskList.js';
import { Droppable } from 'react-beautiful-dnd';
import './column.scss';

class Column extends React.Component {

    state = {
        columnDisabled: false
    }

    handleColumDisable = () => {
        this.setState( prevState => ({
            columnDisabled: !prevState.columnDisabled
        }))
    }
    
    render() {
        return (
            <div className="column">
                <h2 className="column__title">
                    {this.props.column.title}
                    <button className="column__button" onClick={this.handleColumDisable}>{this.state.columnDisabled ? "Unlock" : "Lock"}</button>
                </h2>

                {/* Trzeba opakować nim każdy komponent, który będzie miał mieć możliwość drag'owania */}
                {/* Jedyny wymagany prop to droppableId */}
                {/* Wszystko co znajduje się wewnątrz Droppable powinno być zwrócone w funkcji */}
                {/* Funkcja ta przyjmuje argument "provided". Zawiera on obiekt "droppableProps", który musi być przekazany do elementu, który będzię naszym DROPPABLE */}
                {/* Elementowi, który będzie naszym DROPPABLE trzeba równiez przypisać "ref". Musi on jednak być podany na elemencie HTML, a nie react'owym komponencie */}
                {/* Wewnątrz naszego DROPPABLE trzeba również wstawić "provided.placeholder", który zwiększy dostępne miejsce podczas przeciągania elementu jeżeli będzie taka potrzeba */}
                {/* Drugim argumentem funkcji jest "snaphot", za pomocą którego będziemy mogli ostylować ten element */}
                {/* Możemy do <Droppable/> dodać prop "type". Obiekty DRAGGABLE mogą być przenoszone miedzy DROPPABLE tylko jeżęli oba DROPPABLE maja taki sam typ */}
                {/* Aby zmienić orientacje wystarczy poda prop ---direction="horizontal"--- */}
                <Droppable 
                    droppableId={this.props.column.id}
                    isDropDisabled={this.state.columnDisabled}
                >
                    {(provided, snapshot) => (
                        <div 
                            className={snapshot.isDraggingOver ? "column__list column__list--isHovered" : "column__list"  }
                            {...provided.droppableProps} 
                            ref={provided.innerRef}
                        >
                            <TaskList tasks={this.props.tasks}/>

                            {/* { this.props.tasks.map( (currentTask, index) => <Task key={currentTask.id} task={currentTask} index={index}/>) } */}

                            {provided.placeholder} 
                        </div>
                    )}
                </Droppable>
            </div>
        )
    }
}

export default Column;

// // przykład obiektu "snapshot"
// const droppableSnapshot = {
//     isDraggingOver: true, // true --> gdy DRAGGABLE jest przeciągany nad DROPPABLE
//     draggingOverWith: 'task-1', // ID elementu DRAGGABLE ktory jest nad DROPPABLE
// }