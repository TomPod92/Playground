import React from 'react';
import Docs from '../Docs/Docs.js';
import RoadmapProgress from 'react-roadmap-progress';
import './roadmap.scss';

const roadmapLinks = [ {link: 'https://www.npmjs.com/package/react-roadmap-progress', text:'for roadmap progress'} ];
const roadmapCommands = ['npm i react-roadmap-progress --save'];

const milestones = [
    {
        title: 'Milestone 1',
        version: '0.0.1',
        description: 'Just getting started...',
        complete: true,
    },
    {
        title: 'Milestone 2',
        version: '1.0.0',
        description: (
            <div>
                <h2>Launch!</h2>
                <p>Woohoo!</p>
            </div>
        ),
        complete: false,
    },
];

const Roadmap = () => {
    return ( 
        <div className="roadmap centered">
            <RoadmapProgress milestones={milestones} />
            <Docs links={roadmapLinks} commands={roadmapCommands}/>
        </div>
     );
}
 
export default Roadmap;