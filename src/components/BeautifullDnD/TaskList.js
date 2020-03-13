import React from 'react';
import Task from './Task.js';


class ClassList extends React.Component {

    shouldComponentUpdate(nextProps) {
        if(nextProps.tasks === this.props.tasks) {
            return false;
        } 

        return true;
    }

    render() {
        return ( this.props.tasks.map( (currentTask, index) => <Task key={currentTask.id} task={currentTask} index={index}/>) );
    }
}
 
export default ClassList;