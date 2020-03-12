import React from 'react';
import Task from './Task.js';


class ClassList extends React.Component {
    render() { 
        return ( this.props.tasks.map( (currentTask, index) => <Task key={currentTask.id} task={currentTask} index={index}/>) );
    }
}
 
export default ClassList;