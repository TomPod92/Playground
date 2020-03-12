import React from 'react';
import Docs from '../Docs/Docs.js';
import Column from './Column.js';
import data from './data.js';
import './beautifullDnD.scss';

const Links = [ {link: 'https://github.com/atlassian/react-beautiful-dnd', text:'for react dnd'} ];
const Commands = ['npm install react-beautiful-dnd --save'];
const Tutorials = ['https://egghead.io/courses/beautiful-and-accessible-drag-and-drop-with-react-beautiful-dnd'];

class BeautifullDnD extends React.Component {

    state = data;

    render() {
        return (
            <div className="beautifullDnD container">

                { this.state.columnOrder.map( current => {
                    const column = this.state.columns[current];
                    const tasks = column.taskIDs.map( current => this.state.tasks[current]);

                    return <Column key={column.id} column={column} tasks={tasks}/>
                }) }





                <Docs links={Links} commands={Commands} tutorials={Tutorials}/>
            </div>
        )
    }
}
 
export default BeautifullDnD;



//-------------------------------------------------------------------------------------------
// const BeautifullDnD = () => {


//     return ( 
//         <div className="beautifullDnD container">
//             BeautifullDnD

//             <Docs links={Links} commands={Commands} tutorials={Tutorials}/>
//         </div>
//      );
// }