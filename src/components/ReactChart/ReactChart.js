import React, { useState } from 'react';
import Docs from '../Docs/Docs.js';
import LineChart from './LineChart.js';
import BarChart from './BarChart.js';
import DoughnutChart from './DoughnutChart.js';
import './reactChart.scss';

const Links = [ {link: 'https://github.com/jerairrest/react-chartjs-2', text:'react-charts-2'} ];
const Commands = ['npm install --save react-chartjs-2 chart.js'];
const Tutorials = ['https://www.youtube.com/watch?v=28ZbeLWmfiQ'];

const ReactCharts = () => {
    const [show, setShow ] = useState('line');

    const handleSwitchChart = (event) => setShow(event.target.dataset.type);

    return (
        <div className="centered">
            <div className="button-container">
                <button className="chart__button" data-type="line" onClick={handleSwitchChart}>Line</button>
                <button className="chart__button" data-type="bar" onClick={handleSwitchChart}>Bar</button>
                <button className="chart__button" data-type="doughnut" onClick={handleSwitchChart}>Doughnut</button>
            </div>

            {show === 'line' && (
                <div className="withCustomSize">
                    <LineChart />
                </div>
            )}

            {show === 'bar' && <BarChart />}
            {show === 'doughnut' && <DoughnutChart />}
            
            <Docs links={Links} commands={Commands} tutorials={Tutorials}/>
        </div>
    );
}
 
export default ReactCharts;
