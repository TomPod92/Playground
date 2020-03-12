import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './task.scss';

class Task extends React.Component {
    state = {
        disabled: false
    }

    handleDisable = () => {
        this.setState( prevState => ({
            disabled: !prevState.disabled
        }))
    }

    render() {
        console.log('task')
        // console.log('Propsy komponentu TASK: ', this.props)
        return (
            // Trzeba opakować komponent, który będzie naszym DRAGGABLE
            // Ma on dwa wymagane propsy, które trzeba podać (index jest po prostu indexem w tablicy przekazanym z funkcji map)
            // Wszystko co znajduje się wewnątrz powinno być zwrócone w funkcji
            // Funkcja ta przyjmuje argument "provided". Zawiera on obiekt "draggableProps", który musi być przekazany do elementu, który będzię naszym DRAGGABLE 
            // Provided zawiera również obiekt "dragHandleProps", który powinien być przekazany do elementu, który będzie służył za nasz uchwyt do drag'owania (np. możemy chcieć przesuwać nasz <Task /> tylko za jego mała część np. div). W tym wypadku przekazujemy je do całego komponentu Task
            // Elementowi, który będzie naszym DRAGGABLE trzeba równiez przypisać "ref". Musi on jednak być podany na elemencie HTML, a nie react'owym komponencie
            // Drugim argumentem funkcji jest "snaphot", za pomocą którego będziemy mogli ostylować ten element
            // Za pomocą "isDragDisabled" możemy kontrolować czy dany element może być drag'owany
            <Draggable 
                draggableId={this.props.task.id} 
                index={this.props.index}
                isDragDisabled={this.state.disabled}
            >
                {(provided, snapshot) => (
                    <div 
                        className={snapshot.isDragging ? "task task--isDragged" : "task"} 
                        {...provided.draggableProps} 
                        {...provided.dragHandleProps} 
                        ref={provided.innerRef}
                    >
                        { this.props.task.content }

                        <button className="task__button" onClick={this.handleDisable}>{this.state.disabled ? "Unclock" : "Lock"}</button>
                    </div>
                )}
            </Draggable>
        )
    }
}
 
export default Task;

// // przykład obiektu "snapshot"
// const draggableSnapshot = {
//     isDragging: true, // true--> gdy DRAGGABLE jest właśnie przeciągany
//     draggingOver: 'column-1', // ID elementu DROPPABLE, nad którym hover'ujemy 
// }